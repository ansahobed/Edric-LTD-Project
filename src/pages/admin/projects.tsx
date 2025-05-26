import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({ property_id: '', headline: '', details: '', progress: '', investment_cta: '', contact_email: '' });

  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select('*');
    if (!error) setProjects(data);
  };

  useEffect(() => { fetchProjects(); }, []);

  const addProject = async () => {
    const { error } = await supabase.from('projects').insert([{ ...newProject, progress: parseInt(newProject.progress) }]);
    if (!error) {
      setNewProject({ property_id: '', headline: '', details: '', progress: '', investment_cta: '', contact_email: '' });
      fetchProjects();
    }
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (!error) fetchProjects();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="mb-6 space-y-2">
        <input placeholder="Property ID" className="border p-2 w-full" value={newProject.property_id} onChange={e => setNewProject({ ...newProject, property_id: e.target.value })} />
        <input placeholder="Headline" className="border p-2 w-full" value={newProject.headline} onChange={e => setNewProject({ ...newProject, headline: e.target.value })} />
        <textarea placeholder="Details" className="border p-2 w-full" value={newProject.details} onChange={e => setNewProject({ ...newProject, details: e.target.value })} />
        <input placeholder="Progress %" type="number" className="border p-2 w-full" value={newProject.progress} onChange={e => setNewProject({ ...newProject, progress: e.target.value })} />
        <input placeholder="Investment CTA" className="border p-2 w-full" value={newProject.investment_cta} onChange={e => setNewProject({ ...newProject, investment_cta: e.target.value })} />
        <input placeholder="Contact Email" className="border p-2 w-full" value={newProject.contact_email} onChange={e => setNewProject({ ...newProject, contact_email: e.target.value })} />
        <button onClick={addProject} className="bg-green-600 text-white px-4 py-2">Add Project</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{proj.headline}</h3>
            <p>{proj.details}</p>
            <p>Progress: {proj.progress}%</p>
            <p>Contact: {proj.contact_email}</p>
            <button onClick={() => deleteProject(proj.id)} className="text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
