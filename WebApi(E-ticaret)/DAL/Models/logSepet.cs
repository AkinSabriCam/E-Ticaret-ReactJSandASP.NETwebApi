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
    
    public partial class logSepet
    {
        public int logSepetID { get; set; }
        public Nullable<int> urunID { get; set; }
        public Nullable<int> adet { get; set; }
    
        public virtual Urun Urun { get; set; }
    }
}
