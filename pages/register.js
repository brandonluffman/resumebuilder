import { useState } from 'react';
import { supabase } from '../utils/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert('Registration failed. Please try again.');
      } else {
        alert('Registration successful! Please check your email for verification.');
        // Redirect or navigate to the login page
      }
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };    

  return (
    <>
    <Navbar />
    <div className='login-container'>
      <form onSubmit={handleRegister}>
      <h1>Register</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='login-page-btn btn btn-primary' >Register</button>
      </form>
    </div>
    <Footer />
    </>
  );
}
