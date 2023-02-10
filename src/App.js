import React from "react";

import NavigationBar from "./components/navigation/navigation.component";
import HomePage from "./components/homePage/homePage.component";

import LogIn from "./components/logIn/login.component";
import SignUp from "./components/signUp/signUp.component";

import Admission from "./components/admission/admission.component";

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
import ResultUpload from "./components/Teacher/Result-upload/ResultUpload";
const App = () => {
  var loc = window.location.pathname;
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/admin/manageusers" element={<Users />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/community" element={<Community />} />
          <Route path="/eBooks" element={<EBook />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/results" element={<Result />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/resultUpload" element={<ResultUpload />} />
          <Route path="/admin/dashboard" exact element={<DefaultLayout />} />
          <Route path="/admin/adduser" exact element={<AddUser />} />
          <Route
            path="/parent/dashboard"
            exact
            element={<PDashboard />}
          ></Route>
          <Route
            path="/institute/dashboard"
            exact
            element={<IDashboard />}
          ></Route>
          <Route
            path="/teacher/dashboard"
            exact
            element={<TDashboard />}
          ></Route>
        </Routes>
      </Router>

      {/* <SignUp /> */}
    </>
  );
};

export default App;
