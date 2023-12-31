import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReviewStars from '../components/ReviewStars'
import TemplateGrid from '../components/TemplateGrid';
import Link from 'next/link';
import { supabase } from '../utils/auth';
import { MdVerified } from 'react-icons/md'


const ResignationLetterTemplates = () => {


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
        <h1 className='template-header'>Resignation Letter Examples</h1>
        <h6 className='template-subheader'>ResumeBuilderAI features that make writing a resignation letter simple and effective. Need more help? Use ResumeBuilderAI&apos;s AI <Link href='/' className='blue-color-change'>Resignation Letter Builder</Link> to instantly generate resignation letters.</h6>
        {user?.user ? (<Link href='/build'><button className='btn btn-primary template-btn'>Create your Resignation Letter - It&apos;s free</button></Link>):(<Link href='/register'><button className='btn btn-primary template-btn'>Create your Resignation Letter - It&apos;s free</button></Link>)}

        {/* <ReviewStars className='review'/> */}
        </div>
        <div className='template-top-img'>
          <img src='/cover-letter-2.svg' className='template-main-img'></img>
        </div>
    </div>
    <div className='templates-grids-container'>
        <h3 className='templates-header'>Most Popular Cover Letter Examples</h3>
        <TemplateGrid />
        <hr className='templates-hr'></hr>
        <h3 className='templates-header'>Programming Cover Letter Examples</h3>
        <TemplateGrid />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
        <h3 className='templates-header'>Marketing Cover Letter Examples</h3>
        <TemplateGrid />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default ResignationLetterTemplates;
