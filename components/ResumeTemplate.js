import React from 'react'

const ResumeTemplate = ({ formData }) => {
    return (
      <div className="resume">
        <h1>{formData.name}</h1>
        <p>{formData.email} | {formData.phone}</p>
        <h2>Skills</h2>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h2>Work Experience</h2>
        {formData.workExperience.map((experience, index) => (
          <div key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.company} | {experience.yearsOfEmployment}</p>
            <p>{experience.accomplishments}</p>
          </div>
        ))}
        {/* Add sections for education, certifications, and personal interests */}
      </div>
    );
  };

export default ResumeTemplate