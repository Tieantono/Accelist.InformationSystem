CREATE TABLE PersonalData(
	CitizenshipId VARCHAR(20) PRIMARY KEY, -- 123456789012345, 123123123123123123, 102234500134512
	FullName VARCHAR(50) NOT NULL, -- Jack Antono, Antono Levine, Antono Muto
	Gender VARCHAR(6) NOT NULL, -- Male, Female, Male
	Religion VARCHAR(15) NOT NULL, -- Catholic, Christian, Other
	BirthPlace VARCHAR(20) NOT NULL, -- Jakarta, Singkawang, Bandung
	BirthDate DATETIME NOT NULL, -- 01/01/1990, 02/12/2000, 31/10/1980
	CitizenshipCardAddress VARCHAR(100) NOT NULL, -- Jln. Alam Sutera Boulevard No. 5 Jakarta Barat, Jalan Bukit Tinggi Bandung, Perumahan Green Hill Zone RT/RW 005/005
	[Status] VARCHAR(10) NOT NULL, -- Single, Married, Divorced
	StatusChangeDate DATETIME, -- NULL, 01/01/2012, 01/05/2000
	CurrentAddress VARCHAR(50) NOT NULL,
	MobilePhoneNumber VARCHAR(20) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	AccountNumber VARCHAR(20) NOT NULL,
	AccountName VARCHAR(50) NOT NULL,
	BankId INT FOREIGN KEY REFERENCES BankData(BankId) NOT NULL,
	BPJS_Id VARCHAR(20),
	NPWP_Id VARCHAR(20)
)

CREATE TABLE BankData(
	BankId INT PRIMARY KEY IDENTITY,
	BankName VARCHAR(20) NOT NULL
)

CREATE TABLE ContactData(
	CitizenshipId VARCHAR(20) PRIMARY KEY FOREIGN KEY REFERENCES PersonalData(CitizenshipId),
	CurrentAddress VARCHAR(50) NOT NULL,
	MobilePhoneNumber VARCHAR(20) NOT NULL,
	Email VARCHAR(50) NOT NULL
)

CREATE TABLE BankAccountData(
	CitizenshipId VARCHAR(20) PRIMARY KEY FOREIGN KEY REFERENCES PersonalData(CitizenshipId),
	AccountNumber VARCHAR(20) NOT NULL,
	AccountName VARCHAR(50) NOT NULL,
	BankId INT FOREIGN KEY REFERENCES BankData(BankId) NOT NULL
)

CREATE TABLE OtherInfoData(
	CitizenshipId VARCHAR(20) PRIMARY KEY FOREIGN KEY REFERENCES PersonalData(CitizenshipId),
	BPJS_Id VARCHAR(20) NOT NULL,
	NPWP_Id VARCHAR(20) NOT NULL
)

CREATE TABLE EmployeeMasterData(
	EmployeeId VARCHAR(10) PRIMARY KEY,
	CitizenshipId VARCHAR(20) FOREIGN KEY REFERENCES PersonalData(CitizenshipId) NOT NULL,
	MainFamilyMemberId INT FOREIGN KEY REFERENCES MainFamilyData(MainFamilyMemberId) NOT NULL,
	BiologicalFamilyMemberId INT FOREIGN KEY REFERENCES BiologicalFamilyData(BiologicalFamilyMemberId) NOT NULL,
	WorkingExperienceId INT FOREIGN KEY REFERENCES WorkingExperienceData(WorkingExperienceId) NOT NULL,
	AcademicRecordId INT FOREIGN KEY REFERENCES AcademicData(AcademicRecordId) NOT NULL,
	TrainingRecordId INT FOREIGN KEY REFERENCES TrainingData(TrainingRecordId) NOT NULL,
)

CREATE TABLE MainFamilyData(
	MainFamilyMemberId INT PRIMARY KEY IDENTITY,
	FullName VARCHAR(50) NOT NULL,
	Relation VARCHAR(10) NOT NULL,
	BirthPlace VARCHAR(20) NOT NULL,
	BirthDate DATETIME NOT NULL,
	Gender VARCHAR(6) NOT NULL,
	Job VARCHAR(25) NOT NULL
)

CREATE TABLE BiologicalFamilyData(
	BiologicalFamilyMemberId INT PRIMARY KEY IDENTITY,
	FullName VARCHAR(50) NOT NULL,
	Relation VARCHAR(10) NOT NULL,
	BirthPlace VARCHAR(20) NOT NULL,
	BirthDate DATETIME NOT NULL,
	Gender VARCHAR(6) NOT NULL,
	Job VARCHAR(25) NOT NULL
)

CREATE TABLE BiologicalFamilyData(
	BiologicalFamilyMemberId INT PRIMARY KEY IDENTITY,
	FullName VARCHAR(50) NOT NULL,
	Relation VARCHAR(10) NOT NULL,
	BirthPlace VARCHAR(20) NOT NULL,
	BirthDate DATETIME NOT NULL,
	Gender VARCHAR(6) NOT NULL,
	Job VARCHAR(25) NOT NULL
)

CREATE TABLE WorkingExperienceData(
	WorkingExperienceId INT PRIMARY KEY IDENTITY,
	CompanyName VARCHAR(50) NOT NULL,
	Position VARCHAR(20) NOT NULL,
	Experience VARCHAR(100) NOT NULL,
	StartYear INT NOT NULL,
	EndYear INT NOT NULL
)

CREATE TABLE AcademicData(
	AcademicRecordId INT PRIMARY KEY IDENTITY,
	SchoolName VARCHAR(50) NOT NULL,
	StartYear INT NOT NULL,
	EndYear INT NOT NULL,
	Achievement VARCHAR(100) NOT NULL,
	AcademicLevelId INT FOREIGN KEY REFERENCES AcademicLevel(AcademicLevelId) NOT NULL
)

CREATE TABLE TrainingData(
	TrainingRecordId INT PRIMARY KEY IDENTITY,
	TrainingName VARCHAR(50) NOT NULL,
	TrainingProvider VARCHAR(50) NOT NULL,
	TrainingPlace VARCHAR(30) NOT NULL,
	[Year] INT NOT NULL
)


CREATE TABLE AcademicLevel(
	AcademicLevelId INT PRIMARY KEY IDENTITY,
	LevelName VARCHAR(10) NOT NULL
)

INSERT INTO PersonalData(CitizenshipId, FullName, Gender, Religion, BirthPlace, BirthDate, CitizenshipCardAddress, [Status], StatusChangeDate, CurrentAddress, MobilePhoneNumber, Email, AccountNumber, AccountName, BankId, BPJS_Id, NPWP_Id)
VALUES('1234567890123456', 'Antono', 'Male', 'Christian', 'Jakarta', '01/01/1990', 'Jalan Alam Sutera No. 1', 'Single', NULL, 'Perumahan Green Hill RT/RW 005/005', '08123123123', 'admin@email.com', '123456789', 'Antono', 1, NULL, NULL)

SELECT *
FROM PersonalData pd JOIN ContactData cd ON pd.CitizenshipId = cd.ContactId

SELECT *
FROM PersonalData