import React, { useState, useRef } from 'react'
import { BsPaperclip } from 'react-icons/bs';
import emailjs from "@emailjs/browser";
import { MdClear } from 'react-icons/md';



const Contact = () => {
    const inquiry = useRef();

    const closeBtn = (e) => {
      e.preventDefault();
      document.getElementById('thank_you').style.display = 'none';
    }
  
    const sendEmail = (e) => {
      e.preventDefault();

    document.getElementById('btn-ring').style.display = 'block';

      emailjs
        .sendForm(
          "service_d3p9eul",
          "template_yrm1kdx",
          inquiry.current,
          "q1bvSeQBMko2AZ2ax"
        )
        .then(
          (result) => {
            document.getElementById('btn-ring').style.display = 'none';
            e.target.reset();
            document.getElementById('thank_you').style.display = 'block';
            setTimeout(function(){
                document.getElementById('thank_you').style.display = 'none';
             }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <div>
     
    <div className='project-contact-container'>
    <div id="thank_you" className='thankyou-div' style={{display: 'none'}}>
            <p className='thankyou-thanks'>Thanks for reaching out! &#129309;</p><br></br>
            <p className='thankyou-thanks'>We&apos;ll be in touch.</p>
            <MdClear className='thankyou-close' onClick={closeBtn} />
        </div>
    <form ref={inquiry} onSubmit={sendEmail} className='project-form'>
        <h6 className='project-header'>Hey, let&apos;s get to work. <span className='hand-emoji'>&#128075;</span></h6>
        <p className='project-subheader'>I&apos;m interested in... *</p>
        <div className='form-app-selection'>
                <input id='select-1' type="radio" value="Business Website" className="radio-input" name="interest" />
                <label className='radio-label' htmlFor='select-1'>Custom Chatbot</label>
                <input id='select-2' type="radio" name="interest" value="Custom Website" className="radio-input"/>
                <label className='radio-label' htmlFor='select-2'>Custom AI Application</label>
                <input id='select-3' type="radio" name="interest" value="Ecommerce Website" className="radio-input"/>
                <label className='radio-label' htmlFor='select-3'>API Development</label>
                <input id='select-4' type="radio" name="interest" value="Web App" className="radio-input"/>
                <label className='radio-label' htmlFor='select-4'>Data Allocation</label>
                <input id='select-5' type="radio" name="interest" value="Local SEO" className="radio-input"/>
                <label className='radio-label' htmlFor='select-5'>Other</label>
                {/* <input id='select-6' type="radio" name="interest" value="SEO" className="radio-input"/>
                <label className='radio-label' htmlFor='select-6'>SEO</label> */}
        </div>
        <div className='form-inputs'>
                <input type='text' placeholder='Your name *' className='form-input' name="name" required/><br></br>
                <input type='email' placeholder='Your email *' className='form-input' name="email" required/><br></br>
                <textarea placeholder='Tell us about your project *' className='form-input' name='message' required/>
        </div>
        <p className='project-subheader'>Project Budget ($ USD) *</p>
        <div className='form-budget'>
                    <input type="radio" name="budget" id='select-7' value="1-2k" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-7'>1-2k</label>
                    <input type="radio" name="budget" id='select-8' value="2-5k" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-8'>2-5k</label>
                    <input type="radio" name="budget" id='select-9' value="5-10k" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-9'>5-10k</label>
                    <input type="radio" name="budget" id='select-10' value="10k+" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-10'>10k+</label>
        </div>
{/* 
        <div className='form-attachment'>
                <BsPaperclip className='paperclip-icon' /><input type='file' id='file-attachment' className='file-input' title=' ' name='attachment' />
        </div> */}

        <div className='form-button'>
                <button className='project-form-btn' value="Send" type='submit'><p className='form-btn-p'>Send Request</p><span id='btn-ring' /></button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Contact;