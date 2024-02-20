import React, { useEffect } from 'react';
// import QuillEditor from './QuillEditor';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { BsDownload, BsFilePdf } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';


const FunctionalResumeTemplate = ({ formData, setFormData }) => {

  const handleContentChange = (newContent) => {
    setFormData({ ...formData, professionalSummary: newContent });
  };

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

      <div id='resume' className="resume functional">
        <h1>{formData.name}</h1>
        <h1>{formData.jobTitle}</h1>
        <div className='resume-contact-container'>
          <p className='resume-contact-info'>{formData.email}</p>
          |
           <p>{formData.phone}</p>
           |
           <p>{formData.cityState}</p>
          </div>

       {/* <h2>Professional Summary</h2>
      <QuillEditor
        content={formData.professionalSummary}
        setContent={handleContentChange}
      /> */}
  
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
              <p>{experience.yearsOfEmployment}</p>
              </div>
            {/* <p>{experience.accomplishments}</p> */}
            <ul className='accomplishments-list'>
                <li>Led the development and implementation of a responsive web application using React and Node.js, resulting in a 30% increase in user engagement and a 20% reduction in page load times.</li>
                <li>Designed and maintained a RESTful API using Python and Flask, ensuring seamless data integration and scalability for a growing user base of over 50,000.</li>
                <li>Collaborated with cross-functional teams to implement agile methodologies, improving project delivery times by 25% and enhancing team productivity and communication.</li>
              </ul>
          </div>
        ))}
  
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.schoolName}</h3>
            <div className='work-flexer'>
              <p>{edu.degree} | {edu.major}</p>
              <p>{edu.dates}</p>
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
      </div>
      </div>
    );
  };
  

export default FunctionalResumeTemplate