import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/login');
    });
  }, [navigate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="list-disc ml-6 mt-4">
        <li><a href="/admin/properties" className="text-blue-600">Manage Properties</a></li>
        <li><a href="/admin/boats" className="text-blue-600">Manage Boats</a></li>
        <li><a href="/admin/projects" className="text-blue-600">Manage Projects</a></li>
        <li><a href="/admin/investors" className="text-blue-600">Investor Leads</a></li>
      </ul>
    </div>
  );
}
