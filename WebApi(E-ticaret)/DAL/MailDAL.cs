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
        Models.Entities db = new Models.Entities();
        public bool SendMailAsVisitor(ViewModels.MailViewModel model)
        {
            System.Globalization.CultureInfo cultureInfo = System.Threading.Thread.CurrentThread.CurrentCulture;
            System.Globalization.TextInfo textInfo = cultureInfo.TextInfo;
            string ad = textInfo.ToTitleCase(model.ad);
            string soyad = textInfo.ToTitleCase(model.soyad);
            MailMessage ePosta = new MailMessage();
            ePosta.From = new MailAddress("groupbyazilim@gmail.com");
            //
            ePosta.To.Add("cakicozgur@gmail.com");
            //

            //
            ePosta.Subject = "Ziyaretçi Mesajı";
            //
            ePosta.Body = ad + " " + soyad + "[" + model.email + "]" + " ziyaretçisinden mesaj;"
                          + Environment.NewLine
                          + Environment.NewLine
                          + model.mesaj;
            //
            SmtpClient smtp = new SmtpClient();
            //
            smtp.Credentials = new System.Net.NetworkCredential("groupbyazilim@gmail.com", "159654357456");
            smtp.Port = 587;
            smtp.Host = "smtp.gmail.com";
            smtp.EnableSsl = true;
            object userState = ePosta;
            try
            {
                smtp.SendAsync(ePosta, (object)ePosta);
                return true;
            }
            catch (SmtpException ex)
            {
                throw new SmtpException(ex.ToString());
            }

        }

        public bool SendMailAsUser(ViewModels.UserMailViewModel model)
        {
            var kullanici = db.Kullanici.FirstOrDefault(x => x.kullaniciID == model.kullaniciID);
            if (model != null)
            {
                MailMessage ePosta = new MailMessage();
                ePosta.From = new MailAddress("groupbyazilim@gmail.com");
                ePosta.To.Add("cakicozgur@gmail.com");

                ePosta.Subject = "Kullanıcı Mesajı";
                ePosta.Body = kullanici.kullaniciAdi + "[" + kullanici.email + "]" + " kullanıcısından mesaj;"
                              + Environment.NewLine
                              + Environment.NewLine
                              + model.mesaj;
                SmtpClient smtp = new SmtpClient();
                smtp.Credentials = new System.Net.NetworkCredential("groupbyazilim@gmail.com", "159654357456");
                smtp.Port = 587;
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                object userState = ePosta;
                try
                {
                    smtp.SendAsync(ePosta, (object)ePosta);
                    return true;
                }
                catch (SmtpException ex)
                {
                    throw new SmtpException(ex.ToString());
                }
            }
            else
            {
                return false;
            }

        }
    }
}
