import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else navigate('/admin');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <input placeholder="Email" className="p-2 border" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="p-2 border" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}