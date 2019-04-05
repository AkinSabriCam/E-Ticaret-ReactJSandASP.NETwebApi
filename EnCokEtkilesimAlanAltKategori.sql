USE [E-Ticaret]
GO

/****** Object:  UserDefinedFunction [dbo].[EnCokEtkilesimAlanAltKategori]    Script Date: 4.4.2019 21:34:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[EnCokEtkilesimAlanAltKategori](@kullaniciId int)
RETURNS TABLE
AS
RETURN
	SELECT TOP(1) a.altKategoriID, a.altKategori, COUNT(*) AS Adet
	FROM Favoriler f FULL OUTER JOIN  GecmisSiparisler g
						ON f.urunID = g.urunID
					INNER JOIN Urun u 
						ON u.urunID = f.urunID OR u.urunID = g.urunID
					RIGHT JOIN AltKategori a
						ON u.altKategoriID = a.altKategoriID
	WHERE g.kullaniciID = @kullaniciId OR f.kullaniciID = @kullaniciId 
	GROUP BY a.altKategoriID, a.altKategori
	ORDER BY Adet DESC
GO

