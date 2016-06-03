-- The example data for this table consist with this following 3 individuals, Jack Antono, Adem Levine, & Tie Tie Muto
CREATE TABLE PersonalData(
	CitizenshipId VARCHAR(20) PRIMARY KEY, -- 123456789012345, 123123123123123123, 102234500134512
	FullName VARCHAR(50) NOT NULL, -- Jack Antono, Adem Levine, Tie Tie Muto
	Gender VARCHAR(6) NOT NULL, -- Male, Male, Male
	Religion VARCHAR(15) NOT NULL, -- Catholic, Christian, Other
	BirthPlace VARCHAR(20) NOT NULL, -- Jakarta, Singkawang, Bandung
	BirthDate DATETIME NOT NULL, -- 01/01/1990, 02/12/2000, 31/10/1980
	CitizenshipCardAddress VARCHAR(100) NOT NULL, -- Jln. Alam Sutera Boulevard No. 5 Jakarta Barat, Jalan Bukit Tinggi Bandung, Perumahan Green Hill Zone RT/RW 005/005
	[Status] VARCHAR(10) NOT NULL, -- Divorced, Married, Single
	StatusChangeDate DATETIME, -- 01/05/2000, 01/01/2012, NULL
	CurrentAddress VARCHAR(50) NOT NULL, -- Jln. Alam Sutera Boulevard No. 5 Jakarta Barat, Perumahan Duelist, Perumahan Alam Sutera
	MobilePhoneNumber VARCHAR(20) NOT NULL, -- 08123456789, 08888888888, 082125487968
	Email VARCHAR(50) NOT NULL, -- jack@email.com, adem_levine7@myEmail.com, tie_muto_si_duelist_sejati@duelist.com
	AccountNumber VARCHAR(20) NOT NULL, -- 123456789, 000123456, 120546086
	AccountName VARCHAR(50) NOT NULL,
	BankId INT FOREIGN KEY REFERENCES BankData(BankId) NOT NULL, -- 1, 2, 4
	OtherBankName VARCHAR(20), -- NULL, NULL, BRI
	BPJS_Id VARCHAR(20), -- 123456789, NULL, NULL
	NPWP_Id VARCHAR(20) -- NULL, NULL, 123456789
)

-- For Table BankData, Sir Matius has appointed me that only the following banks will be included(inserted) into this table
CREATE TABLE BankData(
	BankId INT PRIMARY KEY IDENTITY, -- 1, 2, 3, 4
	BankName VARCHAR(20) NOT NULL -- Permata, BCA, Mandiri, Others
)

-- The EmployeeId column serves as the Accelist Employee Id, which will follows this pattern: "ACC001"
CREATE TABLE EmployeeMasterData(
	EmployeeId VARCHAR(10) PRIMARY KEY, -- ACC001, ACC002, ACC003
	CitizenshipId VARCHAR(20) FOREIGN KEY REFERENCES PersonalData(CitizenshipId) NOT NULL, -- 123456789012345, 123123123123123123, 102234500134512
	MainFamilyMemberId INT FOREIGN KEY REFERENCES MainFamilyData(MainFamilyMemberId), -- 1, 2, NULL
	BiologicalFamilyMemberId INT FOREIGN KEY REFERENCES BiologicalFamilyData(BiologicalFamilyMemberId) NOT NULL, -- Jack Antono: {1, 2, 3, 4}, Adem Levine: {5}, Tie Tie Muto: {6}
	WorkingExperienceId INT FOREIGN KEY REFERENCES WorkingExperienceData(WorkingExperienceId), -- Jack Antono: {1, 2}, Adem Levine: {3}, Tie Tie Muto: {NULL}
	AcademicRecordId INT FOREIGN KEY REFERENCES AcademicData(AcademicRecordId), -- Jack Antono: {1, 2, 3, 4}, Adem Levine: {NULL}, Tie Tie Muto: {5}
	TrainingRecordId INT FOREIGN KEY REFERENCES TrainingData(TrainingRecordId), -- Jack Antono: {1, 2}, Adem Levine: {NULL}, Tie Tie Muto: {3}
)

-- This table example data will match with the above individual's example data
CREATE TABLE MainFamilyData(
	MainFamilyMemberId INT PRIMARY KEY IDENTITY, -- 1, 2
	FullName VARCHAR(50) NOT NULL, -- Anna, Rebecca Hawking
	Relation VARCHAR(10) NOT NULL, -- Wife, Child#1
	BirthPlace VARCHAR(20) NOT NULL, -- California, Jakarta
	BirthDate DATETIME NOT NULL, -- 01/01/1980, 07/08/2015
	Gender VARCHAR(6) NOT NULL, -- Female, Female
	Job VARCHAR(25) NOT NULL -- Housewife, Student
)

-- This table example data consist Jack Antono's biological family members
CREATE TABLE BiologicalFamilyData(
	BiologicalFamilyMemberId INT PRIMARY KEY IDENTITY, -- 1, 2, 3, 4
	FullName VARCHAR(50) NOT NULL, -- Big Joe, Momma House, Jack Antono, Cory Baxter
	Relation VARCHAR(10) NOT NULL, -- Father, Mother, Sibling#1, Sibling#2
	BirthPlace VARCHAR(20) NOT NULL, -- California, Switzerland, Jakarta, German
	BirthDate DATETIME NOT NULL, -- 22/01/1950, 22/02/1955, 01/01/1990, 22/11/1996
	Gender VARCHAR(6) NOT NULL, -- Male, Female, Male, Male
	Job VARCHAR(25) -- Navy Seal Commander, Housewife, NULL, Comedian
)

-- This table example data consist Jack Antono's working experience records
CREATE TABLE WorkingExperienceData(
	WorkingExperienceId INT PRIMARY KEY IDENTITY, -- 1, 2
	CompanyName VARCHAR(50) NOT NULL, -- Accelist, BCALife
	Position VARCHAR(20) NOT NULL, -- Programmer System Analyst, Project Manager
	Experience VARCHAR(100) NOT NULL, -- Lead Programmer of HRD System, Project Manager for developing the life insurance system
	StartYear INT NOT NULL, -- 2010, 2014
	EndYear INT NOT NULL -- 2014, 2016
)

-- This table example data consist Jack Antono's academic records
CREATE TABLE AcademicData(
	AcademicRecordId INT PRIMARY KEY IDENTITY, -- 1, 2, 3, 4
	SchoolName VARCHAR(50) NOT NULL, -- SD Krisotoforus 2, SMP Krisotoforus 2, SMA Krisotoforus 2, Universitas Bina Nusantara
	StartYear INT NOT NULL, -- 2001, 2007, 2010, 2013
	EndYear INT NOT NULL, -- 2007, 2010, 2013, 2017
	Achievement VARCHAR(100) NOT NULL, -- NULL, NULL, NULL, Rank 1 on Programming Contest
	AcademicLevelId INT FOREIGN KEY REFERENCES AcademicLevel(AcademicLevelId) NOT NULL -- 1, 2, 3, 4
)

-- This table example data consist Jack Antono's training records
CREATE TABLE TrainingData(
	TrainingRecordId INT PRIMARY KEY IDENTITY, -- 1, 2
	TrainingName VARCHAR(50) NOT NULL, -- Microsoft Technopreuner Craftmanship, ASP.NET For The Pro
	TrainingProvider VARCHAR(50) NOT NULL, -- Microsoft, Microsoft
	TrainingPlace VARCHAR(30) NOT NULL, -- Jakarta, Jakarta
	[Year] INT NOT NULL -- 2014, 2015
)

CREATE TABLE AcademicLevel(
	AcademicLevelId INT PRIMARY KEY IDENTITY, -- 1, 2, 3, 4, 5
	LevelName VARCHAR(11) NOT NULL -- Elementary, Junior High, Senior High, S1, S2
)