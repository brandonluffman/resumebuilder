import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { BsFilePdf, BsFilePdfFill } from 'react-icons/bs';
import { AiFillFilePdf } from 'react-icons/ai';
import { IoMdDownload } from 'react-icons/io';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const ChronologicalResumeTemplate = ({ formData }) => {

  // const downloadResumeAsPDF = () => {
  //   const resumeElement = document.getElementById('resume');

  //   const opt = {
  //     margin:       1,
  //     filename:     'resume.pdf',
  //     image:        { type: 'jpeg', quality: 0.98 },
  //     html2canvas:  { scale: 2 },
  //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };

  //   html2pdf().from(resumeElement).set(opt).save();
  // };

  // const downloadResumeAsPDF = () => {
  //   const resumeElement = document.getElementById('resume');
  //   const content = resumeElement.innerText; // Get the text content of the resume

  //   const docDefinition = {
  //     content: [
  //       {
  //         text: content,
  //         style: 'header'
  //       }
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 18,
  //         bold: true
  //       }
  //     }
  //   };

  //   pdfMake.createPdf(docDefinition).download('resume.pdf');
  // };

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

        <div className="resume" id='resume'>
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
        
          <h2>Work Experience</h2>
          {formData.workExperience.map((experience, index) => (
            <div key={index} className="work-experience">
              <h3>{experience.title}</h3>
              <div className='work-flexer'>
              <p className='work-company'>{experience.company}</p>
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
            <div key={index} className="education">
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
    
          <h2>Skills</h2>
          <p>{formData.skills.join(', ')}</p>

          {/* <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul> */}
    
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
          {/* {formData.personalInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))} */}

        </div>
        </div>
      );
}

export default ChronologicalResumeTemplate

                {/* <li>Led the development and implementation of a responsive web application using React and Node.js, resulting in a 30% increase in user engagement and a 20% reduction in page load times.</li>
                <li>Designed and maintained a RESTful API using Python and Flask, ensuring seamless data integration and scalability for a growing user base of over 50,000.</li>
                <li>Collaborated with cross-functional teams to implement agile methodologies, improving project delivery times by 25% and enhancing team productivity and communication.</li> */}