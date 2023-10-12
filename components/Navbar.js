import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";
// import { MdMenu, MdClear } from 'react-icons/md';
// import {AiOutlineSchedule} from 'react-icons/ai';
// import { BiLinkExternal } from 'react-icons/bi';
import {RiArrowDropDownLine} from 'react-icons/ri'
import { supabase } from '../utils/auth';

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
      <h1 className='navbar-logo'><img src='/logo.png' width='75'></img>ResumeBuilderAI</h1>
      <ul className='nav-menu'>
        <Link href='/'><li className='nav-link'>Home</li></Link>
        <Link href='/'><li className='nav-link'>About</li></Link>
        <li className="nav-link dropdown" onClick={toggleDropdown}>
          Products<RiArrowDropDownLine className='dropdown-icon'/>
          {/* {isDropdownOpen && ( */}
            <ul className="dropdown-content">
              <li>
                <Link href="/build">Build a Resume</Link>
              </li>
              <li>
                <Link href="/test">Test a Resume</Link>
              </li>
              <li>
                <Link href="/tailor">Tailor a Resume</Link>
              </li>
            </ul>
           {/* )}  */}
        </li>
        <Link href='/contact'><li className='nav-link'>Contact</li></Link>
        <div className='vertical-line'></div>
        {user?.user !== null ? (
              <div className='nav-link nav-link-welcome'>
                <h1>Welcome, {user?.user}</h1>
                <button className='logout-nav-btn btn nav-btn btn-secondary' onClick={handleLogout}>
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