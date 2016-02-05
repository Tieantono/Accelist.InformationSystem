using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accelist.InformationSystem.APILayer.Models.ViewModels
{
    #region PersonalDataEnum
    public enum Gender
    {
        Male,
        Female
    }
    public enum Academic
    {
        TK,
        SD,
        SMP,
        SMA,
        SMK,
        S1,
        S2,
        S3
    }
    public enum BloodType
    {
        A,
        B,
        AB,
        O
    }
    public enum Religion
    {
        Atheis,
        Budha,
        Hindu,
        Katolik,
        Konghucu,
        Kristen
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
    #endregion

    public class Child{
        public string ChildName { get; set; }

        public Gender? ChildGender { get; set; }

        public string ChildBirthPlace { get; set; }

        public DateTime? ChildBirthDate { get; set; }

        public string ChildJob { get; set; }
    }

    public class Sibling{
        public string SiblingName { get; set; }

        public Gender? SiblingGender { get; set; }

        public string SiblingBirthPlace { get; set; }

        public DateTime? SiblingBirthDate { get; set; }

        public string SiblingJob { get; set; }
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
        public string Email { get; set; }

        [Display(Name = "Religion")]
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
    }
}
