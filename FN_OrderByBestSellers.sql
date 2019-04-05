USE [E-Ticaret]
GO

/****** Object:  UserDefinedFunction [dbo].[FN_OrderByBestSallers]    Script Date: 31.3.2019 13:05:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER FUNCTION [dbo].[FN_OrderByBestSallers]()
RETURNS TABLE
AS
RETURN
	SELECT TOP 999999999 u.urunID, u.ad,s.markaID, M.marka, u.altKategoriID, s.altKategori, u.fiyat, u.eklenmeTarihi, u.stokID, s.adet, u.satinAlinmaDurumu, u.imagePath
	FROM EnCokSatanUrunler s RIGHT JOIN Urun u
								   ON s.urunID = u.urunID
							INNER JOIN Marka M 
								   ON  u.markaID=M.markaID
	ORDER BY s.adet DESC
GO

