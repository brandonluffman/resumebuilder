import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReviewStars from '../components/ReviewStars'
import TemplateGrid from '../components/TemplateGrid';
import Link from 'next/link';
import { supabase } from '../utils/auth';
import { MdVerified } from 'react-icons/md'
const ResumeTemplates = () => {

  const [user, setUser] = useState(null);

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
  };

  return (
    <>
    <Navbar />
    <div className='template-container'>
      <div className='template-top-text'>
        <MdVerified className='verified-icon'/>
        <h1 className='template-header'>Resume Examples</h1>
        <h6 className='template-subheader'>Our resume examples will show you the skills, and achievements you need to land work in 2023.</h6>
        {user?.user ? (<Link href='/build'><button className='btn btn-primary template-btn'>Create your resume - It&apos;s free</button></Link>):(<Link href='/register'><button className='btn btn-primary template-btn'>Create your resume - It&apos;s free</button></Link>)}

        {/* <ReviewStars className='review'/> */}
        </div>
        <div className='template-top-img'>
        <img src='/resume.png' className='template-main-img'></img>

        </div>   
 
    </div>

    <div className='templates-grids-container'>
        <h3 className='templates-header'>Most popular resume examples</h3>
        <TemplateGrid />
        <hr className='templates-hr'></hr>
        <h3 className='templates-header'>Programming Resume Examples</h3>
        <TemplateGrid />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
        <h3 className='templates-header'>Marketing Resume Examples</h3>
        <TemplateGrid />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default ResumeTemplates;
