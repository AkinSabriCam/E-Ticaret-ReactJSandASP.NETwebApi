USE [E-Ticaret]
GO

/****** Object:  View [dbo].[EnCokSatanUrunler]    Script Date: 31.3.2019 12:56:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[EnCokSatanUrunler]
AS
	SELECT TOP 999999999 u.urunID, u.ad,u.markaID, m.marka, u.altKategoriID, a.altKategori, u.fiyat, u.eklenmeTarihi, u.stokID, l.adet, u.satinAlinmaDurumu, u.imagePath
	FROM logSatinAlinan l INNER JOIN Urun u 
								ON l.urunID = u.urunID
						INNER JOIN AltKategori a
								ON a.altKategoriID = u.altKategoriID			 
						INNER JOIN Stok s
								ON s.stokID = u.stokID
						INNER JOIN Marka m
								ON m.markaID = u.markaID
	ORDER BY l.adet DESC
GO

