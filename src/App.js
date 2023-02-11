import React from "react";

import NavigationBar from "./components/navigation/navigation.component";
import HomePage from "./components/homePage/homePage.component";

import LogIn from "./components/logIn/login.component";
import SignUp from "./components/signUp/signUp.component";

import Admission from "./components/admission/admission.component";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./components/payment/payment.component";
import Community from "./components/community/community.component";
import EBook from "./components/eBooks/eBook.component";
import Guidance from "./components/guidance/guidance.component";
import Result from "./components/result/result.component";
import Marks from "./components/marks/marks.component";
import Pdf from "./components/pdf/pdf.component";
import DefaultLayout from "./components/admin/Dashboard/dashboard.component.";
import Users from "./components/admin/Users/Users";
import AddUser from "./components/admin/Users/AddUser";
import PDashboard from "./components/parent/parent_dashboard/PDashboard";
import IDashboard from "./components/Institution/Institute_Dashboard/IDashboard";
import TDashboard from "./components/Teacher/Teacher_Dashboard/TDashboard";
import Profile from "./components/profile/profile.component";
import Attendance from "./components/attendance/attendance.component";
import ResultUpload from "./components/Teacher/Result-upload/ResultUpload";
import NotFound from "./components/NotFound";
import AddStudent from "./components/Institution/Institute_Dashboard/AddStudent";
import StudentLogin from "./components/studentLogin/StudentLogin";
import LeaveInstitute from "./components/Institution/LeaveInstitute";
import Home from "./components/HOME/Home";
import ViewLc from "./components/Institution/Institute_Dashboard/ViewLc";
import SubmitLc from "./components/Institution/Institute_Dashboard/SubmitLc";
const App = () => {
  var loc = window.location.pathname;
  const [users1, setUser] = useState([]);
  const getdata = async () => {
    let result = await fetch("http://localhost:9109/getallusers", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    const array = data.data;
    console.log(array);
    setUser(array);
  };
  console.log(users1);
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Router>
        {/* {loc === "/"? <NavigationBar/>:null }  */}
        <NavigationBar />
        <Routes>
          <Route path="/admin/manageusers" element={<Users />} />
          <Route path="/" exact element={<LogIn/>} />
          <Route path="/loginUser" element={<HomePage/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/community" element={<Community />} />
          <Route path="/eBooks" element={<EBook />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/results" element={<Result />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/admin/dashboard" exact element={<DefaultLayout />} />
          <Route path="/admin/adduser" exact element={<AddUser />} />
          <Route path="/notfound" exact element={<NotFound/>}></Route>
          <Route path="/institute/viewlc" exact element={<ViewLc/>}></Route>
          <Route path="/student/submitlc" exact element={<SubmitLc/>}></Route>
          <Route
            path="/parent/dashboard"
            exact
            element={<PDashboard />}
          ></Route>
          <Route path="/student/login" exact element={<StudentLogin/>}></Route>
          <Route
            path="/institute/dashboard"
            exact
            element={<IDashboard />}
          ></Route>
          <Route path="/leave/institute" exact element={<LeaveInstitute/>}></Route>
          <Route path="/institute/addstudent" exact element={<AddStudent/>}></Route>
          <Route
            path="/teacher/dashboard"
            exact
            element={<TDashboard />}
          ></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/resultUpload" element={<ResultUpload />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>

      {/* <SignUp /> */}
    </>
  );
};

export default App;
