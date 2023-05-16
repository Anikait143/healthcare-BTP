import React from "react";
import Navbar from "../Basic/Navbar";
import Leftside from "../Dashbaord/LeftsideDoctor";
import DoctorPrescriptionForm from "../Pages/DoctorPrescriptionForm";
import "../Dashbaord/dashboard.css";

const PrescriptionForm = (props) => {
  const { id, val, link } = props.location.state;
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div
            className="col-3 col-md-3 p-4 bg-white "
            style={{ height: "80vh" }}
          >
            <Leftside />
          </div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <h3 style={{ backgroundColor: 'black', color: 'white', height: '40px', width: '500px', textAlign: 'center' }}>Fill Prescription Form</h3>
            <DoctorPrescriptionForm id={id} val={val} link={link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionForm;
