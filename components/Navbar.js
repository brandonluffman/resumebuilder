import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";
// import { MdMenu, MdClear } from 'react-icons/md';
// import {AiOutlineSchedule} from 'react-icons/ai';
// import { BiLinkExternal } from 'react-icons/bi';
import {RiArrowDropDownLine} from 'react-icons/ri'
import { supabase } from '../utils/auth';
import { IoIosCreate } from 'react-icons/io';
import { SiSpeedtest } from 'react-icons/si'
import { BsPenFill } from 'react-icons/bs'
const Navbar = () => {

  const [showMe, setShowMe] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function toggleNav(){
    setShowMe(!showMe);
    setIsActive(!isActive);
  }

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data) {
        setUser(data);
        console.log(data)
      } else {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Redirect or navigate to the login page
    alert('Logout successful!');
        // Redirect or navigate to the profile page
    window.location.href = '/';
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);

    } else {
      setNavbar(false);

    }
  }; 

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  // const user = user.user;


  return (
      <nav className={navbar ? 'scroll fixed-top' : 'navbar fixed-top'} id="navbar">
      <Link href='/'><h1 className='navbar-logo'><img src='/logo.png'></img>ResumeBuilder<span className='nav-logo-blue'>AI</span></h1></Link>
      <ul className='nav-menu'>
        <li className="nav-link dropdown" onClick={toggleDropdown}>
          Features<RiArrowDropDownLine className='dropdown-icon'/>
          {/* {isDropdownOpen && ( */}
            <ul className="dropdown-content">
              <li>
              <Link href="/build"><IoIosCreate className='nav-link-icon' />Build a Resume</Link>
              </li>
              <li>
              <Link href="/test"><SiSpeedtest className='nav-link-icon' />Test a Resume</Link>
              </li>
              <li>
                <Link href="/tailor"><BsPenFill className='nav-link-icon' />Tailor a Resume</Link>
              </li>
            </ul>
           {/* )}  */}
        </li>
        <li className="nav-link dropdown" onClick={toggleDropdown}>
          Examples<RiArrowDropDownLine className='dropdown-icon'/>
          {/* {isDropdownOpen && ( */}
            <ul className="dropdown-content">
              <li>
              {/* <IoIosCreate className='nav-link-icon' /> */}
              <Link href="/resume-templates"><img src='/resume-icon.png' width='25' className='nav-link-icon'></img>Resumes</Link>
              </li>
              <li>
                {/* <SiSpeedtest className='nav-link-icon' /> */}
                <Link href="/cover-letter-templates"><img src='/cover-letter-icon.png' width='25' className='nav-link-icon'></img>Cover Letters</Link>
              </li>
              <li>
                {/* <BsPenFill className='nav-link-icon' /> */}
                <Link href="/resignation-letter-templates"><img src='/resig-letter.png' width='25' className='nav-link-icon'></img>Resignation Letters</Link>
              </li>
            </ul>
           {/* )}  */}
        </li>        <Link href='/pricing'><li className='nav-link'>Pricing</li></Link>
        <div className='vertical-line'></div>
        {user?.user !== null ? (
              <div className='nav-link nav-link-welcome'>
                <h1>Welcome, {user?.user.email}</h1>
                <button className='logout-nav-btn btn nav-btn btn-tertiary' onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className='nav-link'>
                <li className='nav-link nav-link-btn-li'>
                  <Link href='/login'>
                    {/* <button type='button' className={navbar ? 'nav-link-btn nav-login-btn btn btn-primary':'nav-link-btn nav-login-btn-scrolled btn btn-primary'}>
                      Log In
                    </button> */}
                    <button type='button' className='nav-link-btn nav-login-btn-scrolled btn btn-primary'>
                      Login
                    </button>
                  </Link>
                </li>
                <li className='nav-link nav-link-btn-li'>
                  <Link href='/register'>
                    <button type='button' className='nav-link-btn nav-signup-btn btn btn-secondary'>
                      Sign Up
                    </button>
                  </Link>
                </li>
              </div>
            )}
      </ul>
    </nav>
  )
}

export default Navbar