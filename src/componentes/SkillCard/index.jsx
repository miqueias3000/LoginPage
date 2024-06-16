// SkillCard.js
import React from 'react';

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Get Started</button>
    </div>
  );
};

export default SkillCard;
