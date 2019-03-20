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
    
    public partial class Urun
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Urun()
        {
            this.Favoriler = new HashSet<Favoriler>();
            this.logSatinAlinan = new HashSet<logSatinAlinan>();
            this.logSepet = new HashSet<logSepet>();
            this.SepettekiUrunler = new HashSet<SepettekiUrunler>();
        }
    
        public int urunID { get; set; }
        public string ad { get; set; }
        public Nullable<int> markaID { get; set; }
        public Nullable<int> altKategoriID { get; set; }
        public Nullable<decimal> fiyat { get; set; }
        public Nullable<System.DateTime> eklenmeTarihi { get; set; }
        public Nullable<int> stokID { get; set; }
        public Nullable<bool> satinAlinmaDurumu { get; set; }
        public string imagePath { get; set; }
    
        public virtual AltKategori AltKategori { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Favoriler> Favoriler { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<logSatinAlinan> logSatinAlinan { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<logSepet> logSepet { get; set; }
        public virtual Marka Marka { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SepettekiUrunler> SepettekiUrunler { get; set; }
        public virtual Stok Stok { get; set; }
    }
}