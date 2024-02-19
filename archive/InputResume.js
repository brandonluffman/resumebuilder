import { useState, useEffect } from 'react';
import { BsCloudArrowUp } from 'react-icons/bs';
import DropzoneInput from './DropzoneInput';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRef } from 'react';
import Loader from "react-loader-spinner"; 
import { AiFillCheckCircle, AiOutlineClose, AiTwotoneLock } from 'react-icons/ai';
import { MdPending } from 'react-icons/md';
import Link from 'next/link';

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
  const [isLoading, setIsLoading] = useState(false);
  const [overallGrade, setOverallGrade] = useState('');
  const [experienceFirst, setExperienceFirst] = useState('');
  const user = false;
  const myAnchorRef = useRef(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const longestLineLength = Math.max(...pdfText.split('\n').map(line => line.length));                                                                                 

  const handleSubmit = async () => {
    if (file) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      console.log(formData)
      setIsLoading(false);

      setResumeGrade(90.29)
      setOverallGrade(90.29)
      // const response = await fetch('https://resumeparserofficial-03af5455fec2.herokuapp.com/convert-pdf-to-text/', {
      //   method: 'POST',
      //   body: formData,
      // });
  
      // if (response.ok) {
      //   const data = await response.json();
      //   setPdfText(data.pdf_text);
      //   setSegmentText(data.segments);
      //   setResumeGrade(data.grade);
      //   setDetectedCategories(data.detected_categories);
      //   setQuantify(data.quantify);
      //   setAction(data.action);
      //   setThreeQuarters(data.threequarters);
      //   setBulletCheck(data.bulletcheck);
      //   setPageCount(data.pagecount)
      //   setConsistency(data.constistency)
      //   setGrammar(data.grammar)
      //   setFirstPerson(data.first_person)
      //   setOverallGrade(data.overallgrade);
      //   setExperienceFirst(data.is_experience_first)
      //   setIsLoading(false);
      // } else {
      //     console.error('Error:', response.statusText);
      // }
    }
  };


  const handleOnDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    console.log(acceptedFiles[0].path)
    setFileName(acceptedFiles[0].path)
    setFile(acceptedFiles[0]);
  };
  let percentage = (resumeGrade * 100).toFixed(0); // Convert the resumeGrade to percentage

  useEffect(() => {
    if (resumeGrade && myAnchorRef.current) {
      myAnchorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [resumeGrade]);

  const truthyCountBrevity = threequarters + bulletcheck + pagecount;
  const truthyImpact = quantify + action;
  const truthyStyles = constistency;
  const truthyDetails = grammar + firstPerson;
  
  let gradeBrevity;
  switch (truthyCountBrevity) {
    case 1:
      gradeBrevity = "F";
      break;
    case 2:
      gradeBrevity = "C";
      break;
    case 3:
      gradeBrevity = "A";
      break;
    default:
      gradeBrevity = "F";
  }
  
  let gradeImpact;
  switch (truthyImpact) {
    case 0:
      gradeImpact = "F";
      break;
    case 1:
      gradeImpact = "C";
      break;
    case 2:
      gradeImpact = "A";
      break;
    default:
      gradeImpact = "F";
  }
  
  let gradeStyles;
  switch (truthyStyles) {
    case 1:
      gradeStyles = "A";
      break;
    default:
      gradeStyles = "F";
  }
  
  let gradeDetails;
  switch (truthyDetails) {
    case 1:
      gradeDetails = "C";
      break;
    case 2:
      gradeDetails = "A";
      break;
    default:
      gradeDetails = "F";
  }
  return (
    <div className='input-resume-top-container'>
    {isLoading ? (
      <div className="loading-splash">
      <span class="loader"></span>

      </div>
        ) : (
    <div className='input-resume-container'>
      <h1 className='test-header'>Test your Resume</h1>
      <div className='input-resume-drop'>
      <DropzoneInput onDrop={handleOnDrop} accept="image/*" fileName={fileName} />
      <button onClick={handleSubmit} className='btn btn-primary test-btn submit-btn'>Test</button>
     
      {/* {fileName ? ( <div className='filename-div'>{fileName}</div>):(<div className='no-file-div' >* No File Selected</div>)} */}
      </div>
      <div className={resumeGrade ? 'input-resume-grade-container' : 'none'}>
      <h2 className='test-extract-header'>Overall Grade</h2>

        {resumeGrade && (
          <div className='test-grade-div'>
            <CircularProgressbar value={overallGrade} text={overallGrade ? `${overallGrade.toFixed(2)}%`: '0'} />
          </div>
          )}

        <div className='grade-container-item'>

          <div className='grade-header-container'>
              <h6>Sections</h6>
              <span className='grade-header gold gold-glisten-animation'>A</span>
          </div>
          {Object.keys(detectedCategories).length > 0 ? (
              <ul>
                  {Object.entries(detectedCategories).map(([category, isDetected], idx) => (
                      isDetected ? (
                          <li className='grade-item' key={idx}>
                              <div className='grid-item-flexer'> 
                                  {category} 
                                  <AiFillCheckCircle className='grade-check-icon' />
                              </div>
                              <span className='resume-includes'>Resume Includes a {category} section, nice!</span>
                          </li>
                      ) : (
                          <li className='grade-item' key={idx}>
                              <div className='grid-item-flexer'>
                                  {category} 
                                  <AiOutlineClose className='grade-check-icon grade-check-red-icon' />
                              </div>
                              <span className='resume-includes'>Our Resume Parser did not find a {category} section within your resume. A {category} section is critical to maximizing employment opportunities.</span>
                          </li>
                      )
                  ))}
              </ul>
            ) : (
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
          <div className='grade-header-container'><h6>Impact</h6><span className={gradeImpact === 'A' ? 'grade-header gold' : (gradeImpact === 'C' ? 'grade-header silver' : 'grade-header')}>{gradeImpact}</span></div>
              <ul>
              {quantify ? (<li className='grade-item'><div className='grid-item-flexer'>Quantify Impact<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume has been quantified , perfect !</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Quantify Impact <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume seems to be missing key text signifiying your accomplishments through the use of numbers and percentages. It&apos;s important to quantify yuor experience to emphasize what has been done in an efficient to read manner for hiring managers.</span></li>)}
              {action ? (<li className='grade-item'><div className='grid-item-flexer'>Unique Action Words<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume includes Unique Action Words, nice!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Unique Action Words <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>No Action words have been found. Often referred to as <q>power verbs</q>, Action words are crucial to a resume because they convey a proactive stance and demonstrate achievements and responsibilities. They help recruiters visualize the candidate&apos;s contributions and impact, making the resume more dynamic and compelling.</span></li>)}
              <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Keyword Optimization<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes locked-includes'></span></li>
              <li className='grade-item'>Accomplishment Oriented Language **PENDING <MdPending className='grade-check-icon pending' /></li>
              </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'><h6>Brevity</h6><span className={gradeBrevity === 'A' ? 'grade-header gold' : (gradeBrevity === 'C' ? 'grade-header silver' : 'grade-header')}>{gradeBrevity}</span></div>
              <ul>
              {threequarters ? (<li className='grade-item'><div className='grid-item-flexer'>Resume Length<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume length is up to par!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Resume Length <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume is too short, try adding some content to your resume to ensure it is of appropriate length. Aim for 3/4 of a page.</span></li>)}
              {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Use of Bullets<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume contains bullet points, perfect! This allows ATS to properly scan your resume.</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Use of Bullets <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume does not contain bullet points. Bullet points allow for ATS to easily parse through your resume.</span></li>)}
              {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Total Bullet Points <AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>You have between 3-5 bullet points per header, that is ideal!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Total Bullet Points <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Our resume parser did not detect enough bullet points , the ideal amount of bullets per header is 3 to 5.</span></li>)}
              {bulletcheck ? (<li className='grade-item'><div className='grid-item-flexer'>Bullet Point Length<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>The length of your bulleted text is superb!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Bullet Point Length <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>The length of your bulleted text is inadequate for a resume. Ensure that bulleted text spans 2 lines or sentences as a rule of thumb.</span></li>)}
              {bulletcheck ? (<li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Filler Word Analysis<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'>Your resume is FREE of common filler (<q>fluff</q>) words that can ruin a resume. </span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Filler Word Analysis <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume CONTAINS common filler (<q>fluff</q>) words that can ruin a resume. *****INSERT FILLER WORDS *****8</span></li>)}
              {bulletcheck ? (<li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Filler Word Analysis<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Filler Word Analysis <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'></span></li>)}
              {pagecount ? (<li className='grade-item'><div className='grid-item-flexer'>One Page<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume consists of a single page, that is terrific. </span></li>):(<li className='grade-item'><div className='grid-item-flexer'>One Page <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your attachment has too many files, it should only be one page.</span></li>)}

              </ul>
        </div>
        <div className='grade-container-item'>
          <div className='grade-header-container'><h6>Styles</h6><span className={gradeStyles === 'A' ? 'grade-header gold' : (gradeStyles === 'C' ? 'grade-header silver' : 'grade-header')}>{gradeStyles}</span></div>
            <ul>
                <li className='grade-item'>Buzzwords or Cliches **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Readability **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Dates **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Active Voice analysis **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Readability<AiTwotoneLock className='grade-check-icon lock-icon' /></div> </li><span className='resume-includes locked-includes'></span>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Dates<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Active Word Analysis<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                {constistency ? (<li className='grade-item'>Inconsistencies<AiFillCheckCircle className='grade-check-icon' /> <span className='resume-includes'>Our parser determined that the layout of your resume is consistent. This is ideal for ATS because it allows it to parse the information accurately since many use font characteristics as a method to extract.</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Inconsistencies <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Our parser determined that the layout of your resume is inconsistent. Having a consistent font size and color scheme for headers, bulleted text, dates, etc for ATS is preferred because it allows it to parse the information accurately since many use font characteristics as a method to extract.</span></li>)}
            </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'><h6>Crucial Details</h6><span className={gradeDetails === 'A' ? 'grade-header gold' : (gradeDetails === 'C' ? 'grade-header silver' : 'grade-header')}>{gradeDetails}</span></div>
            <ul>
                {grammar ? (<li className='grade-item'><div className='grid-item-flexer'>Grammar/Mispellings<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume has gone through our Grammar Check and has passed!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Grammar <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume has gone through our Grammar Check and has failed.</span></li>)}
                <li>Mispellings <AiFillCheckCircle className='grade-check-icon' /></li>
                <li className='grade-item'>Consistent Tense **PENDING <MdPending className='grade-check-icon pending' /></li>
                {firstPerson ? (<li className='grade-item'><div className='grid-item-flexer'>Avoid First Person Pronouns<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>Your resume is free of first person pronouns such as I, We, Mine... Nice!</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Avoid First Person Pronouns <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>Your resume includes first person pronouns such as I, We, Mine. This is a common mistake for many resumes and is generally avoided by professionals.</span></li>)}
                {experienceFirst ? (<li className='grade-item'><div className='grid-item-flexer'>Experience First<AiFillCheckCircle className='grade-check-icon' /></div> <span className='resume-includes'>The experience section of your resume comes before the education section and that is ideal for your level of experience.</span></li>):(<li className='grade-item'><div className='grid-item-flexer'>Experience First <AiOutlineClose className='grade-check-icon grade-check-red-icon' /></div> <span className='resume-includes'>The experience section of your resume comes AFTER the education section. With your level of experience it&apos;s important to include Experience first. </span></li>)}
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Correct Filename<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>No References<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Email is professional<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Hard & Soft Skills<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Consistent Tense<AiTwotoneLock className='grade-check-icon lock-icon' /></div> <span className='resume-includes'></span></li>
                <li className='grade-item'>PDF/Docx File Type <AiFillCheckCircle className='grade-check-icon' /></li>
                <li className='grade-item'>Correct Filename **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Remove References **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Professional Email **PENDING <MdPending className='grade-check-icon pending' /></li>
                <li className='grade-item'>Hard & Soft Skills **PENDING <MdPending className='grade-check-icon pending' /></li>

            </ul>
        </div>
        </div>  
    </div>
       )}
       </div>
  );
}


        {/* <div className='grade-container-item'>
            <div className='grade-header-container'>
                <h6>Sections</h6>
                <span className='grade-header gold gold-glisten-animation'>A</span>
            </div>
              <ul>
                <li className='grade-item locked-grade-item'><div className='grid-item-flexer'>Experience First <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Dates Ordered Chronologically <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Name <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Email <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Phone Number <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Address <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Summary <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Experience <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Education <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Skills <AiFillCheckCircle className='grade-check-icon' /></div></li>
              </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'>
            <h6>Impact</h6><span className='grade-header gold'>A</span>
            </div>
              <ul>
                <li className='grade-item'><div className='grid-item-flexer'>Quantify Impact<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Unique Action Words<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Keyword Optimization<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Accomplishment Oriented Language <MdPending className='grade-check-icon pending' /></div></li>
              </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'>
            <h6>Brevity</h6><span className='grade-header gold'>A</span>
            </div>              
                <ul>
                <li className='grade-item'><div className='grid-item-flexer'>Resume Length<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Use of Bullets<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Total Bullet Points <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Bullet Point Length<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Filler Word Analysis<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Filler Word Analysis<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>One Page<AiFillCheckCircle className='grade-check-icon' /></div></li>
              </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'>
            <h6>Styles</h6><span className='grade-header gold'>A</span>
            </div>
            <ul>
                <li className='grade-item'><div className='grid-item-flexer'>Buzzwords or Cliches <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Readability <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Dates <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Active Voice analysis <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Readability<AiTwotoneLock className='grade-check-icon lock-icon' /></div> </li>
                <li className='grade-item'><div className='grid-item-flexer'>Dates<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Active Word Analysis<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Inconsistencies<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
            </ul>
        </div>
        <div className='grade-container-item'>
            <div className='grade-header-container'>
            <h6>Crucial Details</h6><span className='grade-header gold'>A</span>
            </div>
            <ul>
                <li className='grade-item'><div className='grid-item-flexer'>Grammar/Mispellings<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Mispellings <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Consistent Tense <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Avoid First Person Pronouns<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Experience First<AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Correct Filename<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>No References<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Email is professional<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Hard & Soft Skills<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Consistent Tense<AiTwotoneLock className='grade-check-icon lock-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>PDF/Docx File Type <AiFillCheckCircle className='grade-check-icon' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Correct Filename <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Remove References <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Professional Email <MdPending className='grade-check-icon pending' /></div></li>
                <li className='grade-item'><div className='grid-item-flexer'>Hard & Soft Skills <MdPending className='grade-check-icon pending' /></div></li>
            </ul>
        </div> */}