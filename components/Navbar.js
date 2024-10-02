import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";
import {RiAiGenerate, RiArrowDropDownLine} from 'react-icons/ri'
import { IoIosCreate } from 'react-icons/io';
import { SiSpeedtest } from 'react-icons/si'
import { BsPenFill } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {

  const [showMe, setShowMe] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function toggleNav(){
    setShowMe(!showMe);
    setIsActive(!isActive);
  }

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


  return (
      <nav className={navbar ? 'scroll fixed-top' : 'navbar fixed-top'} id="navbar">
      <Link href='/'><h1 className='navbar-logo'><img src='/logo.png'></img>ResumeBuilder<span className='nav-logo-blue'>AI</span></h1></Link>
      <ul className='nav-menu'>
        <li className="nav-link dropdown" onClick={toggleDropdown}>
          Features<RiArrowDropDownLine className='dropdown-icon'/>
          {/* {isDropdownOpen && ( */}
            <ul className="dropdown-content">
              <li>
              <Link href="/build"><IoIosCreate className='nav-link-icon' />Resume Builder</Link>
              </li>
              <li>
              <Link href="/test"><SiSpeedtest className='nav-link-icon' />Resume Test</Link>
              </li>
              <li>
                <Link href="/tailor"><BsPenFill className='nav-link-icon' />Tailor a Resume</Link>
              </li>
              <li>
                <Link href="/cover-letter-builder"><RiAiGenerate className='nav-link-icon' />Cover Letter Generator</Link>
              </li>
              <li>
                <Link href="/apply"><RiAiGenerate className='nav-link-icon' />Automate Apply</Link>
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
        </li>        
        <Link href='/pricing'><li className='nav-link'>Pricing</li></Link>
        <div className='vertical-line'></div>
        {/* <div className='login-menu'>
        {user?.user !== null ? (
              <div className='nav-link nav-link-welcome'>
                <div className='profile-circle'>
                  <div className='profile-circle-letter'>{profileLetter}</div>
                <div className='profile-nav'>     
                <p className='profile-circle-email'>Hello {user?.user.email}</p>
   
                <button className='logout-nav-btn logout-logged-in btn nav-btn btn-tertiary' onClick={handleLogout}>
                  Logout
                </button>
                </div>
                </div>
              </div>
            ) : (
              <div className='nav-link'>
                <li className='nav-link nav-link-btn-li'>
                  <Link href='/login'>
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
            </div> */}
            </ul>

            <div className='hamburger-btn' onClick={toggleMenu}>
                <FiMenu className='hamburger-menu-icon' />
              </div>

              {/* Mobile navigation menu */}

                <div className={isMenuOpen ? 'mobile-nav mobile-nav-closed':'mobile-nav mobile-nav-open'}>
                  {/* Menu content here */}
                  <ul className=''>
                    <h6>Features</h6>
                    <Link href='/build'><li>Resume Builder</li></Link>
                    <Link href='/test'><li>Resume Tester</li></Link>
                    <Link href='/tailor'><li>Resume Tailor</li></Link>
                    <Link href='/cover-letter-builder'><li>Cover Letter Generator</li></Link>
                    <h6>Examples</h6>
                    <Link href='/resume-templates'><li>Resume Examples</li></Link>
                    <Link href='/cover-letter-templates'><li>Cover Letter Examples</li></Link>
                    <Link href='/resignation-letter-templates'><li>Resignation Letter Examples</li></Link>
                    <h6>Company</h6>
                    <Link href='/pricing'><li>Pricing</li></Link>
                    <Link href='/reviews'><li>Reviews</li></Link>
                    <Link href='/affiliate'><li>Affiliate</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                  </ul>
                </div>
    </nav>
  )
}

export default Navbar



