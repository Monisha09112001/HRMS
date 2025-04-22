import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^[6789]\d{9}$/,
      "Phone number must start with 6, 7, 8, or 9 and be 10 digits long"
    )
    .required("Phone number is required"),
  department: Yup.string().required("Department is required"),
  designation: Yup.string().required("Designation is required"),
  joiningDate: Yup.date().required("Joining Date is required"),
  status: Yup.string().required("Status is required"),
});

const EditModal = ({ show, onHide, onSave, employee, isCreating }) => {
  useEffect(() => {
    if (employee) {
    }
  }, [employee]);

  // Initialize Formik with useFormik
  const formik = useFormik({
    initialValues: employee || {
      fullName: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      joiningDate: "",
      status: "Active",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSave(values);
      onHide();
    },
  });

  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          {isCreating ? "Create Employee" : "Edit Employee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              isInvalid={formik.touched.fullName && formik.errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              isInvalid={formik.touched.phone && formik.errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              name="department"
              value={formik.values.department}
              onChange={formik.handleChange}
              isInvalid={formik.touched.department && formik.errors.department}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.department}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              value={formik.values.designation}
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.designation && formik.errors.designation
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.designation}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Joining Date</Form.Label>
            <Form.Control
              type="date"
              name="joiningDate"
              value={formik.values.joiningDate}
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.joiningDate && formik.errors.joiningDate
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.joiningDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              isInvalid={formik.touched.status && formik.errors.status}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {formik.errors.status}
            </Form.Control.Feedback>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              {isCreating ? "Create" : "Save"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
