using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using Dapper;
using Accelist.InformationSystem.Web.Engine.Models;
using Accelist.InformationSystem.Web.Engine.Models.ViewModels;

namespace Accelist.InformationSystem.Web.Engine
{
    public class AccelistInformationSystemDbContext : IDisposable
    {
        public readonly SqlConnection Connection;

        //connectionName = "AccelistInformationSystem"
        public AccelistInformationSystemDbContext(string connectionName = "AccelistInformationSystem")
        {
            var connectionInfo = ConfigurationManager.ConnectionStrings[connectionName];
            Connection = new SqlConnection(connectionInfo.ConnectionString);
        }

        public void Dispose()
        {
            Connection.Dispose();
        }

        /// <summary>
        /// Insert the registration data for Employee into the database
        /// </summary>
        /// <param name="employeeId"></param>
        /// <param name="employeeName"></param>
        /// <returns></returns>
        public int Register(string employeeName)
        {
            return 0;
            //return (int)Connection.Insert(new Employee
            //{
            //    EmployeeName = employeeName
            //});
        }

        /// <summary>
        /// Get the list of Employee data from the database
        /// </summary>
        /// <returns></returns>
        public List<Employee> GetEmployeeList() {
            return Connection.Query<Employee>(@"
SELECT EmployeeId, EmployeeName
FROM Employee
").ToList();
        }

        public void RegisterEmployeeTemp(EmployeeTemp employeeTemp){

            //Connection.Insert(new EmployeeTemp{
            //   EmployeeName =  employeeTemp.EmployeeName,
            //   EmployeeEmail = employeeTemp.EmployeeEmail,
            //   EmployeePhone = employeeTemp.EmployeePhone,
            //   EmployeeGender = employeeTemp.EmployeeGender
            //});
        }

        public EmployeeTemp GetEmployeeTempData(int employeeId)
        {
            return Connection.Query<EmployeeTemp>(@"
SELECT EmployeeName, EmployeePhone, EmployeeGender
FROM EmployeeTemp
WHERE EmployeeId = @employeeId
", new { employeeId }).FirstOrDefault();
        }

        public void EditEmployeeTemp(EmployeeTemp employeeTemp) {
            //Connection.Update(new EmployeeTemp()
            //{
            //    EmployeeId = employeeTemp.EmployeeId,
            //    EmployeeName = employeeTemp.EmployeeName,
            //    EmployeeEmail = employeeTemp.EmployeeEmail,
            //    EmployeePhone = employeeTemp.EmployeePhone,
            //    EmployeeGender = employeeTemp.EmployeeGender
            //});
        }

        public List<EmployeeTemp> GetEmployeeTempList() {
            return Connection.Query<EmployeeTemp>(@"
SELECT EmployeeId, EmployeeName
FROM EmployeeTemp
ORDER BY EmployeeName ASC
").ToList();
        }

        public List<EmployeeTemp> GetEmployeeTempListByName(string employeeName) {
            employeeName = employeeName + "%";
            return Connection.Query<EmployeeTemp>(@"
SELECT EmployeeId, EmployeeName
FROM EmployeeTemp
WHERE EmployeeName LIKE @employeeName
ORDER BY EmployeeName ASC
", new { employeeName }).ToList();
        }

        public void DeleteEmployeeTemp(int employeeId) {
            //Connection.Delete(new EmployeeTemp
            //{
            //    EmployeeId = employeeId
            //});
        }

        public List<string> GetBankList() {
            return Connection.Query<string>(@"
SELECT BankName
FROM BankList
").ToList();
        }

        public async Task<string> iCount()
        {
            var task = await Task.Run(() =>
            {
                int i = 0;
                do
                {
                    i++;
                } while (i < 10);
                return "Success";
            });

            return task;
        }
    }
}
