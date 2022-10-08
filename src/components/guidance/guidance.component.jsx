import React from "react";
import "./guidance.styles.css";

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
              href="#"
              className="btn btn-outline-dark  "
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
              href="#"
              className="btn btn-outline-dark  "
              style={{
                marginLeft: "3.5rem",
              }}
            >
              Talk with alumnis
            </a>
          </div>
        </div>
        <div className="card en" style={{ width: "18rem" }}>
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
              href="#"
              className="btn btn-outline-dark  "
              style={{
                marginLeft: "4rem",
              }}
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
      <a href="https://t.me/studentdemobot" target="_blank">
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
