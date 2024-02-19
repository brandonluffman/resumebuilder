import React, { useEffect } from 'react';
// import QuillEditor from './QuillEditor';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { BsDownload, BsFilePdf } from 'react-icons/bs';


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
      <div id='resume' className="resume functional">
        <h1>{formData.name}</h1>
        <p className='resume-contact-info'>{formData.email} | {formData.phone}</p>

       {/* <h2>Professional Summary</h2>
      <QuillEditor
        content={formData.professionalSummary}
        setContent={handleContentChange}
      /> */}
  
        <h2>Skills</h2>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
  
        <h2>Professional Experience</h2>
        {formData.workExperience.map((experience, index) => (
          <div key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.company} | {experience.yearsOfEmployment}</p>
            <p>{experience.accomplishments}</p>
          </div>
        ))}
  
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.schoolName}</h3>
            <p>{edu.degree} in {edu.major} | {edu.dates}</p>
          </div>
        ))}
  
        <h2>Certifications</h2>
        {formData.certifications.map((cert, index) => (
          <div key={index}>
            <h3>{cert.certTitle}</h3>
            <p>{cert.certificationDonor} | {cert.dateAwarded}</p>
          </div>
        ))}
  
        <h2>Personal Interests</h2>
        <p>{formData.personalInterests}</p>
</div>
<button onClick={downloadResumeAsPDF} className='btn-margin'><BsDownload /></button>

      </div>
    );
  };
  

export default FunctionalResumeTemplate