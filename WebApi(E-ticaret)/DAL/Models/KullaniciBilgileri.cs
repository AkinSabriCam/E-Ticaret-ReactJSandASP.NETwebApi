//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class KullaniciBilgileri
    {
        public int kullaniciID { get; set; }
        public string ad { get; set; }
        public string soyad { get; set; }
        public Nullable<bool> cinsiyet { get; set; }
        public Nullable<int> iletisimID { get; set; }
    
        public virtual Iletisim Iletisim { get; set; }
        public virtual Kullanici Kullanici { get; set; }
    }
}