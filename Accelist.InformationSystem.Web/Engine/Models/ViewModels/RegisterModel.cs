using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accelist.InformationSystem.Web.Engine.Models.ViewModels
{
    #region RegisterEnum
    public enum Gender
    {
        Male,
        Female
    }
    public enum Academic
    {
        SD,
        SMP,
        SMU,
        D3,
        S1
    }
    public enum BloodType
    {
        A,
        B,
        AB,
        O
    }
    public enum Status
    {
        Single,
        Married,
        Divorced
    }
    public enum Citizenship
    {
        WNI,
        WNA
    }

    public enum Religion {
        Buddha, Islam, Catholic, Christian, Konghucu, Other
    }
    #endregion

    public class JsonStringList
    {
        public List<Child> ChildList { get; set; }

        public string SiblingList { get; set; }

        public List<WorkExperience> WorkExpList { get; set; }

        public string AcademicLevelList { get; set; }

        public List<TrainingRecord> TrainingList { get; set; }
    }

    public class Child{
        public string FullName { get; set; }

        public Gender Gender { get; set; }

        public string BirthPlace { get; set; }

        public string BirthDate { get; set; }

        public string Job { get; set; }
    }

    public class Sibling{
        public string SiblingName { get; set; }

        public Gender? SiblingGender { get; set; }

        public string SiblingBirthPlace { get; set; }

        public DateTime? SiblingBirthDate { get; set; }

        public string SiblingJob { get; set; }
    }

    public class WorkExperience {
        public string CompanyName { get; set; }

        public string Position { get; set; }

        public string Experience { get; set; }

        public int StartYear { get; set; }

        public int EndYear { get; set; }
    }

    public class AcademicRecord {
        public Academic Degree { get; set; }

        public string SchoolName { get; set; }

        public int StartYear { get; set; }

        public int FinishYear { get; set; }

        public string Award { get; set; }
    }

    public class TrainingRecord {
        public string Name { get; set; }

        public string Provider { get; set; }

        public string Place { get; set; }

        public int Year { get; set; }
    }

    public class RegisterModel
    {
        #region PersonalDataModel
        [Display(Name = "Full Name")]
        [Required(ErrorMessage = "Name must be filled")]
        public string EmployeeName { get; set; }

        [Display(Name = "Citizen ID Number")]
        [Required(ErrorMessage = "Citizen ID Number must be filled")]
        [RegularExpression("[0-9]+", ErrorMessage = "Must only contain numeric value")]
        public string CitizenshipId { get; set; }

        [Display(Name = "Gender")]
        public Gender Gender { get; set; }

        [Display(Name = "Religion")]
        public Religion Religion { get; set; }

        [Display(Name = "Place of Birth")]
        [Required(ErrorMessage = "Place of Birth must be filled")]
        public string BirthPlace { get; set; }

        [Display(Name = "Date of Birth")]
        [Required(ErrorMessage = "Date of Birth must be filled")]
        public string BirthDate { get; set; }

        [Display(Name = "Status")]
        public Status Status { get; set; }

        [Display(Name = "Last Change Date")]
        public DateTime? StatusChangeDate { get; set; }

        //will be added to DB
        [Display(Name = "Accelist ID")]
        public string AccelistID { get; set; }
        #endregion

        #region ContactDataModel
        [Display(Name = "Citizen Card Address")]
        [Required(ErrorMessage = "Citizen Card Address must be filled")]
        public string Address { get; set; }

        [Display(Name = "Current Address")]
        [Required(ErrorMessage = "Current Address must be filled")]
        public string CurrentAddress { get; set; }

        [Display(Name = "Mobile Phone")]
        [Required(ErrorMessage = "Mobile Phone must be filled")]
        [RegularExpression("[0-9]+", ErrorMessage = "Must only contain numeric value")]
        public string MobilePhone { get; set; }

        [Display(Name = "Email")]
        [Required(ErrorMessage = "Email must be filled")]
        [EmailAddress(ErrorMessage = "Email format is invalid")]
        public string Email { get; set; }
        #endregion

        #region BankAccountDataModel
        public string BankAccount { get; set; }

        public List<string> BankName { get; set; }

        public string AccountNumber { get; set; }
        #endregion

        #region MainFamilyDataModel

        public string Relation { get; set; }

        public string MateName { get; set; }

        public Gender? MateGender { get; set; }

        public string MateBirthPlace { get; set; }

        public DateTime? MateBirthDate { get; set; }

        public string MateJob { get; set; }

        public List<Child> Childs { get; set; }

        #endregion

        #region BiologicalFamilyDataModel

        public string DadName { get; set; }

        public string DadBirthPlace { get; set; }

        public DateTime? DadBirthDate { get; set; }

        public Gender? DadGender { get; set; }

        public string DadJob { get; set; }

        public string MomName { get; set; }

        public string MomBirthPlace { get; set; }

        public DateTime? MomBirthDate { get; set; }

        public Gender? MomGender { get; set; }

        public string MomJob { get; set; }

        public List<Sibling> Siblings { get; set; }
        #endregion

        #region WorkExperienceDataModel

        public List<WorkExperience> WorkExperience { get; set; }

        #endregion

        #region AcademicRecordDataModel

        public List<AcademicRecord> AcademicRecords { get; set; }

        #endregion

        #region TrainingRecordDataModel

        public List<TrainingRecord> TrainingRecords { get; set; }

        #endregion

        #region EmployeePermataBankAccountDataModel

        public string EmployeePermataAccountId { get; set; }

        public string EmployeePermataAccountName { get; set; }

        #endregion //delete later

        #region OtherRecordDataModel

        public string NPWPId { get; set; }

        public string JamsostekId { get; set; }

        #endregion
    }
}
