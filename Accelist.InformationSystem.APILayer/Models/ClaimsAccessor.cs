using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;

namespace Accelist.InformationSystem.APILayer.Models
{
    public class ClaimsAccessor
    {
        public ClaimsAccessor(List<Claim> claims) {
            claims.FirstOrDefault().Value.ToString();
        }
    }
}