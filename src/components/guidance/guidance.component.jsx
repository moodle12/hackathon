import React from "react";
import "./guidance.styles.css";
import { Document} from 'react-pdf/dist/esm/entry.webpack';
const Guidance = () => {
  return (
    <>
      <div className="guidance_cards">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://global-uploads.webflow.com/59e16042ec229e00016d3a66/61e0c0911b4fea59bebedc38_roadmap-templates_blog-hero.gif"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center guidance_h5">Roadmaps</h5>
            <hr
              style={{
                width: "7rem",
                marginLeft: "5rem",
              }}
            />
            <p className="card-text guidance_p">
              Are you prepared to embark on your quest to receive mentoring and
              land a job? You've arrived exactly where you need to be. Follow
              the roadmaps, educate yourself, and then apply for positions.
            </p>
            <a
              href="https://www.geeksforgeeks.org/complete-roadmap-for-first-year-college-students-b-tech-bca-b-sc/"
              target="_blank" rel="noreferrer" className="btn btn-outline-dark  "
              style={{
                marginLeft: "2rem",
              }}
            >
              Explore our roadmaps
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://app.mentorwith.com/wp-content/uploads/2020/10/Mentor-GIF-purple-2.gif"
            className="card-img-top image_mentor"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center guidance_h5">Mentorship</h5>
            <hr
              style={{
                width: "7rem",
                marginLeft: "5rem",
              }}
            />
            <p className="card-text guidance_p">
              A complete solution to all your mentorship needs, including
              learning resources, communities to be a part of, opportunities,
              and much more.
            </p>
            <a
              href="https://regal-kitten-67d397.netlify.app/"
              target="_blank" className="btn btn-outline-dark  "
              style={{
                marginLeft: "3.5rem",
              }} rel="noreferrer"
            >
              Talk with alumnis
            </a>
          </div>
        </div>
        <div className="card en" style={{ width: "18rem" }}>
        <img src="https://thumbs.gfycat.com/LimitedPhysicalEnglishsetter-max-1mb.gif" alt="Events" />
          <div className="card-body">
            <h5 className="card-title text-center guidance_h5">Events</h5>
            <hr
              style={{
                width: "7rem",
                marginLeft: "5rem",
              }}
            />
            <p className="card-text guidance_p">
              Explore events in various domains to upskill yourself, network
              with industry experts, and win amazing prizes by showcasing your
              knowledge.
            </p>
            <a
              href="https://www.techradar.com/news/top-tech-conferences-the-ultimate-tech-events-and-show-guide"
              target="_blank" rel="noreferrer" className="btn btn-outline-dark  "
              style={{
                marginLeft: "4rem",
              }}
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
      <div>
      <div className="card" style={{ width: "18rem" ,
                marginLeft: "7rem",
                marginTop: "3rem"}}>
          <img
            src="https://i.gifer.com/OyGx.gif"
            className="card-img-top"
            alt="ML Model"
          />
          <div className="card-body">
            <h5 className="card-title text-center guidance_h5">Analysis with Machine Learning</h5>
            <hr
              style={{
                width: "7rem",
                marginLeft: "6rem",
              }}
            />
            <p className="card-text guidance_p">
             We've taken the past sample data and trained our model to calculate the grade of a student considering different
             scenarios on a scale of 1 to 20. You can analyze your grade too after providing your data.
            </p>
            <a
              href="/student-mat.csv"
              target="_blank" rel="noreferrer" className="btn btn-outline-dark  "
              style={{
                marginLeft: "2rem",
              }}
            >
              View Analysis
            </a>
          </div>
        </div>
        {/* <h3>Analyze the Past Trends Using Ai Model and Past Data</h3>
        <a href="/student-mat.csv">open</a> */}
      </div>
       <a href="https://t.me/studentdemobot" target="_blank" rel="noreferrer" >
        <i className="fa-solid fa-comments guidance_position"></i>
        <div className="message">
          <i className="fa-solid fa-robot robot_position"></i>
          <h4 className="bot_h4">Hello, I am LS Bot.</h4>
          <p className="bot_p">How can I help you?</p>
        </div>
      </a>
    </>
  );
};

export default Guidance;
