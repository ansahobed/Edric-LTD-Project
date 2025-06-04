import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import axios from 'axios';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_FOLDER } from '../../lib/cloudinary';

export default function AdminProperties() {
  const [properties, setProperties] = useState<any[]>([]);
  const [newFeature, setNewFeature] = useState('');
  const [newProperty, setNewProperty] = useState({
    title: '',
    location: '',
    type: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    about: '',
    image_urls: [] as string[],
    features: [] as string[] // ✅ New field for features
  });

  const fetchProperties = async () => {
    const { data, error } = await supabase.from('properties').select('*');
    if (!error) setProperties(data);
  };

  useEffect(() => { fetchProperties(); }, []);

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
    setNewProperty((prev) => ({
      ...prev,
      image_urls: [...prev.image_urls, ...uploads]
    }));
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewProperty((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleDeleteFeature = (index: number) => {
    setNewProperty((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addProperty = async () => {
    const submission = {
      ...newProperty,
      price: parseFloat(newProperty.price),
      bedrooms: parseInt(newProperty.bedrooms),
      bathrooms: parseInt(newProperty.bathrooms),
      sqft: parseInt(newProperty.sqft)
    };
    const { error } = await supabase.from('properties').insert([submission]);
    if (!error) {
      setNewProperty({
        title: '',
        location: '',
        type: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        about: '',
        image_urls: [],
        features: []
      });
      setNewFeature('');
      fetchProperties();
    }
  };

  const deleteProperty = async (id: string) => {
    const { error } = await supabase.from('properties').delete().eq('id', id);
    if (!error) fetchProperties();
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Admin: Properties</h2>

      <div className="bg-white rounded-xl shadow-md p-8 mb-16">
        <h3 className="text-xl font-semibold mb-8">Add New Property</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
          <input placeholder="Title" className="input w-full" value={newProperty.title} onChange={e => setNewProperty({ ...newProperty, title: e.target.value })} />
          <input placeholder="Location" className="input w-full" value={newProperty.location} onChange={e => setNewProperty({ ...newProperty, location: e.target.value })} />
          <input placeholder="Type (e.g. riverfront)" className="input w-full" value={newProperty.type} onChange={e => setNewProperty({ ...newProperty, type: e.target.value })} />
          <input type="number" placeholder="Price" className="input w-full" value={newProperty.price} onChange={e => setNewProperty({ ...newProperty, price: e.target.value })} />
          <input type="number" placeholder="Bedrooms" className="input w-full" value={newProperty.bedrooms} onChange={e => setNewProperty({ ...newProperty, bedrooms: e.target.value })} />
          <input type="number" placeholder="Bathrooms" className="input w-full" value={newProperty.bathrooms} onChange={e => setNewProperty({ ...newProperty, bathrooms: e.target.value })} />
          <input type="number" placeholder="Square Feet" className="input w-full" value={newProperty.sqft} onChange={e => setNewProperty({ ...newProperty, sqft: e.target.value })} />
          <input type="file" multiple className="input w-full" onChange={handleImageUpload} />
          <textarea placeholder="About This Property" className="input w-full md:col-span-2" rows={4} value={newProperty.about} onChange={e => setNewProperty({ ...newProperty, about: e.target.value })} />
          
          {/* Feature Input */}
          <div className="md:col-span-2">
            <div className="flex gap-2 mb-2">
              <input
                placeholder="Add feature (e.g. Solar panel)"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                className="input w-full"
              />
              <button
                onClick={handleAddFeature}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Add Feature
              </button>
            </div>
            {/* Feature List */}
            <ul className="list-disc pl-5 text-gray-700">
              {newProperty.features.map((feature, i) => (
                <li key={i} className="flex justify-between items-center">
                  {feature}
                  <button
                    onClick={() => handleDeleteFeature(i)}
                    className="ml-2 text-red-500 hover:text-red-700 text-sm"
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={addProperty}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition mt-2"
        >
          Add Property
        </button>
      </div>

      {/* Property List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {properties.map((prop) => (
          <div key={prop.id} className="bg-white border rounded-xl shadow-lg overflow-hidden flex flex-col mb-4">
            <div className="h-56 overflow-hidden">
              <img src={prop.image_urls?.[0] || 'https://via.placeholder.com/400x300'} alt={prop.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">{prop.title}</h3>
              <p className="text-gray-600 mb-1">{prop.location} • {prop.type}</p>
              <p className="text-gray-800 font-semibold mb-3">${prop.price?.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mb-2">{prop.bedrooms} Beds • {prop.bathrooms} Baths • {prop.sqft} sqft</p>
              <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">{prop.about}</p>

              {/* Display features */}
              {prop.features?.length > 0 && (
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  {prop.features.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}

              <div className="flex gap-2 mt-auto overflow-x-auto mb-2">
                {prop.image_urls?.map((url: string, index: number) => (
                  <img key={index} src={url} className="w-16 h-16 object-cover rounded" />
                ))}
              </div>
              <button
                onClick={() => deleteProperty(prop.id)}
                className="mt-4 text-red-600 hover:text-red-800 text-sm font-medium self-end"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
