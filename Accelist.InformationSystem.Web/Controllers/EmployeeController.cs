using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Accelist.InformationSystem.APILayer;
using Accelist.InformationSystem.APILayer.Models;

namespace Accelist.InformationSystem.Web.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult EmployeeList(string employeeName)
        {
            using (var db = new APIAccelistInformationSystemDbContext())
            {
                List<EmployeeTemp> employeeTemp = new List<EmployeeTemp>();
                if (employeeName != "" && employeeName != null)
                {
                    employeeTemp = db.GetEmployeeTempListByName(employeeName);
                }
                else
                {
                    employeeTemp = db.GetEmployeeTempList();
                }
                return View(employeeTemp);
            }
        }

        [HttpGet]
        public ActionResult EditEmployee(int employeeId) {
            using (var db = new APIAccelistInformationSystemDbContext()) {
                EmployeeTemp employeeTemp = new EmployeeTemp();
                employeeTemp = db.GetEmployeeTempData(employeeId);
                return View(employeeTemp);
            }
        }

        [HttpPost]
        public ActionResult EditEmployee(EmployeeTemp employeeTemp) {
            using (var db = new APIAccelistInformationSystemDbContext()) {
                db.EditEmployeeTemp(employeeTemp);
                return RedirectToAction("EmployeeList");
            }
        }

        public void DeleteEmployee(string index) {
            using (var db = new APIAccelistInformationSystemDbContext()) {
                db.DeleteEmployeeTemp(Int32.Parse(index));
            }
        }
    }
}