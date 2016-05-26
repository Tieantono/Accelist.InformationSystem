using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Accelist.InformationSystem.APILayer;
using Accelist.InformationSystem.APILayer.Models;
using Accelist.InformationSystem.APILayer.Models.ViewModels;
using Microsoft.Owin.Security;
using System.Security.Claims;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;

namespace Accelist.InformationSystem.Web.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegisterModel registerModel, List<Child> childs)
        {
            using (var db = new AccelistInformationSystemDbContext())
            {
                if (ModelState.IsValid)
                {
                    foreach (var x in childs) {
                        
                    }
                    return RedirectToAction("Home");
                }
                return View();
            }
        }

        [HttpPost]
        public ActionResult Login(LoginModel loginModel) {
            using (var db = new AccelistInformationSystemDbContext()) {
                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, loginModel.Email));
                var id = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
                var context = Request.GetOwinContext();
                var authenticationManager = context.Authentication;
                authenticationManager.SignIn(id);

                return RedirectToAction("EmployeeList", "Employee", ViewData["email"]);
            }
        }

        public ActionResult RegisterEmployee() {
            using (var db = new AccelistInformationSystemDbContext())
            {
                RegisterModel registerModel = new RegisterModel();
                registerModel.BankName = db.GetBankList();

                return View(registerModel);
            }
        }

        [HttpPost]
        public ActionResult RegisterEmployee(RegisterModel registerModel, string jsonStringModel) {
            using (var db = new AccelistInformationSystemDbContext())
            {
                JsonStringList jsonStringList = new JsonStringList();
                jsonStringList = JsonConvert.DeserializeObject<JsonStringList>(jsonStringModel);

                jsonStringList.TrainingList.RemoveAll(Q => Q.Name == "");

                registerModel.WorkExperience = jsonStringList.WorkExpList;
                registerModel.TrainingRecords = jsonStringList.TrainingList;
                return null;
                //return RedirectToAction("EmployeeList", "Employee");
            }
        }

        public ActionResult RegisterEmployeeTemp(){
            return View();
        }

        [HttpPost]
        public ActionResult RegisterEmployeeTemp(EmployeeTemp employeeTemp) {
            using (var db = new AccelistInformationSystemDbContext()) {
                db.RegisterEmployeeTemp(employeeTemp);

                return RedirectToAction("EmployeeList", "Employee");
            }
        }
    }
}