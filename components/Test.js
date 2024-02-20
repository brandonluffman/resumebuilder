import React, { useState, useEffect, useRef } from 'react'
import DropzoneInput from './DropzoneInput'
import { CircularProgressbar } from 'react-circular-progressbar';
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
                    console.log(overallGrade)
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

    const sections = result && [
      {
          title: 'Contact Information',
          grade: 'A',
          items: [
              { name: `Phone Number`, status: result['Phone Number'] ? 'check': 'failed' },
              { name: `Email Address`, status: result['Email Address'] ? 'check': 'failed' },
              { name: `Address`, status: result['Address'] ? 'check' : 'failed' },
          ],
      },
      {
          title: 'Resume Sections',
          grade: 'A',
          items: Object.entries(result.Categories).map(([key, value]) => ({
              name: `${key} Section`,
              status: value ? 'check' : 'failed',
          })),
      },
      {
          title: 'Resume Quality',
          grade: 'A',
          items: [
              { name: 'Is One Page', status: result['Is One Page'] ? 'check' : 'failed' },
              { name: 'Avoids First Person Pronouns', status: result['Contains First Person Pronouns'] ? 'check': 'failed' },
              { name: 'Has Action Words', status: result['Has Action Words'] ? 'check' : 'failed' },
              { name: 'Accomplishments Quantified', status: result['Is Quantified'] ? 'check' : 'failed' },

          ],
      },
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
                  <CircularProgressbar value={overallGrade} text={overallGrade ? `${overallGrade}%`: '0'} />
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