import React, { useState } from 'react'
import { IoMdAdd, IoMdClose, IoMdInformation, IoMdInformationCircle } from 'react-icons/io';
import ResumeTemplate from './ResumeTemplate';
import Loading from './Loading';
import ChronologicalResumeTemplate from './ChronologicalResumeTemplate';
import FunctionalResumeTemplate from './FunctionalResumeTemplate';
import CombinationResumeTemplate from './CombinationResumeTemplate';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const BuildForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resumeReady, setResumeReady] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('chronological');
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('')
  const [newLink, setNewLink] = useState('');
  const [newCertification, setNewCertification] = useState({
    certTitle: '',
    certificationDonor: '',
    dateAwarded: ''
  });

  const [newEducation, setNewEducation] = useState({
    schoolName: '',
    major: '',
    degree: '',
    dates: ''
  });

  const [newWorkExperience, setNewWorkExperience] = useState({
    title: '',
    company: '',
    yearsOfEmployment: '',
    accomplishments: ''
  });
  
  
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     professionalSummary: '',

    //     links: [],
    //     cityState: '',
    //     workExperience: [{
    //       title: '',
    //       accomplishments: '',
    //       company: '',
    //       yearsOfEmployment: ''
    //     }],
    //     skills: [],
    //     education: [{
    //       schoolName: '',
    //       major: '',
    //       degree: '',
    //       dates: ''
    //     }],
    //     certifications: [{
    //       certTitle: '',
    //       certificationDonor: '',
    //       dateAwarded: ''
    //     }],
    //     personalInterests: [],
    //   });

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      professionalSummary: '',
      links: [],
      cityState: '',
      workExperience: [],
      skills: [],
      education: [],
      certifications: [],
      personalInterests: [],
      jobTitle: '',
    });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        // console.log(formData);
        setTimeout(() => {
          setIsLoading(false);
          // Handle the response or update the state with the results
        }, 2000);
        setResumeReady(true);

        // Submit the form data to your backend or API
      };


      const addSkill = () => {
        if (newSkill.trim() !== '') {
          setFormData({ ...formData, skills: [...formData.skills, newSkill] });
          setNewSkill('');
        }
      };

      const handleSkillChange = (index, value) => {
        const updatedSkills = formData.skills.map((skill, i) => i === index ? value : skill);
        setFormData({ ...formData, skills: updatedSkills });
      };

      const deleteSkill = (index) => {
        const filteredSkills = formData.skills.filter((skill, i) => i !== index);
        setFormData({ ...formData, skills: filteredSkills });
      };

      const addWorkExperience = () => {
        if (newWorkExperience.title || newWorkExperience.company || newWorkExperience.yearsOfEmployment || newWorkExperience.accomplishments) {
          setFormData({ ...formData, workExperience: [...formData.workExperience, newWorkExperience] });
          setNewWorkExperience({ title: '', company: '', yearsOfEmployment: '', accomplishments: '' });
        }
      };
      
      
      const updateWorkExperience = (index, key, value) => {
        const updatedWorkExperience = formData.workExperience.map((experience, i) => {
          if (i === index) {
            return { ...experience, [key]: value };
          }
          return experience;
        });
        setFormData({ ...formData, workExperience: updatedWorkExperience });
      };
      
      const deleteWorkExperience = (index) => {
        const filteredWorkExperience = formData.workExperience.filter((_, i) => i !== index);
        setFormData({ ...formData, workExperience: filteredWorkExperience });
      };

      const addEducation = () => {
        if (newEducation.schoolName || newEducation.major || newEducation.degree || newEducation.dates) {
          setFormData({ ...formData, education: [...formData.education, newEducation] });
          setNewEducation({ schoolName: '', major: '', degree: '', dates: '' });
        }
      };
      
      const updateEducation = (index, key, value) => {
        const updatedEducation = formData.education.map((edu, i) => {
          if (i === index) {
            return { ...edu, [key]: value };
          }
          return edu;
        });
        setFormData({ ...formData, education: updatedEducation });
      };
      
      const deleteEducation = (index) => {
        const filteredEducation = formData.education.filter((_, i) => i !== index);
        setFormData({ ...formData, education: filteredEducation });
      };

      const addCertification = () => {
        setFormData({ ...formData, certifications: [...formData.certifications, newCertification] });
        setNewCertification({ certTitle: '', certificationDonor: '', dateAwarded: '' });
      };
      
      const updateCertification = (index, key, value) => {
        const updatedCertifications = formData.certifications.map((cert, i) => {
          if (i === index) {
            return { ...cert, [key]: value };
          }
          return cert;
        });
        setFormData({ ...formData, certifications: updatedCertifications });
      };
      
      const deleteCertification = (index) => {
        const filteredCertifications = formData.certifications.filter((_, i) => i !== index);
        setFormData({ ...formData, certifications: filteredCertifications });
      };
      

      const addInterest = () => {
        setFormData({ ...formData, personalInterests: [...formData.personalInterests, newInterest] });
        setNewInterest('');
      };
      
      const handleInterestChange = (index, value) => {
        const updatedInterests = formData.personalInterests.map((interest, i) => i === index ? value : interest);
        setFormData({ ...formData, personalInterests: updatedInterests });
      };
      
      const deleteInterest = (index) => {
        const filteredInterests = formData.personalInterests.filter((_, i) => i !== index);
        setFormData({ ...formData, personalInterests: filteredInterests });
      };

      const addLink = () => {
        setFormData({ ...formData, links: [...formData.links, newLink] });
        setNewLink('');
      };
      
      const handleLinkChange = (index, value) => {
        const updatedLinks = formData.links.map((link, i) => i === index ? value : link);
        setFormData({ ...formData, links: updatedLinks });
      };
      
      const deleteLink = (index) => {
        const filteredLinks = formData.links.filter((_, i) => i !== index);
        setFormData({ ...formData, links: filteredLinks });
      };
      
      
      


  return (
    <>
    <form onSubmit={handleSubmit} className='build-form'   onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }}>

<label className='center-align format-label'>Select Resume Format <IoMdInformationCircle /></label>  

<div className="resume-type-selection">
  <input type="radio" id="functional" name="resumeType" value="functional" checked={selectedTemplate === 'functional'} onChange={(e) => setSelectedTemplate(e.target.value)} />
  <label htmlFor="functional">Functional</label>

  <input type="radio" id="chronological" name="resumeType" value="chronological" checked={selectedTemplate === 'chronological'} onChange={(e) => setSelectedTemplate(e.target.value)} />
  <label htmlFor="chronological">Chronological</label>

  <input type="radio" id="combination" name="resumeType" value="combination" checked={selectedTemplate === 'combination'} onChange={(e) => setSelectedTemplate(e.target.value)} />
  <label htmlFor="combination">Combination</label>
</div>

    <label htmlFor="name">Job Title</label>
    <input     type="text"     id="jobTitle"      name="jobTitle"      value={formData.jobTitle}      onChange={handleChange} required />

{ (selectedTemplate === 'chronological' || selectedTemplate === 'combination') && (
  <div>
    <label htmlFor="name">Professional Summary</label>
    <textarea type="text" id="professionalSummary" name="professionalSummary" value={formData.professionalSummary} onChange={handleChange} />
  </div>
)}


      <div className='build-form-contacts'>
        <div>
    <label htmlFor="name">Name</label>
    <input     type="text"     id="name"      name="name"      value={formData.name}      onChange={handleChange} required />
    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email"      value={formData.email}      onChange={handleChange} required/>
    </div>
    <div>
    <label htmlFor="phone">Phone</label>
    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
    </div>
    <div>
    <label htmlFor="cityState">Address (City & State)</label>
    <input type="text" id="cityState" name="cityState" value={formData.cityState} onChange={handleChange} />
    </div>
    </div>



  <div className='build-form-combine'>

    {/* Work Experience */}
    <div className='multi-input-container'>
  <div className='build-add-div'>
    <label>Work Experience</label>
    <button type="button" onClick={addWorkExperience} className='add-btn'><IoMdAdd /></button>
  </div>

  <div className='multi-input-div'>
    <input type="text" placeholder="Title" value={newWorkExperience.title} onChange={(e) => setNewWorkExperience({ ...newWorkExperience, title: e.target.value })} required />
    <input type="text" placeholder="Company" value={newWorkExperience.company} onChange={(e) => setNewWorkExperience({ ...newWorkExperience, company: e.target.value })} required />
    <input type="text" placeholder="Years of Employment" value={newWorkExperience.yearsOfEmployment} onChange={(e) => setNewWorkExperience({ ...newWorkExperience, yearsOfEmployment: e.target.value })} required />
    <textarea placeholder="Accomplishments" value={newWorkExperience.accomplishments} onChange={(e) => setNewWorkExperience({ ...newWorkExperience, accomplishments: e.target.value })} required />
  </div>

  {formData.workExperience.map((experience, index) => (
    (experience.title || experience.company || experience.yearsOfEmployment || experience.accomplishments) && (
      <div key={index} className='multi-input-div input-append-list'>
        <p>Title: <b>{experience.title}</b></p>
        <p>Company: <b>{experience.company}</b></p>
        <p>Years of Employment: <b>{experience.yearsOfEmployment}</b></p>
        <p>Accomplishments: <b>{experience.accomplishments}</b></p>
        <button className='build-close-btn' type="button" onClick={() => deleteWorkExperience(index)}><IoMdClose /></button>
      </div>
    )
  ))}
</div>
  
    {/* Education */}
    <div className='multi-input-container'>
      <div className='build-add-div'>
        <label>Education</label>
        <button type="button" onClick={addEducation} className='add-btn'><IoMdAdd /></button>
      </div>

      <div className='multi-input-div'>
        <input type="text" placeholder="School Name" value={newEducation.schoolName} onChange={(e) => setNewEducation({ ...newEducation, schoolName: e.target.value })} required />
        <input type="text" placeholder="Major" value={newEducation.major} onChange={(e) => setNewEducation({ ...newEducation, major: e.target.value })} required />
        <input type="text" placeholder="Degree" value={newEducation.degree} onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })} required />
        <input type="text" placeholder="Dates (e.g., 2018-2022)" value={newEducation.dates} onChange={(e) => setNewEducation({ ...newEducation, dates: e.target.value })} pattern="\d{4}-\d{4}" title="Please enter dates in the format YYYY-YYYY." required />
      </div>

      {formData.education.map((edu, index) => (
        (edu.schoolName || edu.major || edu.degree || edu.dates) && (
          <div key={index} className='multi-input-div input-append-list'>
            <p>School Name: <b>{edu.schoolName}</b></p>
            <p>Major: <b>{edu.major}</b></p>
            <p>Degree: <b>{edu.degree}</b></p>
            <p>Dates: <b>{edu.dates}</b></p>
            <button type="button" className='build-close-btn' onClick={() => deleteEducation(index)}><IoMdClose /></button>
          </div>
        )
      ))}
    </div>

    {/* Certifications */}

<div className='multi-input-container'>
  <div className='build-add-div'>
    <label>Certifications (optional)</label>
    <button type="button" onClick={addCertification} className='add-btn'><IoMdAdd /></button>
  </div>

  <div className='multi-input-div'>
    <input type="text" placeholder="Certification Title" value={newCertification.certTitle} onChange={(e) => setNewCertification({ ...newCertification, certTitle: e.target.value })} />
    <input type="text" placeholder="Certification Donor" value={newCertification.certificationDonor} onChange={(e) => setNewCertification({ ...newCertification, certificationDonor: e.target.value })} />
    <input type="text" placeholder="Date Awarded" value={newCertification.dateAwarded} onChange={(e) => setNewCertification({ ...newCertification, dateAwarded: e.target.value })} />
  </div>

  {formData.certifications.map((cert, index) => (
  (cert.certTitle || cert.certificationDonor || cert.dateAwarded) && (
    <div key={index} className='multi-input-div input-append-list'>
      <p>Certification Title: <b>{cert.certTitle}</b></p>
      <p>Certification Donor: <b>{cert.certificationDonor}</b></p>
      <p>Date Awarded: <b>{cert.dateAwarded}</b></p>
      <button type="button" className='build-close-btn' onClick={() => deleteCertification(index)}><IoMdClose /></button>
    </div>
  )
))}
</div>
</div>


<div className='build-form-combine'>

<div className='multi-input-container'>
    <label htmlFor="skills">Skills</label>
    <div className='build-add-div'>
    <input type="text" name="newSkill"      value={newSkill}    onChange={(e) => setNewSkill(e.target.value)}  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill(); } }} required />
    <button type="button" onClick={addSkill} className='add-btn'><IoMdAdd /></button>
  </div>

  {formData.skills.map((skill, index) => (
    <div key={index} className='flexer multi-input-div input-append-list'>
      <p>{skill}</p>
      <button className='button build-close-btn' type="button" onClick={() => deleteSkill(index)}><IoMdClose /></button>
    </div>
  ))}
</div>
  
<div className='multi-input-container'>
    <label htmlFor="personalInterests">Personal Interests (optional)</label>
    <div className='build-add-div'>
    <input type="text" value={newInterest} onChange={(e) => setNewInterest(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addInterest(); } }} />
    <button type="button" onClick={addInterest} className='add-btn'><IoMdAdd /></button>
  </div>

  {formData.personalInterests.map((interest, index) => (
    <div key={index} className='flexer multi-input-div input-append-list'>
      <p>{interest}</p>
      <button className='button build-close-btn' type="button" onClick={() => deleteInterest(index)}><IoMdClose /></button>
    </div>
  ))}
</div>


<div className='multi-input-container'>
    <label htmlFor="links">Links (optional)</label>
    <div className='build-add-div'>
    <input type="text" value={newLink} onChange={(e) => setNewLink(e.target.value)}  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addLink(); } }} />
    <button type="button" onClick={addLink} className='add-btn add-btn-bg'><IoMdAdd /></button>
  </div>

  {formData.links.map((link, index) => (
    <div key={index} className='flexer multi-input-div input-append-list'>
      <p>{link}</p>
      <button className='button build-close-btn' type="button" onClick={() => deleteLink(index)}><IoMdClose /></button>
    </div>
  ))}
</div>

</div>


    <button className='btn btn-primary btn-margin submit-btn' type="submit">Build</button>
  </form>

  {isLoading && <Loading />}

{/* {resumeReady && !isLoading &&  <ResumeTemplate formData={formData} />} */}
  {resumeReady && !isLoading && (
    <>
      {selectedTemplate === 'functional' && <FunctionalResumeTemplate formData={formData} setFormData={setFormData} />}
      {selectedTemplate === 'chronological' && <ChronologicalResumeTemplate formData={formData} />}
      {selectedTemplate === 'combination' && <CombinationResumeTemplate formData={formData} />}
    </>
  )}
</>
  )
}

export default BuildForm