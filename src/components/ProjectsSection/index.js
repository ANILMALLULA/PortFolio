import { Component } from "react";

import "./index.css";

class ProjectsSection extends Component {
  renderProjectsList = () =>
    projectsData.map((project) => (
      <li className='project-item' key={project.id}>
        <img className='project-image' src={project.imageUrl} alt='work' />
        <p className='project-name'>{project.name}</p>
      </li>
    ));

  render() {
    return (
      <div>
        <h1 className='projects-heading'>WORK EXPERIENCE</h1>
        <div className='companyDetails'>
          <p className='companyname'>Wipro Limited -</p>
          <p className='experience'>Jun, 2019 to present</p>
        </div>
        <ul className='list-items'>
          <li>Working as a Frontend Developer.</li>
          <li>Understanding Client requirements and work accordingly.</li>
          <li>
            Design, discuss and develop UI based on Client requirements using
            FED technologies like ReactJs, JS, HTML, CSS, Bootstrap.
          </li>
          <li>
            Working effectively with team members and committed to timely
            completion of tasks assigned.
          </li>
          <li>Out of own interest, learnt Python and SQL languages.</li>
          <li>
            As a skill development objective, joined in online training
            institute for Full stack development and built number of UIs as a
            practice objective.
          </li>
        </ul>
        <h1 className='projects-heading1'>INTERPERSONAL SKILLS</h1>
        <ul className='list-items'>
          <li>Ability to rapidly build relationship and set up trust.</li>
          <li>Confident and Determined.</li>
          <li>Positive attitude.</li>
        </ul>
        
      </div>
    );
  }
}

export default ProjectsSection;
