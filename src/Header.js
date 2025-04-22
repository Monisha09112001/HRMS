import React from "react";

const Header = ({ setActivePage }) => {
  return (
    <header className="mb-4">
      <h1>HRMS System</h1>
      <nav>
        <a
          href="#"
          onClick={() => setActivePage("Dashboard")}
          style={{ marginRight: "20px", fontSize: "18px" }}
        >
          Dashboard
        </a>

        <a
          href="#"
          onClick={() => setActivePage("HRMS")}
          style={{ fontSize: "18px" }}
        >
          HRMS
        </a>
      </nav>
    </header>
  );
};

export default Header;
