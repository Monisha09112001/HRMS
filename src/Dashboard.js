import React from "react";

const Dashboard = ({ employees }) => {
  const employeeCount = {
    totalEmployees: employees?.length,
    activeEmployees: employees?.filter((emp) => emp.status === "Active").length,
    inactiveEmployees: employees?.filter((emp) => emp.status === "Inactive")
      .length,
  };

  const departmentBreakdown = employees?.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] ? acc[emp.department] + 1 : 1;
    return acc;
  }, {});

  return (
    <div className="dashboard-container">
      <h3 className="dashboard-title">Employee Dashboard</h3>
      <div className="dashboard-stats">
        {/* Total Employees Card */}
        <div className="dashboard-card">
          <h4>Total Employees</h4>
          <p>{employeeCount?.totalEmployees}</p>
        </div>

        {/* Active Employees Card */}
        <div className="dashboard-card">
          <h4>Active Employees</h4>
          <p>{employeeCount?.activeEmployees}</p>
        </div>

        {/* Inactive Employees Card */}
        <div className="dashboard-card">
          <h4>Inactive Employees</h4>
          <p>{employeeCount?.inactiveEmployees}</p>
        </div>
      </div>

      {/* Department Breakdown Section */}
      <div className="department-breakdown">
        <h4>Employees by Department</h4>
        <ul>
          {Object.keys(departmentBreakdown).map((department) => (
            <li key={department}>
              <strong>{department}</strong>: {departmentBreakdown[department]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
