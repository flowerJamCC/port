import React from "react";
import "../CSS/proj.css";

const Proj = () => {
  return (
    <div className="projects-container-main">
      <p className="projects-par">
        All project files can be found on GitHub <br />
        <br /> - - link at bottom of this page
      </p>
      <div className="project-container">
        <div className="project-writing">
          <h3>Professional Business Dashboard Application</h3>
          <p>
            Using advanced technologies, such as React.js, Material UI, and
            public API's, I single handedly created a fully functional front
            end, mock, reusable dashboard that could theoretically be integrated
            wtih companies and businesses around the world.
          </p>
        </div>
        <div className="project-imgs">
          <div className="img-one"></div>
          <div className="img-two"></div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-imgs">
          <div className="img-three"></div>
          <div className="img-four"></div>
        </div>
        <div className="project-writing">
          <h3>Real World Login Page</h3>
          <p>
            In order to be considered a well-rounded front end developer in
            todays market, one must be able to create, and recreate widely used
            web pages that serve a functional purpose. Although the thought
            might not be as fancy as we would like to hope, projects such as
            this one are fundemental for many real world projects.
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-writing">
          <h3>E-Commerce Web Application for Shoe Manufacturer</h3>
          <p>
          Cloned famous shoe commerece web-site with minor improvements to styling made.
          The web app is user friendly and provides the customer with a very pleasant user
          experience.
          </p>
        </div>
        <div className="project-imgs">
          <div className="img-five"></div>
          <div className="img-six"></div>
        </div>
      </div>
    </div>
  );
};

export default Proj;
