using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using Dapper;
using Dapper.Contrib.Extensions;
using Accelist.InformationSystem.APILayer.Models;

namespace Accelist.InformationSystem.APILayer
{
    public class AccelistInformationSystemDbContext : IDisposable
    {
        public readonly SqlConnection Connection;

        public AccelistInformationSystemDbContext(string connectionName = "AccelistInformationSystem")
        {
            var connectionInfo = ConfigurationManager.ConnectionStrings[connectionName];
            Connection = new SqlConnection(connectionInfo.ConnectionString);
        }

        public void Dispose()
        {
            Connection.Dispose();
        }

        public int Register(string employeeId, string employeeName)
        {
            return (int)Connection.Insert(new Employee
            {
                EmployeeId = employeeId,
                EmployeeName = employeeName
            });
        }
    }
}
