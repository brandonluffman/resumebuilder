import React, { useState } from 'react'
import Loading from './Loading'
import DropzoneInput from './DropzoneInput'
import Router from 'next/router';

const CoverLetter = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [analysisResults, setAnalysisResults] = useState([]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [generatedResult, setGeneratedResult] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
    
        if (file && jobDescription) {
            const formData = new FormData();
            formData.append('file', file);
    
            try {
                const resumeResponse = await fetch('https://resumeparser-irx7.onrender.com/extract-text/', {
                    method: 'POST',
                    body: formData,
                });
    
                if (resumeResponse.ok) {
                    const resumeData = await resumeResponse.json();
                    const resumeText = resumeData.text;

                    const prompt = `Given the following job description:\n${jobDescription}\n\nAnd the resume content:\n${resumeText}\n\nGenerate a tailored cover letter:`;

                    const gptResponse = await fetch("/api/gpt", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ prompt }),
                    });

                    if (gptResponse.ok) {
                        const gptData = await gptResponse.json();
                        setAnalysisResults(gptData.choices[0].text);
                    } else {
                        throw new Error(`Failed to generate cover letter: ${gptResponse.status} ${gptResponse.statusText}`);
                    }

                 } else {
                    throw new Error(`Failed to analyze resume: ${resumeResponse.status} ${resumeResponse.statusText}`);
                }

            } catch (error) {
                console.error('Error:', error);
                setAnalysisResults(null);
            }
            setIsLoading(false);
        }
    };

    const handleChange = (event) => {
        setJobDescription(event.target.value);
    };

    const handleOnDrop = (acceptedFiles) => {
        setFileName(acceptedFiles[0].path)
        setFile(acceptedFiles[0]);
      };

  return (
    <div>
        <h2>Generate Cover Letter</h2>
    <form onSubmit={handleSubmit} className='tailor-form'>
               <div className='tailor-form-container'>
                   <div className='tailor-resumedrop'>
                   <label htmlFor="jobDescription" className='tailor-resume-label'>Resume:</label>
                   <hr className='white-hr'></hr>
                       <DropzoneInput onDrop={handleOnDrop} accept="application/pdf" fileName={fileName} />
                   </div>
                   <div className='tailor-jobdescription-container'>
                       <label htmlFor="jobDescription" className='tailor-resume-label'>Job Description:</label>
                       <hr className='white-hr'></hr>
                       <textarea id="jobDescription" name="jobDescription" value={jobDescription} onChange={handleChange} placeholder='Paste the Job Description here....'></textarea>
                   </div>
               </div>
               <button className='btn btn-primary btn-margin tailor-btn' type="submit">Generate</button>
               <div id='loading'>
               {isLoading && <Loading />}
               <div className='cover-letter-analysis'>
               {analysisResults && <pre className='cover-letter-resume'>{analysisResults}</pre>}
               {/* {jobDescription && <p>{jobDescription}</p>} */}
               </div>
               </div>
           </form>
       </div>
  )
}

export default CoverLetter