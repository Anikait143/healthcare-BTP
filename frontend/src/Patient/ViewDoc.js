import React, { useState } from "react";
import Navbar from "../Basic/Navbar";
import LeftsidePatient from "../Dashbaord/LeftsidePatient";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";

const ViewDoc = (props) => {
    const { doctor } = props.location.state;
    const [redirect, setRedirect] = useState(false)

    const redir = () => {
        setRedirect(true)
    }

    if(redirect){
        return <Redirect
      to={{
        pathname: "/patient/searchdoctor"
      }}
    />
    }
 
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div className="col-3 col-md-3 p-4 bg-white ">
            <LeftsidePatient />
          </div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
              overflow: 'auto'
            }}
          >
            <div className="row ">
          <div className="col-9 col-md-9 p-4">
            <div className="card mb-4">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginInline:'1vw' }}>
                <h4 className="card-header">Personal Details</h4> 
                <Button color="warning" onClick={() => redir()}>Back</Button>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2 ">
                    Name:
                  </span>
                  <span className="text-uppercase">{doctor.dr_name}</span>
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Specialization:
                  </span>
                  <span className="text-capitalize">
                    {doctor.specialization}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Phone No:
                  </span>
                  {doctor.mobile}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Registration No:
                  </span>
                  {doctor.registration_num}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Email:
                  </span>
                  {doctor.email}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Gender:
                  </span>
                  {doctor.gender}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Clinic Address:
                  </span>
                  {doctor.address}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-success mr-2 p-2">
                    Pincode:
                  </span>
                  {doctor.pincode}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-info mr-2 p-2 text-uppercase">
                    Fees per Session:
                  </span>
                  {doctor.feesperSession}
                </li>
                <li className="list-group-item">
                  <span className="badge badge-info mr-2 p-2 text-uppercase">
                    Feedbacks:
                  </span>
                  {doctor.feedback.map((item, index) => (
                    
                      <div key={index}>
                        <span className="mr-2 p-2 text-uppercase">
                          Rating: {item.rating}
                        </span>
                        <span className="mr-2 p-2 text-uppercase">
                          Comment: {item.comment}
                        </span>
                      </div>
                    
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 col-md-3 p-4 ">
            <img
              src={doctor.pic}
              // className="rounded-circle"

              style={{ width: "100%" }}
              alt="No Profile Picture to display"
            />
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDoc;