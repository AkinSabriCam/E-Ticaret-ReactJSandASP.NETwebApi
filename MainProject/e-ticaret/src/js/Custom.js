
import $ from 'jquery';
import Cookies from 'js-cookie';

$(function(){
     
    setInterval(function(){
    var date = new Date();
     if(date.getHours()===2)
        {
             $.ajax({
                type:"PUT",
                url:"http://localhost:50040/api/ZiyaretLog/PutLogDate",
                suceess:function(){
                    console.log("ok");
                },
                error:function(err,status,xhr){
                    console.log("Ziyaretçi loglama tarih güncellemelerinde problem var! " + err.status);
                }
            })
        }
    },600000)// Her saat kontrol edecektir.

    setInterval(function(){
        var date = new Date();
         if(date.getHours()===0)
            {
                 $.ajax({
                    type:"PUT",
                    url:"http://localhost:50040/api/KullaniciLog/PutLogDate",
                    suceess:function(){
                        console.log("ok");
                    
                    },
                    error:function(err,status,xhr){
                        console.log("Kullanıcı loglama tarih güncellemelerinde problem var! " + err.status);
                    }
                })
            }
        },600000)// Her saat kontrol edecektir.
    
        setInterval(function(){
             if(Cookies.get("Login")==null && Cookies.get("sepetid")!=null)
                { 
                     $.ajax({
                        type:"DELETE",
                        url:"http://localhost:50040/api/Sepet/DeleteSepet/"+Cookies.get("sepetid"),
                        suceess:function(){
                           
                            console.log("ok");
                            
                        },
                        error:function(err,status,xhr){
                            console.log("sepet silme işleminde problem var" + err.status);
                        }
                    })
                    Cookies.remove("sepetid");
                    Cookies.remove("ProductCount");
                }
                else{
                    console.log("sepette ürün yok veya sepet bir kullanıcıya aitdir.");
                }
            },60000)// 1 dakika
    
   
    $(".illist").change(function(){
       var id=$(this).val();
        $.ajax({
            type:"GET",
            url:"http://localhost:50040/api/Iletisim/GetDistrictsByCityId/"+id,
            success:function(data){
                $(".ilcelist").empty()
                $.each(data,function(index){
                    $(".ilcelist").append(
                        '<option value='+data[index].IlceID+'>'+data[index].Ilce+'</option>'
                    
                    )
                })
            },
            error:function(error,xhr,status){
                console.log("error")
            }

       })
    })

})




