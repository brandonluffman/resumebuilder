import { useState } from 'react';
import { BsCloudArrowUp } from 'react-icons/bs';
import DropzoneInput from './DropzoneInput';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai';
import { MdPending } from 'react-icons/md'
export default function InputResume() {
  const [file, setFile] = useState(null);
  const [pdfText, setPdfText] = useState('');
  const [fileName, setFileName] = useState('');
  const [resumeGrade, setResumeGrade] = useState('');
  const [segmentText, setSegmentText] = useState({});
  const [detectedCategories, setDetectedCategories] = useState({});
  const [quantify, setQuantify] = useState('');
  const [action, setAction] = useState('');
  const [threequarters, setThreeQuarters] = useState('');
  const [bulletcheck, setBulletCheck] = useState([]);
  const [pagecount, setPageCount] = useState(0);
  const [constistency, setConsistency] = useState('');
  const [grammar, setGrammar] = useState('');
  const [firstPerson, setFirstPerson] = useState('');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const longestLineLength = Math.max(...pdfText.split('\n').map(line => line.length));                                                                                 

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      // Use Heroku URL here:
      // const response = await fetch('https://resumeparserofficial-03af5455fec2.herokuapp.com/convert-pdf-to-text/', {
      //   method: 'POST',
      //   body: formData,
      // });
      const response = await fetch('http://127.0.0.1:8000/convert-pdf-to-text/', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        setPdfText(data.pdf_text);
        setSegmentText(data.segments);
        setResumeGrade(data.grade);
        setDetectedCategories(data.detected_categories);
        setQuantify(data.quantify);
        setAction(data.action);
        setThreeQuarters(data.threequarters);
        setBulletCheck(data.bulletcheck);
        setPageCount(data.pagecount)
        setConsistency(data.constistency)
        setGrammar(data.grammar)
        setFirstPerson(data.first_person)

      } else {
          console.error('Error:', response.statusText);
      }
    }
  };

  const handleOnDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    console.log(acceptedFiles[0].path)
    setFileName(acceptedFiles[0].path)
    setFile(acceptedFiles[0]);
  };
  let percentage = (resumeGrade * 100).toFixed(0); // Convert the resumeGrade to percentage



  return (
    <div className='input-resume-container'>
                  <DropzoneInput onDrop={handleOnDrop} accept="image/*" />
                  <button onClick={handleSubmit} className='test-btn-pdf'>Test</button>
                  {fileName ? ( <div className='filename-div'>{fileName}</div>):(<div className='filename-div no-file-div' >No File Selected</div>)}
      <div className='test-extract-container'>
      {/* {segmentText && Object.keys(segmentText).length > 0 && (
        <div className='test-extract-div test-segment-div'>
          <h6 className='test-extract-header'>Segmented Text</h6>
          {Object.entries(segmentText).map(([header, content], idx) => (
            <div className='segment-div' key={idx}>
              <h6>{header}</h6>
              {content ? ( <p>{content}</p>):(<p className='no-content-p'>Nothing Found</p>)}
            </div>
          ))}
        </div>
      )} */}
      {resumeGrade && (
      <div className='test-grade-div'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        {/* <h4 className='test-grade-header'>{(resumeGrade * 100).toFixed(0)}%</h4> */}
        </div>
         )}
         </div>
         <div className='detected-categories-container'>
            <h2 className='detected-categories-header'>Resume Report</h2>
            <ul>
                {/* {Object.entries(detectedCategories).map(([category, isDetected], idx) => (
                    <li key={idx} className={isDetected ? 'detected' : 'not-detected'}>
                        {category} {isDetected ? '✅' : '❌'}
                    </li>
                ))} */}
            </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'><h6>Sections</h6><span className='grade-header'>{percentage}%</span></div>
          
            {detectedCategories ? (
                Object.entries(detectedCategories).map(([category, isDetected], idx) => (
                  <ul key={idx}>
                  {isDetected ? (
                  <li className= 'grade-item'>
                      <div className='grid-item-flexer'> {category} <AiFillCheckCircle className='grade-check-icon' /> </div>
                      <span className='resume-includes'>Resume Includes a {category} section, nice !</span>
                  </li>
                  ):(
                    <li className= 'grade-item'>
                    <div className='grid-item-flexer'> {category} <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div>
                    <span className='resume-includes'>Our Resume Parser did not find a {category} section within your resume. An {category} section is critical to maximizing employment opportunities.</span>
                </li>
                  )}
                  </ul>
                ))
            ):(
              <ul>
              <li className='grade-item'>Experience First <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Dates Ordered Chronologically <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Name <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Email <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Phone Number <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Address <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Summary <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Experience <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Education <AiFillCheckCircle className='grade-check-icon' /></li>
              <li className='grade-item'>Skills <AiFillCheckCircle className='grade-check-icon' /></li>
              </ul>
            )}
        </div>
        <div className='grade-container-item'>
        <div className='grade-header-container'><h6>Impact</h6><span className='grade-header'>A+</span></div>
            <ul>
            {quantify ? (<li className='grade-item'><div className='grid-item-flexer'>Quantify Impact<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume has been quantified , perfect !</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Quantify Impact <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume seems to be missing key text signifiying your accomplishments through the use of numbers and percentages. It&apos;s important to quantify yuor experience to emphasize what has been done in an efficient to read manner for hiring managers.</span></li>)}
            {action ? (<li className='grade-item'><div className='grid-item-flexer'>Unique Action Words<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume includes Unique Action Words, nice!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Unique Action Words <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>No Action words have been found. Often referred to as <q>power verbs</q>, Action words are crucial to a resume because they convey a proactive stance and demonstrate achievements and responsibilities. They help recruiters visualize the candidate&apos;s contributions and impact, making the resume more dynamic and compelling.</span></li>)}
            {/* <li className='grade-item'>Accomplishment Oriented Language **PENDING <MdPending className='grade-check-icon pending' /></li> */}
            </ul>
        </div>
        <div className='grade-container-item'>
        <div className='grade-header-container'><h6>Brevity</h6><span className='grade-header'>A+</span></div>
            <ul>
            {threequarters ? (<li className='grade-item'><div className='grid-item-flexer'>Resume Length<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume length is up to par!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Resume Length <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume is too short, try adding some content to your resume to ensure it is of appropriate length. Aim for 3/4 of a page.</span></li>)}
            {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Use of Bullets<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume contains bullet points, perfect! This allows ATS to properly scan your resume.</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Use of Bullets <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume does not contain bullet points. Bullet points allow for ATS to easily parse through your resume.</span></li>)}
            {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Total Bullet Points <AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>You have *INPUT BULLET SUM* bullet points, that is ideal!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Total Bullet Points <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Our resume parser only detected ***NUM BULLETS**** , the ideal amount of bullets per header is 3 to 5.</span></li>)}
            {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Bullet Point Length<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>The length of your bulleted text is superb!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Bullet Point Length <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>The length of your bulleted text is too **short/long****. Ensure that bulleted text only spans 2 lines or sentences as a rule of thumb.</span></li>)}
            {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Filler Word Analysis<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume is FREE of common filler (<q>fluff</q>) words that can ruin a resume. </span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Filler Word Analysis <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume CONTAINS common filler (<q>fluff</q>) words that can ruin a resume. *****INSERT FILLER WORDS *****8</span></li>)}
            {pagecount ? (<li className='grade-item'><div className='grid-item-flexer'>One Page<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume consists of a single page, that is terrific. </span></li>):(<li className='grade-item'><div className='grid-item-flexer'>One Page <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your attachment has **NUM FILES** files, it should only be one page.</span></li>)}
            </ul>
        </div>
        <div className='grade-container-item'>
        <div className='grade-header-container'><h6>Styles
            </h6><span className='grade-header'>A+</span></div>
            <ul>
                {/* <li className='grade-item'>Buzzwords or Cliches **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Readability **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Dates **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Active Voice analysis **PENDING <MdPending className='grade-check-icon pending' /></li> */}
                {constistency ? (<li className='grade-item'>Inconsistencies<AiFillCheckCircle className='grade-check-icon' /> <span className='resume-includes'>Our parser determined that the layout of your resume is consistent. This is ideal for ATS because it allows it to parse the information accurately since many use font characteristics as a method to extract.</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Inconsistencies <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Our parser determined that the layout of your resume is inconsistent. Having a consistent font size and color scheme for headers, bulleted text, dates, etc for ATS is preferred because it allows it to parse the information accurately since many use font characteristics as a method to extract.</span></li>)}
            </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'><h6>Crucial Details</h6><span className='grade-header'>A+</span></div>
            <ul>
                {grammar ? (<li className='grade-item'><div className='grid-item-flexer'>Grammar/Mispellings<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume has gone through our Grammar Check and has passed!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Grammar <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume has gone through our Grammar Check and has failed. ***INSERT MISTAKES****</span></li>)}
                {/* <li>Mispellings <AiFillCheckCircle className='grade-check-icon' /></li> */}
                {/* <li className='grade-item'>Consistent Tense **PENDING <MdPending className='grade-check-icon pending' /></li> */}
                {firstPerson ? (<li className='grade-item'><div className='grid-item-flexer'>Avoid First Person Pronouns<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume is free of first person pronouns such as I, We, Mine... Nice!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Avoid First Person Pronouns <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume includes first person pronouns such as I, We, Mine. This is a common mistake for many resumes and is generally avoided by professionals.</span></li>)}
                {/* <li className='grade-item'>PDF/Docx File Type <AiFillCheckCircle className='grade-check-icon' /></li>
                <li className='grade-item'>Correct Filename **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Remove References **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Professional Email **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Hard & Soft Skills **PENDING <MdPending className='grade-check-icon pending' /></li> */}

            </ul>
        </div>
           {/* {pdfText ? (
            <div className='test-extract-div test-extracted-div'>
                <h6 className='test-extract-header'>ATS Score</h6>
                {longestLineLength > 100 ? 
                    <pre>{pdfText}</pre> :
                    <pre>{pdfText}</pre>
                }
            </div>
        ):(
          <div className='test-extract-div no-extract'>None Yet </div>
        )} */}
        
    </div>
  );
}
