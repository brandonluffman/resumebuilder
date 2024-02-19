import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudArrowUp } from 'react-icons/bs';
const DropzoneInput = ({ onDrop, accept, fileName }) => {
  const [file, setFile] = useState(null);
  const [pdfText, setPdfText] = useState('');
  // const [fileName, setFileName] = useState('');


  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <div {...getRootProps()} className='custom-file-upload'>
      <input {...getInputProps()} className='test-input-pdf'/>
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className='dropzone-container'>
        <div className='custom-file-absolute'>
        <BsCloudArrowUp className='test-input-icon'/>
        <p>Drag n drop some files here, or click to select files</p>
        <p className='max-size-p'>Maximum file size is 100MB.</p>
        </div>
        </div>
      )}
       {fileName ? ( <div className='filename-div'>{fileName}</div>):(<div className='no-file-div' >* No File Selected</div>)}
    </div>
  );
};

const styles = {
  dropzone: {
    border: '2px dashed gray',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

export default DropzoneInput;
