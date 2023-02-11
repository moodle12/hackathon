import React from "react";
import SideBar from "./sidebar/sideBar.component";
import MainPage from "./mainPage/mainPage.component";
import NotFound from "../NotFound";

const HomePage = () => {
  let token  = localStorage.getItem('token');
  return (
    <>
     { token ? (<div className="homePage_section">
        <div className="left">
          <SideBar />
        </div>

        <div className="right">
          <MainPage />
        </div>
      </div>) : (
        <div><NotFound/></div>
      )}
    </>
  );
};

export default HomePage;
