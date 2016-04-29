using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;

namespace Accelist.InformationSystem.APILayer.Models
{
    [Table("[EmployeeTemp]")]
    public class EmployeeTemp
    {
        [Key]
        public int EmployeeId { get; set; }

        public string EmployeeName { get; set; }

        public string EmployeePhone { get; set; }

        public string EmployeeGender { get; set; }
    }
}
