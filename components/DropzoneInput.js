import React from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudArrowUp } from 'react-icons/bs';
const DropzoneInput = ({ onDrop, accept }) => {
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
        {/* <p>Drag n drop some files here, or click to select files</p> */}
        <div className='custom-file-absolute'>
        <BsCloudArrowUp className='test-input-icon'/>
        <p className='or-p'>or</p>
        <label className='test-input-label'>
            Browse Files
            <input type='file' className='test-input-browse'/>
        </label>
        <p className='max-size-p'>Maximum file size is 100MB.</p>
        </div>
        </div>
      )}
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
