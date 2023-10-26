import { useState } from 'react';
import { supabase } from '../utils/auth';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          })

      if (error) {
        alert('Login failed. Please check your credentials.');
      } else {
        alert('Login successful!');
        // Redirect or navigate to the profile page
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <>
    <Navbar />
    
    <div className='login-container'>
      <form onSubmit={handleLogin}>
      <h1>Login</h1>

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
        <br></br>
        <button type="submit" className='login-page-btn btn btn-primary'>Login</button>
      </form>
    </div>
    <Footer />
    </>
  );
}
