using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace Accelist.InformationSystem.APILayer.Models
{
    [Table("[Employee]")]
    public class Employee
    {
        [Key]
        public string EmployeeId { get; set; }

        public string EmployeeName { get; set; }

        public DateTime IdValidDate { get; set; }

        public char Gender { get; set; }

        public bool Jamsostek { get; set; }

        public char Academic { get; set; }

        public char BloodType { get; set; }

        public string BirthPlace { get; set; }

        public DateTime BirthDate { get; set; }

        public char LastAcademic { get; set; }

        public string Address { get; set; }

        public string CurrentAddress { get; set; }

        public string MobilePhone { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Religion { get; set; }

        public int TotalSibling { get; set; }

        public int SiblingNumber { get; set; }

        public string Status { get; set; }

        public DateTime StatusChange { get; set; }

        public char Citizenship { get; set; }

        //Foreign Key
        public int AccountId { get; set; }
    }
}
