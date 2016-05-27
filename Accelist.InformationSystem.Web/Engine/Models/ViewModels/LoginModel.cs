using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Accelist.InformationSystem.Web.Engine.Models.ViewModels
{
    public class LoginModel
    {
        [Required(ErrorMessage="Input your Email")]
        [EmailAddress(ErrorMessage="Email format is not valid")]
        public string Email { get; set; }

        [Required(ErrorMessage="Input your Password")]
        public string Password { get; set; }
    }
}
