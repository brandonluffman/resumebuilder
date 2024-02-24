import React, { useState, useEffect, useRef } from 'react'
import DropzoneInput from './DropzoneInput'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Don't forget to import the styles
// import sections from '../public/sections.js'; // Adjust the path according to your file structure
import { AiFillCheckCircle, AiOutlineClose, AiTwotoneLock } from 'react-icons/ai';
import { MdPending } from 'react-icons/md';
import Loading from './Loading';
import Router from 'next/router';
const Test = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [overallGrade, setOverallGrade] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('')
    const myAnchorRef = useRef(null);
    const loadingRef = useRef(null);

    // useEffect(() => {
    //     if (overallGrade != 0 && myAnchorRef.current) {
    //       myAnchorRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }, [overallGrade]);

    const handleOnDrop = (acceptedFiles) => {
        setFileName(acceptedFiles[0].path)
        setFile(acceptedFiles[0]);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (file) {
            const fileType = file.type;
            if (fileType !== 'application/pdf') {
                alert('Please submit a file in PDF format.');
                return;
            }
            setIsLoading(true);
            Router.push("#loading")
            const formData = new FormData();
            formData.append('file', file);


            try {
                const response = await fetch('https://resumeparser-irx7.onrender.com/parse-resume/', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setResult(data);
                    setIsLoading(false);
                    console.log(data)
                    setOverallGrade(data["Resume Grade"] * 100)
                    console.log(data["Resume Grade"] * 100)
                    setFile(null);
                    setFileName('');
                } else {
                    throw new Error('Failed to parse resume');
                }
            } catch (error) {
                console.error(error);
                setResult(null);
                setIsLoading(false);
            }
        }
    };

    const getColor = (grade) => {
      if (grade >= 66.67) {
        return 'green';
      } else if (grade >= 33.33) {
        return 'orange';
      } else {
        return 'red';
      }
    };

    const sections = result && [
        {
          title: 'Contact Information',
          grade: 'A',
          items: [
            {
              name: 'Phone Number',
              status: result['Phone Number'] ? 'check' : 'failed',
              message: result['Phone Number'] ? 'Great! Having a phone number makes it easy for employers to contact you.' : 'Missing phone number. Make sure to include it so employers can easily reach out to you.'
            },
            {
              name: 'Email Address',
              status: result['Email Address'] ? 'check' : 'failed',
              message: result['Email Address'] ? 'Awesome! A professional email address is crucial for communication.' : 'Missing email address. It\'s important to have a professional email for potential employers to contact you.'
            },
            {
              name: 'Address',
              status: result['Address'] ? 'check' : 'failed',
              message: result['Address'] ? 'Good job! Including your address helps employers know your location.' : 'No address found. Consider adding it to help employers understand your proximity to the job location.'
            }
          ],
        },
        {
          title: 'Resume Sections',
          grade: 'A',
          items: Object.entries(result.Categories).map(([key, value]) => ({
            name: `${key} Section`,
            status: value ? 'check' : 'failed',
            message: value ? `Nice! Having a ${key} section adds structure to your resume.` : `Missing ${key} section. Consider adding it to highlight your ${key.toLowerCase()} in your resume.`
          })),
        },
        {
          title: 'Resume Quality',
          grade: 'A',
          items: [
            {
              name: 'Is One Page',
              status: result['Is One Page'] ? 'check' : 'failed',
              message: result['Is One Page'] ? 'Excellent! A one-page resume is concise and keeps the reader\'s attention.' : 'Your resume is more than one page. Try to condense it to make it more impactful.'
            },
            {
              name: 'Avoids First Person Pronouns',
              status: result['Contains First Person Pronouns'] ? 'check' : 'failed',
              message: result['Contains First Person Pronouns'] ? 'Well done! Avoiding first-person pronouns keeps your resume professional.' : 'Try to avoid first-person pronouns to maintain a professional tone.'
            },
            {
              name: 'Has Action Words',
              status: result['Has Action Words'] ? 'check' : 'failed',
              message: result['Has Action Words'] ? 'Fantastic! Using action words makes your accomplishments stand out.' : 'Lacking action words. Consider using them to highlight your achievements more effectively.'
            },
            {
              name: 'Accomplishments Quantified',
              status: result['Is Quantified'] ? 'check' : 'failed',
              message: result['Is Quantified'] ? 'Great! Quantifying accomplishments provides clear evidence of your impact.' : 'Your accomplishments are not quantified. Try to include numbers to demonstrate your achievements.'
            }
          ],
        },
        {
          title: 'Crucial Details',
          grade: 'A',
          items: [
            {
              name: 'PDF Format',
              status: 'check',
              message: 'Great! PDF is the best format to use for resumes and ensures that all hiring managers have the ability to view.'
            },
            {
              name: 'Formatting Consistency',
              status: 'check',
              message: 'Well done! The font sizes and margins are consistent across the page and meet industry standards.'
            },
            {
              name: 'Grammar/Mispellings',
              status: 'check',
              message: 'Fantastic! Your resume is free of any grammar mistakes or mispellings.'
            },
            {
              name: 'Professional Email Address',
              status: 'check',
              message: 'Bravo! The email address displayed in the resume is professional.'
            }
          ],
        }
      ];
      

  return (
    <div className='test-container'>
            <h1 className='test-header'>Test your Resume</h1>
            <div className='test-resumedrop'>
            <DropzoneInput onDrop={handleOnDrop} accept="image/*" fileName={fileName} />
            </div>
            <button onClick={handleSubmit} className='btn btn-primary test-btn submit-btn'>Test</button>
            <div id='loading'>
            {isLoading && <Loading ref={loadingRef} />}
            </div>
            {result && (
              <div>
              <div ref={myAnchorRef} className='test-grade-div'>
                  <h2 className='test-extract-header'>Overall Grade</h2>
                  <CircularProgressbar
                      value={overallGrade.toFixed(0)}
                      text={`${overallGrade ? overallGrade.toFixed(0) : '0'}%`}
                      styles={buildStyles({
                        pathColor: getColor(overallGrade),
                        textColor: getColor(overallGrade),
                      })}
                    />
                    </div>
              

              <div className='grade-main-container'>
                  {sections.map((section, index) => (
                      <div key={index} className='grade-container-item'>
                      <div className='grade-header-container'>
                          <h6>{section.title}</h6>
                          {/* <span className={`grade-header gold ${section.grade.toLowerCase()}`}>{section.grade}</span> */}
                      </div>
                      <ul>
                          {section.items.map((item, idx) => (
                          <li key={idx} className={`grade-item ${item.status === 'lock' ? 'locked-grade-item' : ''}`}>
                              <div className='grid-item-flexer'>
                              {item.name}
                              {item.status === 'check' && <AiFillCheckCircle className='grade-check-icon' />}
                              {item.status === 'failed' && <AiOutlineClose className='grade-check-icon failed-icon' />}
                              {item.status === 'pending' && <MdPending className='grade-check-icon pending' />}
                              {item.status === 'lock' && <AiTwotoneLock className='grade-check-icon lock-icon' />}
                              </div>
                              <span className='resume-includes'>{item.message}</span>
                          </li>
                          ))}
                      </ul>
                      </div>
                  ))}
                  </div>
                </div>
                )}

    </div>
  )
}

export default Test