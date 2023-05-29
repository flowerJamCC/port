import React from 'react';
import dashboard from '../media/dashboard.png';
import dashcode from '../media/dashcode.png';
import loginpage from '../media/loginpage.png';
import logincode from '../media/logincode.png';
import agenda from '../media/agenda.png';
import agendacode from '../media/agendacode.png';
import '../CSS/projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <p className='projects-par'>All project files can be found on gitHub <br/><br/> - - Link at bottom of this page</p>
      <div className="project-one-cont">
        <div className="project-one-left">
          <h3>Professional Business Dashboard Web Application</h3>
          <p>Using advanced technologies, such as React.js, Material UI, and public API's, I single handedly created a
            fully functional front end, mock, reusable dashboard that could theoretically be integrated wtih companies 
            and businesses around the world.</p>
        </div>
        <div className="project-one-right">
          <img src={dashboard} alt='dash' />
          <img src={dashcode} alt="dash-code" />
        </div>
      </div>
      <div className="project-two-cont">
        <div className="project-two-left">
          <img src={logincode} alt="login-code" />
          <img src={loginpage} alt="login page" />
        </div>
        <div className="project-two-right">
          <h3>Real World Login Page</h3>
          <p>In order to be considered a well-rounded front end developer in todays market, one must be able to create, and recreate 
            widely used web pages that serve a functional purpose. Although the thought might not be as fancy as we would like to hope,
            projects such as this one are fundemental for many real world projects.
          </p>
        </div>
      </div>
      <div className="project-three-cont">
        <div className="project-three-left">
          <h3>Personal Agenda Web Application</h3>
          <p>Designed and engineered web-application that allows a user to make and remove items from a 
            list of important appointments and/or events/errands.</p>
        </div>
        <div className="project-three-right">
          <img src={agenda} alt='agenda' />
          <img src={agendacode} alt="agenda-code" />
        </div>
    </div>
    </div>
  )
}

export default Projects;