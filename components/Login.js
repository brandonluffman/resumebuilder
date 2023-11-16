import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {CiMail} from 'react-icons/ci'
import {IoIosUnlock} from 'react-icons/io'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import Link from 'next/link'

const Login = () => {
    const [visible, setVisible] = useState(false);

  return (
    <div className='login-box'>
        <div className='login-avatar-div'>
        <img src='/avatar.png' width='100'></img>
        </div>
        <div className='login-email-div'>
            <CiMail  className='login-icon mail-icon'/>
            <input className='login-input login-email-input' placeholder='Username' type='text'></input>
            {/* <button className='email-vis-button'></button>   */}
        </div>
        <div className='login-password-div'>
            <IoIosUnlock className='login-icon lock-icon'/>
            <input className='login-input login-password-input' placeholder='Password' type={visible ? "text" : "password"}></input>
            <button className='password-vis-button' type='button' onClick={() => setVisible(!visible)}><AiFillEye /></button>  
        </div>
        <Link href='/'><p className='create-account'>Need to create an account?</p></Link>
        <Link href='/'><p className='forgot-password'>Forgot Password?</p></Link>
        <button type='button' className='login-button'>Login</button>
    </div>
  )
}

export default Login