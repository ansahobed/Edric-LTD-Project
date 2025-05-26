import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import axios from 'axios';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_FOLDER } from '../../lib/cloudinary';

export default function AdminPartners() {
  const [partners, setPartners] = useState<any[]>([]);
  const [newPartner, setNewPartner] = useState({
    name: '',
    description: '',
    website: '',
    logo_url: '',
  });

  const fetchPartners = async () => {
    const { data, error } = await supabase.from('partners').select('*');
    if (!error) setPartners(data);
  };

  useEffect(() => { fetchPartners(); }, []);

  const handleLogoUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', CLOUDINARY_FOLDER);

    const res = await axios.post(CLOUDINARY_URL, formData);
    setNewPartner({ ...newPartner, logo_url: res.data.secure_url });
  };

  const addPartner = async () => {
    const { error } = await supabase.from('partners').insert([newPartner]);
    if (!error) {
      setNewPartner({ name: '', description: '', website: '', logo_url: '' });
      fetchPartners();
    }
  };

  const deletePartner = async (id: string) => {
    const { error } = await supabase.from('partners').delete().eq('id', id);
    if (!error) fetchPartners();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trusted Partners</h2>

      <div className="mb-6 space-y-2">
        <input
          placeholder="Partner Name"
          className="border p-2 w-full"
          value={newPartner.name}
          onChange={e => setNewPartner({ ...newPartner, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          value={newPartner.description}
          onChange={e => setNewPartner({ ...newPartner, description: e.target.value })}
        />
        <input
          placeholder="Website URL"
          className="border p-2 w-full"
          value={newPartner.website}
          onChange={e => setNewPartner({ ...newPartner, website: e.target.value })}
        />
        <input type="file" className="border" onChange={handleLogoUpload} />
        {newPartner.logo_url && (
          <img src={newPartner.logo_url} alt="Logo Preview" className="w-20 h-20 object-contain" />
        )}
        <button onClick={addPartner} className="bg-green-600 text-white px-4 py-2">Add Partner</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="border p-4 rounded shadow">
            <div className="flex items-center gap-4">
              {partner.logo_url && <img src={partner.logo_url} className="w-16 h-16 object-contain" />}
              <div>
                <h3 className="font-bold text-lg">{partner.name}</h3>
                <a href={partner.website} className="text-blue-500 text-sm" target="_blank" rel="noopener noreferrer">
                  {partner.website}
                </a>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-700">{partner.description}</p>
            <button onClick={() => deletePartner(partner.id)} className="text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
