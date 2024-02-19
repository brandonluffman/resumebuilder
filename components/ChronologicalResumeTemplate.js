import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
const ChronologicalResumeTemplate = ({ formData }) => {

    const downloadResumeAsPDF = async () => {
        const resumeElement = document.getElementById('resume');
        const canvas = await html2canvas(resumeElement);
        const imgData = canvas.toDataURL('image/png');
      
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });
      
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('resume.pdf');
      };
    return (
        <div className="resume">
          <h1>{formData.name}</h1>
          <p className='resume-contact-info'>{formData.email} | {formData.phone}</p>
          
          <h2>Professional Summary</h2>
        <p>A brief summary highlighting your key skills and experiences relevant to the job youre applying for.</p>
        
          <h2>Work Experience</h2>
          {formData.workExperience.map((experience, index) => (
            <div key={index} className="work-experience">
              <h3>{experience.title}</h3>
              <p>{experience.company} | {experience.yearsOfEmployment}</p>
              <p>{experience.accomplishments}</p>
            </div>
          ))}
    
          <h2>Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="education">
              <h3>{edu.schoolName}</h3>
              <p>{edu.degree} in {edu.major} | {edu.dates}</p>
            </div>
          ))}
    
          <h2>Skills</h2>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
    
          <h2>Certifications</h2>
          {formData.certifications.map((cert, index) => (
            <div key={index} className="certifications">
              <h3>{cert.certTitle}</h3>
              <p>{cert.certificationDonor} | {cert.dateAwarded}</p>
            </div>
          ))}
    
          <h2>Personal Interests</h2>
          <p>{formData.personalInterests}</p>
          <button onClick={downloadResumeAsPDF}>Download as PDF</button>

        </div>
      );
}

export default ChronologicalResumeTemplate