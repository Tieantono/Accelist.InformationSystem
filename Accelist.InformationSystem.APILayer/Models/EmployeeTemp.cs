using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations;

namespace Accelist.InformationSystem.APILayer.Models
{
    [Table("[EmployeeTemp]")]
    public class EmployeeTemp
    {
        [Dapper.Contrib.Extensions.Key]
        public int EmployeeId { get; set; }
        
        public string EmployeeName { get; set; }

        [EmailAddress(ErrorMessage="Wrong email address format")]
        public string EmployeeEmail { get; set; }

        public string EmployeePhone { get; set; }

        public string EmployeeGender { get; set; }

        //public EmployeeTemp() {
        //    EmployeeGenderClass employeeGenderClass = new EmployeeGenderClass();
        //}
    }

    //private class EmployeeGenderClass {
    //    public Gender EmployeeGenderEnum { get; set; }
    //}

    public enum Gender {
    Male, Female
    }
}
