import React, { useState } from "react";
import Header from "./Header";
import HRMSList from "./HRMSList";
import Dashboard from "./Dashboard";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const employees = localStorage.getItem("employees") || "[]";

  return (
    <div className="container mt-5">
      {/* Header for navigation */}
      <Header setActivePage={setActivePage} />

      {/* Conditional rendering for HRMS and Dashboard */}
      {activePage === "Dashboard" && (
        <Dashboard employees={JSON.parse(employees)} />
      )}
      {activePage === "HRMS" && <HRMSList />}
    </div>
  );
};

export default App;
