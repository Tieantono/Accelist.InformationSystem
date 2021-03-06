﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Owin.Security;
using System.Security.Claims;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using Accelist.InformationSystem.Web.Engine;
using Accelist.InformationSystem.Web.Engine.Models;
using Accelist.InformationSystem.Web.Engine.Models.ViewModels;
using System.Threading.Tasks;

namespace Accelist.InformationSystem.Web.Controllers
{
    public class AccountController : Controller
    {
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
        public async Task<ActionResult> RegisterEmployee(RegisterModel registerModel) {
            using (var db = new AccelistInformationSystemDbContext())
            {
                JsonStringList dynamicDataList = new JsonStringList();
                dynamicDataList = JsonConvert.DeserializeObject<JsonStringList>(registerModel.RegisterFormDynamicData);

                dynamicDataList.ChildList.RemoveAll(Q => Q.FullName == null || Q.FullName == "");
                dynamicDataList.TrainingList.RemoveAll(Q => Q.Name == null || Q.Name == "");
                dynamicDataList.WorkExpList.RemoveAll(Q => Q.CompanyName == null || Q.CompanyName == "");

                registerModel.Childs = dynamicDataList.ChildList;
                registerModel.WorkExperience = dynamicDataList.WorkExpList;
                registerModel.TrainingRecords = dynamicDataList.TrainingList;

                var taskResult = await db.iCount();

                return RedirectToAction("", "");
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