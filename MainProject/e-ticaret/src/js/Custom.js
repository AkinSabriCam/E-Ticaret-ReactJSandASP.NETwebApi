
import $ from 'jquery';

$(function($){
 
   setInterval(function(){
    var date = new Date();
     if(date.getHours()===0)
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

    

})