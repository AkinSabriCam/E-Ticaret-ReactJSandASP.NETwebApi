using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using DAL;
using System.IO;
using System.Net;
using System.Net.Mail;

namespace DAL
{
    public class MailDAL
    {
        public bool SendMailAsVisitor(ViewModels.MailViewModel model)
        {
            try {
                using (MailMessage mm = new MailMessage(model.email, "ibrahim.dogruer.97@gmail.com"))
                {
                    System.Globalization.CultureInfo cultureInfo = System.Threading.Thread.CurrentThread.CurrentCulture;
                    System.Globalization.TextInfo textInfo = cultureInfo.TextInfo;
                    string ad = textInfo.ToTitleCase(model.ad);
                    string soyad = textInfo.ToTitleCase(model.soyad);
                    mm.Subject = "Ziyaretçi Mesajı";
                    mm.Body = ad + " " + soyad + "[" + model.email + "]" + " ziyaretçisinden mesaj;"
                              + Environment.NewLine
                              + Environment.NewLine
                              + model.mesaj;

                    mm.IsBodyHtml = false;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = "smtp.gmail.com";
                    smtp.EnableSsl = true;
                    NetworkCredential NetworkCred = new NetworkCredential("groupbyazilim@gmail.com", "159654357456");
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = NetworkCred;
                    smtp.Port = 587;
                    smtp.Send(mm);
                    return true;
                }
            }
            catch(Exception e)
            {
                throw new Exception(e.ToString());

            }
        }

        public bool SendMailAsUser(ViewModels.UserMailViewModel model)
        {
            try
            {
                using (MailMessage mm = new MailMessage(model.email, "ibrahim.dogruer.97@gmail.com"))
                {
                    mm.Subject = "Kullanıcı Mesajı";
                    mm.Body = model.kullaniciAdi + "[" + model.email + "]" + " kullanıcısından mesaj;"
                              + Environment.NewLine
                              + Environment.NewLine
                              + model.mesaj;

                    mm.IsBodyHtml = false;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = "smtp.gmail.com";
                    smtp.EnableSsl = true;
                    NetworkCredential NetworkCred = new NetworkCredential("groupbyazilim@gmail.com", "159654357456");
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = NetworkCred;
                    smtp.Port = 587;
                    smtp.Send(mm);
                    return true;
                }
            }
            catch
            {
                return false;
            }
        }
    }
}
