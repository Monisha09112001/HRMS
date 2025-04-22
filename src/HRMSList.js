import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import EmployeeTable from "./EmployeeTable";
import EditModal from "./Modal/EditModal";
import DeleteConfirmModal from "./Modal/DeleteConfirmModal";

const HRMSlist = () => {
  const [state, setState] = useState({
    employees: [],
    showEditModal: false,
    showDeleteModal: false,
    selectedEmployee: null,
    isCreating: false,
  });

  // Load employees from localStorage on mount
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      employees: JSON.parse(localStorage.getItem("employees")) || [],
    }));
  }, []);

  const handleCreate = () => {
    setState((prevState) => ({
      ...prevState,
      isCreating: true,
      selectedEmployee: null,
      showEditModal: true,
    }));
  };

  const handleEdit = (emp) => {
    setState((prevState) => ({
      ...prevState,
      selectedEmployee: emp,
      isCreating: false,
      showEditModal: true,
    }));
  };

  const handleDelete = (emp) => {
    setState((prevState) => ({
      ...prevState,
      selectedEmployee: emp,
      showDeleteModal: true,
    }));
  };

  const handleSave = (data) => {
    const updatedEmployees = state.isCreating
      ? [...state.employees, { ...data, id: Date.now() }]
      : state.employees.map((emp) => (emp.id === data.id ? data : emp));

    setState((prevState) => ({
      ...prevState,
      employees: updatedEmployees,
      showEditModal: false,
    }));

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const confirmDelete = () => {
    const updatedEmployees = state.employees.filter(
      (emp) => emp.id !== state.selectedEmployee.id
    );

    setState((prevState) => ({
      ...prevState,
      employees: updatedEmployees,
      showDeleteModal: false,
    }));

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">HRMS Employee List</h2>
        <Button variant="primary" onClick={handleCreate}>
          + Create Employee
        </Button>
      </div>

      <EmployeeTable
        employees={state.employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal
        show={state.showEditModal}
        onHide={() =>
          setState((prevState) => ({ ...prevState, showEditModal: false }))
        }
        onSave={handleSave}
        employee={state.selectedEmployee}
        isCreating={state.isCreating}
      />

      <DeleteConfirmModal
        show={state.showDeleteModal}
        onHide={() =>
          setState((prevState) => ({ ...prevState, showDeleteModal: false }))
        }
        onConfirm={confirmDelete}
        employeeName={state.selectedEmployee?.fullName}
      />
    </div>
  );
};

export default HRMSlist;
