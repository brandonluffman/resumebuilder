import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const partners = () => {
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     const fetchUser = async () => {
    //       const { data, error } = await supabase.auth.getUser();
    
    //       if (data) {
    //         setUser(data);
    //         console.log(data)
    //       } else {
    //         console.error('Error fetching user:', error);
    //       }
    //     };
    
    //     fetchUser();
    //   }, []);
  return (
    <>
    <Navbar />
    <div className='partners-container'>
      <h2 className='partners-header'>Not accepting Affiliates at this time.</h2>
      <h6 className='partners-subheader'>Please come back on 1/1/24</h6>
    </div>
    <Footer />
    </>
  )
}

export default partners