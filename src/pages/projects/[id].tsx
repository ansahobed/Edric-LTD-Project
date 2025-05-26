import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

export default function ProjectOverview() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [property, setProperty] = useState<any>(null);
  const [lead, setLead] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
      if (!error && data) {
        setProject(data);
        const propRes = await supabase.from('properties').select('*').eq('id', data.property_id).single();
        if (!propRes.error) setProperty(propRes.data);
      }
    };
    fetchProject();
  }, [id]);

  const handleSubmit = async () => {
    const { error } = await supabase.from('investor_leads').insert([{ ...lead, project_id: id }]);
    if (!error) setSubmitted(true);
  };

  if (!project || !property) return <div className="p-6">Loading project...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{project.headline}</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {property.image_urls?.map((url: string) => (
          <img key={url} src={url} className="h-48 w-64 object-cover rounded" />
        ))}
      </div>

      <p className="mb-4 whitespace-pre-line">{project.details}</p>
      <div className="mb-4">
        <strong>Progress:</strong>
        <div className="w-full bg-gray-300 h-4 rounded">
          <div className="bg-green-500 h-4 rounded" style={{ width: `${project.progress}%` }}></div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Interested in Investing?</h3>
        <p className="mb-2">{project.investment_cta}</p>
        {!submitted ? (
          <div className="grid gap-2">
            <input placeholder="Name" className="border p-2" value={lead.name} onChange={e => setLead({ ...lead, name: e.target.value })} />
            <input placeholder="Email" className="border p-2" value={lead.email} onChange={e => setLead({ ...lead, email: e.target.value })} />
            <input placeholder="Phone" className="border p-2" value={lead.phone} onChange={e => setLead({ ...lead, phone: e.target.value })} />
            <textarea placeholder="Message" className="border p-2" value={lead.message} onChange={e => setLead({ ...lead, message: e.target.value })} />
            <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit Interest</button>
          </div>
        ) : (
          <p className="text-green-600 font-semibold">Thanks! Your interest has been submitted.</p>
        )}
      </div>
    </div>
  );
}
