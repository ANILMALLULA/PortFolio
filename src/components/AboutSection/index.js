import { Component } from "react";

import "./index.css";

const skillsData = [
  {
    id: 0,
    name: "HTML",
  },
  {
    id: 1,
    name: "Java Script",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "React",
  },
  {
    id: 4,
    name: "SQL",
  },
  {
    id: 5,
    name: "Python",
  },
];

const educationData = [
  {
    id: 0,
    qualification: "Graduation",
    qualificationSource: "B.Tech (Electronics and Communication Engineering)",
    percentage: "80%",
  },
  {
    id: 1,
    qualification: "Intermediate",
    qualificationSource: "Aditya Junior College, Palakol",
    percentage: "96.5%",
  },
  {
    id: 2,
    qualification: "SSC",
    qualificationSource: "Sunshine English Medium School, Valluru",
    percentage: "95%",
  },
];

class AboutSection extends Component {
  renderSkillsList = () => (
    <ul className='skills-list'>
      {skillsData.map((skill) => (
        <li className='skill-item' key={skill.id}>
          <p className='skill'>{skill.name}</p>
        </li>
      ))}
    </ul>
  );

  renderEducationDetailsList = () =>
    educationData.map((education) => (
      <li key={education.id}>
        <div>
          <p className='qualification'>{education.qualification}</p>
          <p className='education-place'>{education.qualificationSource}</p>
          <p className='education-place'>
            Percentage:
            <span className='percentage'>{education.percentage}</span>
          </p>
        </div>
      </li>
    ));

  render() {
    return (
      <div>
        <h1 className='about-section-heading'>Career Objective:</h1>
        <p className='about-section-description'>
          To secure a position in an organisation where I can utilize and apply
          my skills and knowledge, which would enable me as a professional to
          grow while fulfilling organizational goals.
        </p>
        <div className='education-and-skills-container'>
          <div className='education-details-container'>
            <h1 className='education-and-skills-heading'>Education</h1>
            <ul className='education-details-list'>
              {this.renderEducationDetailsList()}
            </ul>
          </div>
          <div className='skills-container'>
            <h1 className='education-and-skills-heading'>Skills</h1>
            {this.renderSkillsList()}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
