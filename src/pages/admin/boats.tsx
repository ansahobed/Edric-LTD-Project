import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import axios from 'axios';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_FOLDER } from '../../lib/cloudinary';

export default function AdminBoats() {
  const [boats, setBoats] = useState<any[]>([]);
  const [newBoat, setNewBoat] = useState({ name: '', type: '', speed: '', capacity: '', price: '', description: '', image_urls: [] });

  const fetchBoats = async () => {
    const { data, error } = await supabase.from('boats').select('*');
    if (!error) setBoats(data);
  };

  useEffect(() => { fetchBoats(); }, []);

  const handleImageUpload = async (e: any) => {
    const files = Array.from(e.target.files);
    const uploads = await Promise.all(
      files.map(async (file: any) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', CLOUDINARY_FOLDER);

        const res = await axios.post(CLOUDINARY_URL, formData);
        return res.data.secure_url;
      })
    );
    setNewBoat({ ...newBoat, image_urls: uploads });
  };

  const addBoat = async () => {
    const { error } = await supabase.from('boats').insert([{ ...newBoat, price: parseFloat(newBoat.price) }]);
    if (!error) {
      setNewBoat({ name: '', type: '', speed: '', capacity: '', price: '', description: '', image_urls: [] });
      fetchBoats();
    }
  };

  const deleteBoat = async (id: string) => {
    const { error } = await supabase.from('boats').delete().eq('id', id);
    if (!error) fetchBoats();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Boats</h2>

      <div className="mb-6 space-y-2">
        <input placeholder="Name" className="border p-2 w-full" value={newBoat.name} onChange={e => setNewBoat({ ...newBoat, name: e.target.value })} />
        <input placeholder="Type" className="border p-2 w-full" value={newBoat.type} onChange={e => setNewBoat({ ...newBoat, type: e.target.value })} />
        <input placeholder="Speed" className="border p-2 w-full" value={newBoat.speed} onChange={e => setNewBoat({ ...newBoat, speed: e.target.value })} />
        <input placeholder="Capacity" className="border p-2 w-full" value={newBoat.capacity} onChange={e => setNewBoat({ ...newBoat, capacity: e.target.value })} />
        <input placeholder="Price" type="number" className="border p-2 w-full" value={newBoat.price} onChange={e => setNewBoat({ ...newBoat, price: e.target.value })} />
        <textarea placeholder="Description" className="border p-2 w-full" value={newBoat.description} onChange={e => setNewBoat({ ...newBoat, description: e.target.value })} />
        <input type="file" multiple className="border" onChange={handleImageUpload} />
        <button onClick={addBoat} className="bg-green-600 text-white px-4 py-2">Add Boat</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {boats.map((boat) => (
          <div key={boat.id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{boat.name}</h3>
            <p>{boat.type} - Speed: {boat.speed} - Capacity: {boat.capacity}</p>
            <p>${boat.price}</p>
            <div className="flex gap-2 overflow-x-auto mt-2">
              {boat.image_urls?.map((url: string) => <img key={url} src={url} className="w-24 h-24 object-cover" />)}
            </div>
            <button onClick={() => deleteBoat(boat.id)} className="text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
