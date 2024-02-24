import { useState } from 'react';
import DropzoneInput from './DropzoneInput';
import Loading from './Loading';
import ResumeTemplate from './ResumeTemplate';
import Router from 'next/router';



const Tailor = () => {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResults, setAnalysisResults] = useState([]);
  const [file, setFile] = useState(null);
  const [pdfText, setPdfText] = useState('');
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setJobDescription(event.target.value);
};


const handleSubmit = async (event) => {
  event.preventDefault();
  setIsLoading(true);
  Router.push("#loading")

  if (file && jobDescription) {
      const formData = new FormData();
      formData.append('file', file);

      try {
          const resumeResponse = await fetch('https://resumeparser-irx7.onrender.com/extract-text/', {
              method: 'POST',
              body: formData,
          });

          if (resumeResponse.ok) {

              const resumeText = await resumeResponse.text();

              const prompt = `Given my resume\n:${resumeText}\n\n and the following job description:\n${jobDescription}.\n\nProvide suggestions to tailor my resume.`;
              console.log(prompt)
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

  const handleOnDrop = (acceptedFiles) => {
    // console.log(acceptedFiles);
    // console.log(acceptedFiles[0].path)
    setFileName(acceptedFiles[0].path)
    setFile(acceptedFiles[0]);
  };

  return (
    <div>
      <h2>Tailor Your Resume</h2>
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
                    {/* <p>or</p>
                    <input type='text' placeholder='paste the link here...' /> */}
                </div>
            </div>
            <button className='btn btn-primary btn-margin tailor-btn' type="submit">Analyze</button>
            <div id='loading'>
            {isLoading && <Loading />}
            </div>
            </form>
            {analysisResults && (
              <div className='analysis-results-container'>
                <div className='analysis-results'>
                    <p>Analysis Results</p>
                    <pre>{analysisResults}</pre>
                  </div>
                </div>
            )}
            
    </div>
  );
};

export default Tailor;


{/* {analysisResults && Object.keys(analysisResults).length > 0 && (
              <div className='analysis-results-container'>
                <div className='analysis-results'>
                    <h3>Analysis Results</h3>
                    <div className='classic-flexer analysis-results-flexer'>
                    <div className='tailor-results-container'>
                        <h4>Job Description</h4>
                        <ul className='tailor-results-grid'>
                            {analysisResults.job_description_tfidf && Object.entries(analysisResults.job_description_tfidf).slice(0,20).map(([term, frequency], index) => (
                                // <li key={index}><b>{term}</b>: {frequency.toFixed(2)}</li>
                                <li key={index}><b>{term}</b></li>

                            ))}
                        </ul>
                    </div>
                    <div className='tailor-results-container'>
                        <h4>Resume</h4>
                        <ul className='tailor-results-grid'>
                            {analysisResults.resume_tfidf && Object.entries(analysisResults.resume_tfidf).slice(0,20).map(([term, frequency], index) => (
                                // <li key={index}><b>{term}</b>: {frequency.toFixed(2)}</li>
                                <li key={index}><b>{term}</b></li>

                            ))}
                        </ul>
                    </div>
                
                    </div>
                    <div className='tailor-results-container'>
                   <h4>Suggested Terms to Add to Your Resume:</h4>
                   <ul className='suggested-results-container'>
                       {analysisResults.suggested_terms_to_add && analysisResults.suggested_terms_to_add.map((term, index) => (
                           <li key={index}>{term}</li>
                       ))}
                   </ul>
                   </div>
                </div>
              
                   </div>
            )} */}
      {/* {analysisResults.length > 0 && (
        <div className="analysis-results">
          <h2>Suggestions</h2>
          <ul>
            {analysisResults.map((result, index) => (
              <li key={index}><strong>Suggestion {index + 1}:</strong> {result}</li>
            ))}
          </ul>
        </div>
      )}  */}
               {/* <div className='suggested-resume-container'>
            <h2>Suggested Resume</h2>
        <ResumeTemplate formData={formData} />
      </div> */}