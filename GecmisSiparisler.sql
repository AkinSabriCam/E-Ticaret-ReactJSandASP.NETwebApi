USE [E-Ticaret]
GO

/****** Object:  View [dbo].[GecmisSiparisler]    Script Date: 4.4.2019 21:36:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[GecmisSiparisler]
AS
	SELECT s.sepetID, s.kullaniciID, se.urunID
	FROM Sepet s INNER JOIN SepettekiUrunler se
					ON se.sepetID = s.sepetID
	WHERE s.siparisVerildiMi = 1
GO

