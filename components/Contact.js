import React, { useState, useEffect, useRef } from 'react';
import { BsPaperclip } from 'react-icons/bs';
import emailjs from "@emailjs/browser";
import { MdClear } from 'react-icons/md';



const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(); // Create a reference to the form

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set isSubmitted to true to show the tag
    console.log('Submitted');
    formRef.current.reset(); // Reset the form

    // Add your email sending logic here
};

    useEffect(() => {
      if (isSubmitted) {
          // Set a timeout to hide the tag after 2 seconds
          const timer = setTimeout(() => {
              setIsSubmitted(false);
          }, 2000);

          // Clear the timer if the component is unmounted
          return () => clearTimeout(timer);
      }
  }, [isSubmitted]);

  return (
    <div>
     
    <div className='project-contact-container'>
    <form onSubmit={sendEmail} ref={formRef}  className='project-form'>

        <h6 className='project-header'>Hey, let&apos;s get in touch. <span className='hand-emoji'>&#128075;</span></h6>
        <div className='form-inputs'>
                <input type='text' placeholder='Your name *' className='form-input' name="name" required/><br></br>
                <input type='email' placeholder='Your email *' className='form-input' name="email" required/><br></br>
                <textarea placeholder='What can we help you with? *' className='form-input' name='message' required/>
        </div>

        <div className='form-button'>
                {/* <button onClick={sendEmail} className='project-form-btn' value="Send" type='submit'><p className='form-btn-p'>Send Request</p><span id='btn-ring' /></button> */}
                <button className='project-form-btn' type="submit"><p className='form-btn-p'>Send Request</p><span id='btn-ring' /></button>

        </div>
        </form>
        {isSubmitted && (
                <div className="tag-container">
                    <span className="tag">Thanks for Submitting!</span>
                </div>
            )}
        </div>
    </div>
  )
}

export default Contact;