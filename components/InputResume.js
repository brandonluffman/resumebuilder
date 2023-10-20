import { useState } from 'react';
import { BsCloudArrowUp } from 'react-icons/bs';
import DropzoneInput from './DropzoneInput';

export default function InputResume() {
  const [file, setFile] = useState(null);
  const [pdfText, setPdfText] = useState('');
  const [fileName, setFileName] = useState('');
  const [segmentText, setSegmentText] = useState({});
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const longestLineLength = Math.max(...pdfText.split('\n').map(line => line.length));

  // const handleSubmit = async () => {
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     const response = await fetch('http://127.0.0.1:8000/convert-pdf-to-text/', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setPdfText(data.pdf_text);
  //       setSegmentText(data.segments);
  //       console.log(data.segments);
  //     } else {
  //       console.error('Error:', response.statusText);
  //     }
  //   }
  // };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      // Use Heroku URL here:
      const response = await fetch('https://resumeparserofficial-03af5455fec2.herokuapp.com/convert-pdf-to-text/', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        setPdfText(data.pdf_text);
        setSegmentText(data.segments);
        console.log(data.segments);
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



  return (
    <div className='input-resume-container'>
                  <DropzoneInput onDrop={handleOnDrop} accept="image/*" />
                  <button onClick={handleSubmit} className='test-btn-pdf'>Test</button>
                  {fileName ? ( <div className='filename-div'>{fileName}</div>):(<div className='filename-div' >No File Selected</div>)}
      <div className='test-extract-container'>
        {pdfText ? (
            <div className='test-extract-div test-extracted-div'>
                <h6 className='test-extract-header'>Extracted Text</h6>
                {longestLineLength > 100 ? 
                    <p>{pdfText}</p> :
                    <pre>{pdfText}</pre>
                }
            </div>
        ):(
          <div className='test-extract-div no-extract'>None Yet </div>
        )}
      {segmentText && Object.keys(segmentText).length > 0 && (
        <div className='test-extract-div test-segment-div'>
          <h6 className='test-extract-header'>Segmented Text</h6>
          {Object.entries(segmentText).map(([header, content], idx) => (
            <div className='segment-div' key={idx}>
              <h6>{header}</h6>
              {content ? ( <p>{content}</p>):(<p className='no-content-p'>Nothing Found</p>)}
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
