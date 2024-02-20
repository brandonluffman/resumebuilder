import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { IoMdDownload } from 'react-icons/io';
const CombinationResumeTemplate = ({ formData }) => {

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
      <div>
                <button className='btn-margin download-btn' onClick={downloadResumeAsPDF}><IoMdDownload /></button>

      <div className="resume combination" id='resume'>
        <h1>{formData.name}</h1>
        <h1>{formData.jobTitle}</h1>
        <div className='resume-contact-container'>
          <p className='resume-contact-info'>{formData.email}</p>
            |
           <p>{formData.phone}</p>
           |
           <p>{formData.cityState}</p>
          </div>
  
        <h2>Professional Summary</h2>
        <p>{formData.professionalSummary}</p>
  
        <h2>Skills</h2>
        <p>{formData.skills.join(', ')}</p>

        {/* <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}
  
        <h2>Professional Experience</h2>
        {formData.workExperience.map((experience, index) => (
          <div key={index}>
            <h3>{experience.title}</h3>
            <div className='work-flexer'>
              <p>{experience.company}</p>
              <div className='work-dates'>
              <p>{experience.startDate}</p>
              <p>-</p>
              <p>{experience.endDate}</p>
              </div>
              </div>
            {/* <p>{experience.accomplishments}</p> */}
            <ul className='accomplishments-list'>
              {experience.accomplishments.map((accomplishment, index) => (
                  <li key={index}>{accomplishment}</li>
                ))}
              </ul>
          </div>
        ))}
  
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.schoolName}</h3>
            <div className='work-flexer'>
              <p>{edu.degree} | {edu.major}</p>
              <div className='work-dates'>
              <p>{edu.startYear}</p>
              <p>-</p>
              <p>{edu.endYear}</p>
              </div>
              </div>
          </div>
        ))}
  
      {formData.certifications.length > 0 && (
          <div>
            <h2>Certifications</h2>
            {formData.certifications.map((cert, index) => (
              <div key={index}>
                <h3>{cert.certTitle}</h3>
                <p>{cert.certificationDonor} | {cert.dateAwarded}</p>
              </div>
            ))}
          </div>
        )}
  
  {formData.personalInterests.length > 0 && 
      <div>
          <h2>Personal Interests</h2>
          <p>{formData.personalInterests.join(', ')}</p>
          </div>
    }

        {/* <ul>
          {formData.personalInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
            </ul> */}
      </div>
      </div>
    );
  };
  

export default CombinationResumeTemplate