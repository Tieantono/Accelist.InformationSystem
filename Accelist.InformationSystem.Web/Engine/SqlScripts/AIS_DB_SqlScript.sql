CREATE TABLE PersonalData(
	CitizenshipId VARCHAR(20) PRIMARY KEY, --123456789012345
	FullName VARCHAR(50) NOT NULL,
	Gender VARCHAR(6) NOT NULL,
	Religion VARCHAR(15) NOT NULL,
	BirthPlace VARCHAR(20) NOT NULL,
	BirthDate DATETIME NOT NULL,
	CitizenshipCardAddress VARCHAR(100) NOT NULL,
	[Status] VARCHAR(10) NOT NULL,
	StatusChangeDate DATETIME,
	ContactId INT NOT NULL,
	BankAccountId INT NOT NULL,
	OtherInfoId INT
)

CREATE TABLE BankData(
	BankId INT PRIMARY KEY IDENTITY,
	BankName VARCHAR(20) NOT NULL
)

CREATE TABLE ContactData(
	ContactId INT PRIMARY KEY IDENTITY,
	CurrentAddress VARCHAR(50) NOT NULL,
	MobilePhoneNumber VARCHAR(20) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	CitizenshipId VARCHAR(20) FOREIGN KEY REFERENCES PersonalData(CitizenshipId) NOT NULL
)

CREATE TABLE BankAccountData(
	BankAccountId INT PRIMARY KEY IDENTITY,
	AccountNumber VARCHAR(20) NOT NULL,
	AccountName VARCHAR(50) NOT NULL,
	BankId INT FOREIGN KEY REFERENCES BankData(BankId) NOT NULL,
	CitizenshipId VARCHAR(20) FOREIGN KEY REFERENCES PersonalData(CitizenshipId) NOT NULL
)

CREATE TABLE OtherInfoData(
	OtherInfoId INT PRIMARY KEY IDENTITY,
	BPJS_Id VARCHAR(20) NOT NULL,
	NPWP_Id VARCHAR(20) NOT NULL,
	CitizenshipId VARCHAR(20) FOREIGN KEY REFERENCES PersonalData(CitizenshipId) NOT NULL
)

INSERT INTO PersonalData(CitizenshipId, FullName, Gender, Religion, BirthPlace, BirthDate, CitizenshipCardAddress, [Status], StatusChangeDate, ContactId, BankAccountId, OtherInfoId)
VALUES('1234567890123456', 'Antono', 'Male', 'Christian', 'Jakarta', '01/01/1990', 'Jalan Alam Sutera No. 1', 'Single', NULL, '1', '1', '1')

INSERT INTO ContactData(CurrentAddress, MobilePhoneNumber, Email, CitizenshipId)
VALUES('Apartemen Silkwood', '081123123123', 'admin@email.com', '1234567890123456')

INSERT INTO BankAccountData(AccountName, AccountNumber, BankId, CitizenshipId)
VALUES('Antono', '123456789', 1, '1234567890123456')

SELECT *
FROM BankAccountData bad JOIN PersonalData pd ON bad.CitizenshipId = pd.CitizenshipId
JOIN BankList bl ON bad.BankId = bl.BankId