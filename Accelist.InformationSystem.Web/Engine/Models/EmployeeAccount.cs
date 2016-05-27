using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accelist.InformationSystem.Web.Engine.Models
{
    public class EmployeeAccount
    {
        public int AccountId { get; set; }

        public string EmployeeEmail { get; set; }

        public string Password { get; set; }
    }
}
