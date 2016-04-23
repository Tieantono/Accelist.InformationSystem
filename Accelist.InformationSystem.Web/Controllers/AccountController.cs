using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Accelist.InformationSystem.APILayer;
using Accelist.InformationSystem.APILayer.Models.ViewModels;

namespace Accelist.InformationSystem.Web.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        [HttpGet]
        public ActionResult jsonTest()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegisterModel registerModel, List<Child> childs, List<Test> test)
        {
            using (var db = new AccelistInformationSystemDbContext())
            {
                test = null;
                if (ModelState.IsValid)
                {
                    foreach (var x in childs) {
                        
                    }
                    return RedirectToAction("Home");
                }
                return View();
            }
        }
    }
}