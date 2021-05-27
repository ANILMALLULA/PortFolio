import React from "react";
import "./index.css";

function MoreInfo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "50%", padding: "10px" }}>
        <h1 className='projects-heading1'>Hobbies</h1>
        <ul className='list-items'>
          <li>Long Drives</li>
          <li>Listening to Music</li>
          <li>Spending valuable time with friends and family.</li>
        </ul>
      </div>
      <div style={{ width: "50%", padding: "10px" }}>
        <h1 className='projects-heading1'>Additional Info:</h1>
        <ul className='list-items'>
          <li>Date of Birth: 1st July 1998 </li>
          <li>Marital Status: Single</li>
          <li>Nationality: India</li>
          <li>Languages known: English, Hindi, Telugu</li>
        </ul>
      </div>
      <div>
        <h1 className='projects-heading1'>
          ACHIEVEMENTS and EXTRA –CURRICULAR ACTIVITIES:
        </h1>
        <ul className='list-items'>
          <li>
            Won First prize in Project Expo event of GVIT college fest 2018.
          </li>
          <li>
            Won First prize in Project Expo event of GVIT college fest 2018.
          </li>
          <li>
            Won Third prize in Archetype event of NIPUNA 2K17 fest of our
            college.
          </li>
          <li>Won Excellence Awards in Wipro for Quarterly performances</li>
          <hr></hr>
          <li>
            Student Coordinator for the initiation of Civil services coaching in
            our college
          </li>
          <li>
            Works as a volunteer for SPORTS and QUIZ in TRANCE 2K18 event of our
            college
          </li>
          <li>
            Actively participated in various sports events from my school days.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
