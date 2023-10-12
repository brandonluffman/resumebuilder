import { useEffect, useState } from 'react';
import { supabase } from '../utils/auth';

export default function Profile() {
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
    <div>
      {user ? (<div><h1>Welcome, {user.user.email}</h1> <button onClick={handleLogout}>Logout</button></div>):(<div><h1>Sign In</h1> <button>Login</button></div>)}
    </div>
  );
}
