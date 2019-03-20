USE [master]
GO
/****** Object:  Database [E-Ticaret]    Script Date: 20.03.2019 13:39:38 ******/
CREATE DATABASE [E-Ticaret]
GO
ALTER DATABASE [E-Ticaret] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [E-Ticaret].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [E-Ticaret] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [E-Ticaret] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [E-Ticaret] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [E-Ticaret] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [E-Ticaret] SET ARITHABORT OFF 
GO
ALTER DATABASE [E-Ticaret] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [E-Ticaret] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [E-Ticaret] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [E-Ticaret] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [E-Ticaret] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [E-Ticaret] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [E-Ticaret] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [E-Ticaret] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [E-Ticaret] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [E-Ticaret] SET  DISABLE_BROKER 
GO
ALTER DATABASE [E-Ticaret] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [E-Ticaret] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [E-Ticaret] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [E-Ticaret] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [E-Ticaret] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [E-Ticaret] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [E-Ticaret] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [E-Ticaret] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [E-Ticaret] SET  MULTI_USER 
GO
ALTER DATABASE [E-Ticaret] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [E-Ticaret] SET DB_CHAINING OFF 
GO
ALTER DATABASE [E-Ticaret] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [E-Ticaret] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [E-Ticaret] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'E-Ticaret', N'ON'
GO
ALTER DATABASE [E-Ticaret] SET QUERY_STORE = OFF
GO
USE [E-Ticaret]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [E-Ticaret]
GO
/****** Object:  Table [dbo].[AltKategori]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AltKategori](
	[altKategoriID] [int] IDENTITY(1,1) NOT NULL,
	[altKategori] [nvarchar](20) NULL,
	[kategoriID] [int] NULL,
 CONSTRAINT [PK_AltKategori] PRIMARY KEY CLUSTERED 
(
	[altKategoriID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Duyuru]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Duyuru](
	[duyuruID] [int] IDENTITY(1,1) NOT NULL,
	[icerik] [nvarchar](500) NULL,
	[tarih] [date] NULL,
	[okunmaDurumu] [bit] NULL,
 CONSTRAINT [PK_Duyuru] PRIMARY KEY CLUSTERED 
(
	[duyuruID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Favoriler]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Favoriler](
	[favoriID] [int] IDENTITY(1,1) NOT NULL,
	[urunID] [int] NULL,
	[kullaniciID] [int] NULL,
 CONSTRAINT [PK_Favoriler] PRIMARY KEY CLUSTERED 
(
	[favoriID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Il]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Il](
	[ilID] [int] IDENTITY(1,1) NOT NULL,
	[il] [nvarchar](20) NULL,
 CONSTRAINT [PK_Il] PRIMARY KEY CLUSTERED 
(
	[ilID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ilce]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ilce](
	[ilceID] [int] IDENTITY(1,1) NOT NULL,
	[ilce] [nvarchar](20) NULL,
	[ilID] [int] NULL,
 CONSTRAINT [PK_Ilce] PRIMARY KEY CLUSTERED 
(
	[ilceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Iletisim]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Iletisim](
	[iletisimID] [int] IDENTITY(1,1) NOT NULL,
	[ilID] [int] NULL,
	[ilceID] [int] NULL,
	[detay] [nvarchar](100) NULL,
 CONSTRAINT [PK_Iletisim] PRIMARY KEY CLUSTERED 
(
	[iletisimID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Kategori]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kategori](
	[kategoriID] [int] IDENTITY(1,1) NOT NULL,
	[kategori] [nvarchar](20) NULL,
 CONSTRAINT [PK_Kategori] PRIMARY KEY CLUSTERED 
(
	[kategoriID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Kullanici]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kullanici](
	[kullaniciID] [int] IDENTITY(1,1) NOT NULL,
	[kullaniciAdi] [nvarchar](50) NULL,
	[sifre] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[rolID] [int] NULL,
	[kayitTarihi] [date] NULL,
 CONSTRAINT [PK_Kullanici] PRIMARY KEY CLUSTERED 
(
	[kullaniciID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KullaniciBilgileri]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KullaniciBilgileri](
	[kullaniciID] [int] NOT NULL,
	[ad] [nvarchar](50) NULL,
	[soyad] [nvarchar](50) NULL,
	[cinsiyet] [bit] NULL,
	[iletisimID] [int] NULL,
 CONSTRAINT [PK_KullaniciBilgileri] PRIMARY KEY CLUSTERED 
(
	[kullaniciID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[logKullanici]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[logKullanici](
	[logKullaniciID] [int] IDENTITY(1,1) NOT NULL,
	[gunlukTarih] [date] NULL,
	[haftalikTarih] [int] NULL,
	[gunlukKayit] [int] NULL,
	[haftalikKayit] [int] NULL,
	[toplamKayit] [int] NULL,
 CONSTRAINT [PK_logKullanici] PRIMARY KEY CLUSTERED 
(
	[logKullaniciID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[logSatinAlinan]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[logSatinAlinan](
	[logSatinAlinanID] [int] IDENTITY(1,1) NOT NULL,
	[urunID] [int] NULL,
	[adet] [int] NULL,
	[kategoriID] [int] NULL,
 CONSTRAINT [PK_logSatinAlinan] PRIMARY KEY CLUSTERED 
(
	[logSatinAlinanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[logSepet]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[logSepet](
	[logSepetID] [int] IDENTITY(1,1) NOT NULL,
	[urunID] [int] NULL,
	[adet] [int] NULL,
 CONSTRAINT [PK_logSepet] PRIMARY KEY CLUSTERED 
(
	[logSepetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[logZiyaret]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[logZiyaret](
	[logZiyaretID] [int] IDENTITY(1,1) NOT NULL,
	[gunlukTarih] [date] NULL,
	[haftalikTarih] [int] NULL,
	[gunlukZiyaret] [int] NULL,
	[haftalikZiyaret] [int] NULL,
	[toplamZiyaret] [int] NULL,
 CONSTRAINT [PK_logZiyaret] PRIMARY KEY CLUSTERED 
(
	[logZiyaretID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Marka]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Marka](
	[markaID] [int] IDENTITY(1,1) NOT NULL,
	[marka] [nvarchar](20) NULL,
 CONSTRAINT [PK_Marka] PRIMARY KEY CLUSTERED 
(
	[markaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mesaj]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mesaj](
	[mesajID] [int] IDENTITY(1,1) NOT NULL,
	[kullaniciID] [int] NULL,
	[mesaj] [nvarchar](250) NULL,
 CONSTRAINT [PK_Mesaj] PRIMARY KEY CLUSTERED 
(
	[mesajID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rol](
	[rolID] [int] IDENTITY(1,1) NOT NULL,
	[rol] [nvarchar](20) NULL,
 CONSTRAINT [PK_Rol] PRIMARY KEY CLUSTERED 
(
	[rolID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sepet]    Script Date: 20.03.2019 13:39:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sepet](
	[sepetID] [int] IDENTITY(1,1) NOT NULL,
	[kullaniciID] [int] NULL,
	[siparisVerildiMi] [bit] NULL,
 CONSTRAINT [PK_Sepet] PRIMARY KEY CLUSTERED 
(
	[sepetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SepettekiUrunler]    Script Date: 20.03.2019 13:39:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SepettekiUrunler](
	[sepettekiUrunID] [int] IDENTITY(1,1) NOT NULL,
	[sepetID] [int] NULL,
	[urunID] [int] NULL,
	[adet] [int] NULL,
	[toplamFiyat] [money] NULL,
 CONSTRAINT [PK_SepettekiUrunler] PRIMARY KEY CLUSTERED 
(
	[sepettekiUrunID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Siparis]    Script Date: 20.03.2019 13:39:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Siparis](
	[siparisID] [int] IDENTITY(1,1) NOT NULL,
	[sepetID] [int] NULL,
 CONSTRAINT [PK_Siparis] PRIMARY KEY CLUSTERED 
(
	[siparisID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SiparisDetay]    Script Date: 20.03.2019 13:39:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SiparisDetay](
	[siparisID] [int] IDENTITY(1,1) NOT NULL,
	[siparisTarihi] [date] NULL,
	[siparisTutari] [money] NULL,
 CONSTRAINT [PK_SiparisDetay] PRIMARY KEY CLUSTERED 
(
	[siparisID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stok]    Script Date: 20.03.2019 13:39:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stok](
	[stokID] [int] IDENTITY(1,1) NOT NULL,
	[adet] [int] NULL,
 CONSTRAINT [PK_Stok] PRIMARY KEY CLUSTERED 
(
	[stokID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Urun]    Script Date: 20.03.2019 13:39:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Urun](
	[urunID] [int] IDENTITY(1,1) NOT NULL,
	[ad] [nvarchar](50) NULL,
	[markaID] [int] NULL,
	[altKategoriID] [int] NULL,
	[fiyat] [money] NULL,
	[eklenmeTarihi] [date] NULL,
	[stokID] [int] NULL,
	[satinAlinmaDurumu] [bit] NULL,
	[imagePath] [nvarchar](50) NULL,
 CONSTRAINT [PK_Urun] PRIMARY KEY CLUSTERED 
(
	[urunID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ZiyaretciMesaj]    Script Date: 20.03.2019 13:39:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ZiyaretciMesaj](
	[ziyaretciMesajID] [int] IDENTITY(1,1) NOT NULL,
	[ad] [nvarchar](50) NULL,
	[soyad] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[mesaj] [nvarchar](250) NULL,
 CONSTRAINT [PK_ZiyaretciMesaj] PRIMARY KEY CLUSTERED 
(
	[ziyaretciMesajID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AltKategori] ON 

INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (1, N'Laptop', 1)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (2, N'Notebook', 1)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (3, N'Gamebook', 1)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (7, N'Kulaklık', 3)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (8, N'Mouse', 3)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (9, N'Klavye', 3)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (10, N'LCD', 6)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (11, N'LED', 6)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (12, N'3-D', 6)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (13, N'Hoparlör', 7)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (14, N'TV SES Sistemi', 7)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (15, N'Android', 8)
INSERT [dbo].[AltKategori] ([altKategoriID], [altKategori], [kategoriID]) VALUES (16, N'IOS', 8)
SET IDENTITY_INSERT [dbo].[AltKategori] OFF
SET IDENTITY_INSERT [dbo].[Il] ON 

INSERT [dbo].[Il] ([ilID], [il]) VALUES (1, N'Manisa')
INSERT [dbo].[Il] ([ilID], [il]) VALUES (2, N'İstanbul')
INSERT [dbo].[Il] ([ilID], [il]) VALUES (3, N'Bursa')
INSERT [dbo].[Il] ([ilID], [il]) VALUES (4, N'İzmir')
INSERT [dbo].[Il] ([ilID], [il]) VALUES (5, N'Ankara')
SET IDENTITY_INSERT [dbo].[Il] OFF
SET IDENTITY_INSERT [dbo].[Ilce] ON 

INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (1, N'Turgutlu', 1)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (2, N'Salihli', 1)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (3, N'Muradiye', 1)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (4, N'Fatih', 2)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (5, N'Sultan Ahmet', 2)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (6, N'Beşiktaş', 2)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (7, N'Yıldırım', 3)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (8, N'Osmangazi', 3)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (9, N'Nilüfer', 3)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (10, N'Kızılay', 4)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (11, N'Polatlı', 4)
INSERT [dbo].[Ilce] ([ilceID], [ilce], [ilID]) VALUES (12, N'Ulus', 4)
SET IDENTITY_INSERT [dbo].[Ilce] OFF
SET IDENTITY_INSERT [dbo].[Iletisim] ON 

INSERT [dbo].[Iletisim] ([iletisimID], [ilID], [ilceID], [detay]) VALUES (1, 1, 1, N'Piyadeoğlu Mah. İstiklal Cad No:3 Turgutlu/Manisa ')
SET IDENTITY_INSERT [dbo].[Iletisim] OFF
SET IDENTITY_INSERT [dbo].[Kategori] ON 

INSERT [dbo].[Kategori] ([kategoriID], [kategori]) VALUES (1, N'Bilgisayar')
INSERT [dbo].[Kategori] ([kategoriID], [kategori]) VALUES (3, N'Aksesuar')
INSERT [dbo].[Kategori] ([kategoriID], [kategori]) VALUES (6, N'Televizyon')
INSERT [dbo].[Kategori] ([kategoriID], [kategori]) VALUES (7, N'Ses Sistemler')
INSERT [dbo].[Kategori] ([kategoriID], [kategori]) VALUES (8, N'Telefon')
SET IDENTITY_INSERT [dbo].[Kategori] OFF
SET IDENTITY_INSERT [dbo].[Kullanici] ON 

INSERT [dbo].[Kullanici] ([kullaniciID], [kullaniciAdi], [sifre], [email], [rolID], [kayitTarihi]) VALUES (1, N'ahmet123', N'123456', N'ahmet_123@gmail.com', 2, CAST(N'2019-03-12' AS Date))
SET IDENTITY_INSERT [dbo].[Kullanici] OFF
INSERT [dbo].[KullaniciBilgileri] ([kullaniciID], [ad], [soyad], [cinsiyet], [iletisimID]) VALUES (1, N'Ahmet', N'Kaya', 1, 1)
SET IDENTITY_INSERT [dbo].[logZiyaret] ON 

INSERT [dbo].[logZiyaret] ([logZiyaretID], [gunlukTarih], [haftalikTarih], [gunlukZiyaret], [haftalikZiyaret], [toplamZiyaret]) VALUES (2, CAST(N'2019-03-19' AS Date), 11, 6, 32, 0)
SET IDENTITY_INSERT [dbo].[logZiyaret] OFF
SET IDENTITY_INSERT [dbo].[Marka] ON 

INSERT [dbo].[Marka] ([markaID], [marka]) VALUES (1, N'ASUS')
INSERT [dbo].[Marka] ([markaID], [marka]) VALUES (2, N'LENOVO')
INSERT [dbo].[Marka] ([markaID], [marka]) VALUES (3, N'XIAOMI')
INSERT [dbo].[Marka] ([markaID], [marka]) VALUES (4, N'APPLE')
INSERT [dbo].[Marka] ([markaID], [marka]) VALUES (5, N'SONY')
INSERT [dbo].[Marka] ([markaID], [marka]) VALUES (6, N'SAMSUNG')
SET IDENTITY_INSERT [dbo].[Marka] OFF
SET IDENTITY_INSERT [dbo].[Rol] ON 

INSERT [dbo].[Rol] ([rolID], [rol]) VALUES (1, N'Admin')
INSERT [dbo].[Rol] ([rolID], [rol]) VALUES (2, N'Kayıtlı Kullanıcı')
SET IDENTITY_INSERT [dbo].[Rol] OFF
SET IDENTITY_INSERT [dbo].[Stok] ON 

INSERT [dbo].[Stok] ([stokID], [adet]) VALUES (1, 10)
INSERT [dbo].[Stok] ([stokID], [adet]) VALUES (3, 17)
INSERT [dbo].[Stok] ([stokID], [adet]) VALUES (9, 35)
SET IDENTITY_INSERT [dbo].[Stok] OFF
SET IDENTITY_INSERT [dbo].[Urun] ON 

INSERT [dbo].[Urun] ([urunID], [ad], [markaID], [altKategoriID], [fiyat], [eklenmeTarihi], [stokID], [satinAlinmaDurumu], [imagePath]) VALUES (3, N'ASUS FX553 Gamebook', 1, 3, 5000.0000, CAST(N'2019-03-12' AS Date), 1, 0, N'-')
INSERT [dbo].[Urun] ([urunID], [ad], [markaID], [altKategoriID], [fiyat], [eklenmeTarihi], [stokID], [satinAlinmaDurumu], [imagePath]) VALUES (5, N'Sony Bass Kulaklık', 5, 7, 150.0000, CAST(N'2019-03-12' AS Date), 3, 0, N'-')
INSERT [dbo].[Urun] ([urunID], [ad], [markaID], [altKategoriID], [fiyat], [eklenmeTarihi], [stokID], [satinAlinmaDurumu], [imagePath]) VALUES (12, N'Samsung S9+', 6, 15, 6500.0000, CAST(N'2019-03-18' AS Date), 9, 0, N'-')
SET IDENTITY_INSERT [dbo].[Urun] OFF
ALTER TABLE [dbo].[AltKategori]  WITH CHECK ADD  CONSTRAINT [FK_AltKategori_Kategori] FOREIGN KEY([kategoriID])
REFERENCES [dbo].[Kategori] ([kategoriID])
GO
ALTER TABLE [dbo].[AltKategori] CHECK CONSTRAINT [FK_AltKategori_Kategori]
GO
ALTER TABLE [dbo].[Favoriler]  WITH CHECK ADD  CONSTRAINT [FK_Favoriler_Kullanici] FOREIGN KEY([kullaniciID])
REFERENCES [dbo].[Kullanici] ([kullaniciID])
GO
ALTER TABLE [dbo].[Favoriler] CHECK CONSTRAINT [FK_Favoriler_Kullanici]
GO
ALTER TABLE [dbo].[Favoriler]  WITH CHECK ADD  CONSTRAINT [FK_Favoriler_Urun] FOREIGN KEY([urunID])
REFERENCES [dbo].[Urun] ([urunID])
GO
ALTER TABLE [dbo].[Favoriler] CHECK CONSTRAINT [FK_Favoriler_Urun]
GO
ALTER TABLE [dbo].[Ilce]  WITH CHECK ADD  CONSTRAINT [FK_Ilce_Il] FOREIGN KEY([ilID])
REFERENCES [dbo].[Il] ([ilID])
GO
ALTER TABLE [dbo].[Ilce] CHECK CONSTRAINT [FK_Ilce_Il]
GO
ALTER TABLE [dbo].[Iletisim]  WITH CHECK ADD  CONSTRAINT [FK_Iletisim_Il] FOREIGN KEY([ilID])
REFERENCES [dbo].[Il] ([ilID])
GO
ALTER TABLE [dbo].[Iletisim] CHECK CONSTRAINT [FK_Iletisim_Il]
GO
ALTER TABLE [dbo].[Iletisim]  WITH CHECK ADD  CONSTRAINT [FK_Iletisim_Ilce] FOREIGN KEY([ilceID])
REFERENCES [dbo].[Ilce] ([ilceID])
GO
ALTER TABLE [dbo].[Iletisim] CHECK CONSTRAINT [FK_Iletisim_Ilce]
GO
ALTER TABLE [dbo].[Kullanici]  WITH CHECK ADD  CONSTRAINT [FK_Kullanici_Rol] FOREIGN KEY([rolID])
REFERENCES [dbo].[Rol] ([rolID])
GO
ALTER TABLE [dbo].[Kullanici] CHECK CONSTRAINT [FK_Kullanici_Rol]
GO
ALTER TABLE [dbo].[KullaniciBilgileri]  WITH CHECK ADD  CONSTRAINT [FK_KullaniciBilgileri_Iletisim] FOREIGN KEY([iletisimID])
REFERENCES [dbo].[Iletisim] ([iletisimID])
GO
ALTER TABLE [dbo].[KullaniciBilgileri] CHECK CONSTRAINT [FK_KullaniciBilgileri_Iletisim]
GO
ALTER TABLE [dbo].[KullaniciBilgileri]  WITH CHECK ADD  CONSTRAINT [FK_KullaniciBilgileri_Kullanici] FOREIGN KEY([kullaniciID])
REFERENCES [dbo].[Kullanici] ([kullaniciID])
GO
ALTER TABLE [dbo].[KullaniciBilgileri] CHECK CONSTRAINT [FK_KullaniciBilgileri_Kullanici]
GO
ALTER TABLE [dbo].[logSatinAlinan]  WITH CHECK ADD  CONSTRAINT [FK_logSatinAlinan_Urun] FOREIGN KEY([urunID])
REFERENCES [dbo].[Urun] ([urunID])
GO
ALTER TABLE [dbo].[logSatinAlinan] CHECK CONSTRAINT [FK_logSatinAlinan_Urun]
GO
ALTER TABLE [dbo].[logSepet]  WITH CHECK ADD  CONSTRAINT [FK_logSepet_Urun] FOREIGN KEY([urunID])
REFERENCES [dbo].[Urun] ([urunID])
GO
ALTER TABLE [dbo].[logSepet] CHECK CONSTRAINT [FK_logSepet_Urun]
GO
ALTER TABLE [dbo].[Mesaj]  WITH CHECK ADD  CONSTRAINT [FK_Mesaj_Kullanici] FOREIGN KEY([kullaniciID])
REFERENCES [dbo].[Kullanici] ([kullaniciID])
GO
ALTER TABLE [dbo].[Mesaj] CHECK CONSTRAINT [FK_Mesaj_Kullanici]
GO
ALTER TABLE [dbo].[SepettekiUrunler]  WITH CHECK ADD  CONSTRAINT [FK_SepettekiUrunler_Sepet] FOREIGN KEY([sepetID])
REFERENCES [dbo].[Sepet] ([sepetID])
GO
ALTER TABLE [dbo].[SepettekiUrunler] CHECK CONSTRAINT [FK_SepettekiUrunler_Sepet]
GO
ALTER TABLE [dbo].[SepettekiUrunler]  WITH CHECK ADD  CONSTRAINT [FK_SepettekiUrunler_Urun] FOREIGN KEY([urunID])
REFERENCES [dbo].[Urun] ([urunID])
GO
ALTER TABLE [dbo].[SepettekiUrunler] CHECK CONSTRAINT [FK_SepettekiUrunler_Urun]
GO
ALTER TABLE [dbo].[Siparis]  WITH CHECK ADD  CONSTRAINT [FK_Siparis_Sepet] FOREIGN KEY([sepetID])
REFERENCES [dbo].[Sepet] ([sepetID])
GO
ALTER TABLE [dbo].[Siparis] CHECK CONSTRAINT [FK_Siparis_Sepet]
GO
ALTER TABLE [dbo].[SiparisDetay]  WITH CHECK ADD  CONSTRAINT [FK_SiparisDetay_Siparis] FOREIGN KEY([siparisID])
REFERENCES [dbo].[Siparis] ([siparisID])
GO
ALTER TABLE [dbo].[SiparisDetay] CHECK CONSTRAINT [FK_SiparisDetay_Siparis]
GO
ALTER TABLE [dbo].[Urun]  WITH CHECK ADD  CONSTRAINT [FK_Urun_AltKategori] FOREIGN KEY([altKategoriID])
REFERENCES [dbo].[AltKategori] ([altKategoriID])
GO
ALTER TABLE [dbo].[Urun] CHECK CONSTRAINT [FK_Urun_AltKategori]
GO
ALTER TABLE [dbo].[Urun]  WITH CHECK ADD  CONSTRAINT [FK_Urun_Marka] FOREIGN KEY([markaID])
REFERENCES [dbo].[Marka] ([markaID])
GO
ALTER TABLE [dbo].[Urun] CHECK CONSTRAINT [FK_Urun_Marka]
GO
ALTER TABLE [dbo].[Urun]  WITH CHECK ADD  CONSTRAINT [FK_Urun_Stok] FOREIGN KEY([stokID])
REFERENCES [dbo].[Stok] ([stokID])
GO
ALTER TABLE [dbo].[Urun] CHECK CONSTRAINT [FK_Urun_Stok]
GO
USE [master]
GO
ALTER DATABASE [E-Ticaret] SET  READ_WRITE 
GO
