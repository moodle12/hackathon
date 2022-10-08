import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainPage.styles.scss";

const MainPage = () => {
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              background:
                " url(https://image.shutterstock.com/image-photo/word-guidance-written-on-wooden-260nw-1934619647.jpg)",
                  backgroundSize:'250px 200px',
                  // backgroundRepeat:'no-repeat'
              
            }}
          ></div>
        </div>
        <div className="description">
          <h1>Guidance</h1>
          <p>
            {" "}
            The Gap provides students with their career guidance as well as the Roadmap for the students to follow in the coming years with much more features.
          </p>
          <p className="read-more">
            <Link to="/guidance">Explore More</Link>
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              background:
                " url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80)",

            }}
          ></div>
        </div>
        <div className="description">
          <h1>Library</h1>
          <p>
            The Gap provides with numerous E-Books to the students registered with it's portal. Student will get personalized suggestions of the book they might be interested to buy.
          </p>
          <p className="read-more">
            <Link to="/eBooks">Explore More</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
