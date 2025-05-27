import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import axios from 'axios';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_FOLDER } from '../../lib/cloudinary';

export default function AdminImageSlider() {
  const [slides, setSlides] = useState<any[]>([]);
  const [newSlide, setNewSlide] = useState({
    title: '',
    image_url: '',
    active: true,
  });

  const fetchSlides = async () => {
    const { data, error } = await supabase.from('slider_images').select('*').order('created_at', { ascending: false });
    if (!error) setSlides(data || []);
  };

  useEffect(() => { fetchSlides(); }, []);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', CLOUDINARY_FOLDER);

    const res = await axios.post(CLOUDINARY_URL, formData);
    setNewSlide({ ...newSlide, image_url: res.data.secure_url });
  };

  const addSlide = async () => {
    const { error } = await supabase.from('slider_images').insert([newSlide]);
    if (!error) {
      setNewSlide({ title: '', image_url: '', active: true });
      fetchSlides();
    }
  };

  const deleteSlide = async (id: string) => {
    const { error } = await supabase.from('slider_images').delete().eq('id', id);
    if (!error) fetchSlides();
  };

  const toggleActive = async (id: string, currentState: boolean) => {
    const { error } = await supabase
      .from('slider_images')
      .update({ active: !currentState })
      .eq('id', id);
    if (!error) fetchSlides();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Homepage Image Slider</h2>

      <div className="mb-6 space-y-2">
        <input
          placeholder="Slide Title (optional)"
          className="border p-2 w-full"
          value={newSlide.title}
          onChange={e => setNewSlide({ ...newSlide, title: e.target.value })}
        />
        <input type="file" className="border" onChange={handleImageUpload} />
        {newSlide.image_url && (
          <img src={newSlide.image_url} alt="Preview" className="w-full h-40 object-cover" />
        )}
        <div className="flex items-center gap-2">
          <label className="text-sm">Visible:</label>
          <input
            type="checkbox"
            checked={newSlide.active}
            onChange={e => setNewSlide({ ...newSlide, active: e.target.checked })}
          />
        </div>
        <button onClick={addSlide} className="bg-green-600 text-white px-4 py-2">Add Slide</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide) => (
          <div key={slide.id} className="border p-4 rounded shadow">
            {slide.image_url && <img src={slide.image_url} className="w-full h-40 object-cover mb-2" />}
            <h3 className="font-bold text-lg">{slide.title || 'Untitled Slide'}</h3>
            <div className="flex justify-between items-center mt-2">
              <button onClick={() => toggleActive(slide.id, slide.active)} className="text-blue-500">
                {slide.active ? 'Deactivate' : 'Activate'}
              </button>
              <button onClick={() => deleteSlide(slide.id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
