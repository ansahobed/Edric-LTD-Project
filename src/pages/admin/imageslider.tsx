import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import axios from 'axios';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_FOLDER } from '../../lib/cloudinary';

export default function AdminImageSlider() {
  const [slides, setSlides] = useState<any[]>([]);
  const [newSlide, setNewSlide] = useState({
    title: '',
    subtitle: '',
    image_url: '',
  });

  const fetchSlides = async () => {
    const { data, error } = await supabase
      .from('homepage_slider')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setSlides(data || []);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', CLOUDINARY_FOLDER);

    try {
      const res = await axios.post(CLOUDINARY_URL, formData);
      const imageUrl = res.data.secure_url;
      console.log('Uploaded Image URL:', imageUrl);
      setNewSlide((prev) => ({ ...prev, image_url: imageUrl }));
    } catch (err) {
      console.error('Image upload failed:', err);
    }
  };

  const addSlide = async () => {
    if (!newSlide.image_url) {
      alert('Please upload an image before adding the slide.');
      return;
    }

    const { error } = await supabase.from('homepage_slider').insert([newSlide]);
    if (!error) {
      setNewSlide({ title: '', subtitle: '', image_url: '' });
      fetchSlides();
    }
  };

  const deleteSlide = async (id: string) => {
    const { error } = await supabase.from('homepage_slider').delete().eq('id', id);
    if (!error) fetchSlides();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Homepage Image Slider</h2>

      <div className="mb-6 space-y-2">
        <input
          placeholder="Slide Title"
          className="border p-2 w-full"
          value={newSlide.title}
          onChange={e => setNewSlide({ ...newSlide, title: e.target.value })}
        />
        <input
          placeholder="Slide Subtitle"
          className="border p-2 w-full"
          value={newSlide.subtitle}
          onChange={e => setNewSlide({ ...newSlide, subtitle: e.target.value })}
        />
        <input type="file" className="border" onChange={handleImageUpload} />
        {newSlide.image_url && (
          <img src={newSlide.image_url} alt="Preview" className="w-full h-40 object-cover" />
        )}
        <button
          onClick={addSlide}
          className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition"
        >
          Add Slide
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide) => (
          <div key={slide.id} className="border p-4 rounded shadow">
            {slide.image_url && <img src={slide.image_url} className="w-full h-40 object-cover mb-2" />}
            <h3 className="font-bold text-lg">{slide.title || 'Untitled Slide'}</h3>
            <p className="text-sm text-slate-600">{slide.subtitle}</p>
            <button onClick={() => deleteSlide(slide.id)} className="text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
