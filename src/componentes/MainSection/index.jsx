// MainSection.js
import React from 'react';

const MainSection = () => {
  return (
    <section className="main">
      <div className="main-top">
        <h1>Cards</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      <div className="main-skills">
        {/* Skills Cards will go here */}
      </div>
      <section className="main-course">
        <h1>My courses</h1>
        <div className="course-box">
          <ul>
            <li className="active">In progress</li>
            <li>teste</li>
            <li>comida</li>
            <li>futebol</li>
          </ul>
          <div className="course">
            {/* Courses boxes will go here */}
          </div>
        </div>

        <div className="course-box">
          <ul>
            <li className="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
          </ul>
          <div className="course">
            {/* Courses boxes will go here */}
          </div>
        </div>

        <div className="course-box">
          <ul>
            <li className="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
          </ul>
          <div className="course">
            {/* Courses boxes will go here */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainSection;
