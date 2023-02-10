import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../card/Card";
import "./TDashboard.css";

const TDashboard = () => {
  let navigate = useNavigate();

  const resultHandle = () => {
    navigate("/resultUpload");
  };

  const assignmentHandle = () => {
    navigate("/assignmentUpload");
  };

  const markAttendanceHandle = () => {
    navigate("/markAttendanceUpload");
  };
  return (
    <div className="tDashboard-container">
      <div className="tDashboard-sidebar">
        <div className="tDashboard-items">
          <div className="tDashboard-item__1" onClick={resultHandle}>
            Result Upload
          </div>
          <div className="tDashboard-item__2" onClick={assignmentHandle}>
            Mark Attendance
          </div>
          <div className="tDashboard-item__3" onClick={markAttendanceHandle}>
            Assignment Upload
          </div>
        </div>
      </div>
      <div className="tDashboard-main">
        <div className="tDashboard-main__left">
          <h2 className="schedule__title">22/12/2023 Schedule</h2>
          <div className="cards">
            <Card
              title="Physics-STD-9"
              image="https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip"
              time="4:00 to 5:00"
            />
            <Card
              title="Chemistry-STD-7"
              image="https://images.theconversation.com/files/121885/original/image-20160510-20731-1pf8nwv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
              time="5:00 to 6:00"
            />
          </div>
        </div>
        <div className="tDashboard-main__right">
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/calendar/perfect-business-calendar-2x.png"
            alt="calendar"
            style={{
              marginTop: "1rem",
              height: "200px",
              width: "280px",
              marginLeft: "2rem",
            }}
            className="tDashboard-main__right__image"
          />
          <span className="tDashboard-main__right__span">Recent Files:- </span>
          <div className="tDashboard-items__right">
            <div className="tDashboard-item__right__1">📁 STD-6_Maths.pdf</div>
            <div className="tDashboard-item__right__2">
              📁 STD-7_Science.pdf
            </div>
            <div className="tDashboard-item__right__3">
              📁 STD-9_Physics.pdf
            </div>
            <div className="tDashboard-item__right__3">
              📁 STD-5_Chemistry.pdf
            </div>
            <div className="tDashboard-item__right__3">
              📁 STD-9_Physics.pdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDashboard;
