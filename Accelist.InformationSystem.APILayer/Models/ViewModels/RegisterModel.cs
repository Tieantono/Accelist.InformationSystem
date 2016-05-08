using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accelist.InformationSystem.APILayer.Models.ViewModels
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

    public class Child{
        public string ChildName { get; set; }

        public Gender? ChildGender { get; set; }

        public string ChildBirthPlace { get; set; }

        public string ChildBirthDate { get; set; }

        public string ChildJob { get; set; }
    }

    public class Sibling{
        public string SiblingName { get; set; }

        public Gender? SiblingGender { get; set; }

        public string SiblingBirthPlace { get; set; }

        public DateTime? SiblingBirthDate { get; set; }

        public string SiblingJob { get; set; }
    }

    public class WorkingExperience {
        public string CompanyName { get; set; }

        public string Position { get; set; }

        public DateTime JoinDate { get; set; }

        public DateTime EndDate { get; set; }
    }

    public class AcademicRecord {
        public Academic Degree { get; set; }

        public string SchoolName { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime FinishDate { get; set; }

        public string Award { get; set; }
    }

    public class WorkshopRecord {
        public string WorkshopName { get; set; }

        public string Institution { get; set; }

        public DateTime Year { get; set; }
    }

    public class RegisterModel
    {
        #region PersonalDataModel
        [Display(Name = "KTP Number")]
        [Required(ErrorMessage = "KTP ID must be filled")]
        public string EmployeeId { get; set; }

        [Display(Name = "Name")]
        [Required(ErrorMessage = "Name must be filled")]
        public string EmployeeName { get; set; }

        [Display(Name = "KTP Valid Date")]
        [Required(ErrorMessage = "KTP Valid Date must be filled")]
        public DateTime IdValidDate { get; set; }

        public Gender Gender { get; set; }

        [Display(Name = "Do you have Jamsostek?")]
        [Required(ErrorMessage = "Must choose one")]
        public bool Jamsostek { get; set; }

        [Display(Name = "Academic Degree")]
        public Academic Academic { get; set; }

        [Display(Name = "Blood Type")]
        public BloodType BloodType { get; set; }

        [Required(ErrorMessage = "Birth Place must be filled")]
        public string BirthPlace { get; set; }

        [Required(ErrorMessage = "Birth Date must be filled")]
        public string BirthDate { get; set; }

        [Display(Name = "Last Academic Degree")]
        public Academic LastAcademic { get; set; }

        [Display(Name = "Address In KTP")]
        [Required(ErrorMessage = "Address must be filled")]
        public string Address { get; set; }

        [Display(Name = "Current Address")]
        [Required(ErrorMessage = "Current Address must be filled")]
        public string CurrentAddress { get; set; }

        [Display(Name = "Mobile Phone")]
        [Required(ErrorMessage = "Mobile Phone must be filled")]
        public string MobilePhone { get; set; }

        [Display(Name = "Phone")]
        [Required(ErrorMessage = "Phone must be filled")]
        public string Phone { get; set; }

        [Display(Name = "Email")]
        [Required(ErrorMessage = "Email must be filled")]
        [EmailAddress(ErrorMessage="Email format is invalid")]
        public string Email { get; set; }

        [Display(Name = "Religion")]
        [Required(ErrorMessage = "Religion must be filled")]
        public Religion Religion { get; set; }

        [Required(ErrorMessage = "Total Sibling must be filled")]
        public int TotalSibling { get; set; }

        [Required(ErrorMessage = "Must be filled")]
        public int SiblingNumber { get; set; }

        [Display(Name = "Status")]
        public Status Status { get; set; }

        [Display(Name = "Status Change Date(if any)")]
        public DateTime StatusChange { get; set; }

        [Display(Name = "Citizenship")]
        public Citizenship Citizenship { get; set; }

        //will be added to DB
        public string AccelistID { get; set; }
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

        #region WorkingExperienceDataModel

        public List<WorkingExperience> WorkingExperience { get; set; }

        #endregion

        #region AcademicRecordDataModel

        public List<AcademicRecord> AcademicRecords { get; set; }

        #endregion

        #region WorkshopRecordDataModel

        public List<WorkshopRecord> WorkshopRecords { get; set; }

        #endregion

        #region EmployeePermataBankAccountDataModel

        public string EmployeePermataAccountId { get; set; }

        public string EmployeePermataAccountName { get; set; }

        #endregion //delete later

#region BankAccountDataModel
        public string BankAccount { get; set; }

        public List<string> BankName { get; set; }

        public string AccountNumber { get; set; }
#endregion

        #region OtherRecordDataModel

        public string NPWPId { get; set; }

        public string JamsostekId { get; set; }

        #endregion
    }
}
