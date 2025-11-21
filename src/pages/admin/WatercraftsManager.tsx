// src/pages/admin/WatercraftsManager.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import axios from 'axios';
import {
  CLOUDINARY_URL,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_FOLDER,
} from '../../lib/cloudinary';

interface Watercraft {
  id?: number;
  name: string;
  type: 'Boats' | 'Yachts' | 'Jet Skis' | 'Kayaks';
  seats?: number;
  color?: string;
  size?: string;
  brand?: string;
  images?: string[];
  description?: string;
}

export default function WatercraftsManager() {
  const [watercrafts, setWatercrafts] = useState<Watercraft[]>([]);
  const [editing, setEditing] = useState<Watercraft | null>(null);

  const [newWatercraft, setNewWatercraft] = useState<Watercraft>({
    name: '',
    type: 'Boats',
    seats: undefined,
    color: '',
    size: '',
    brand: '',
    images: [],
    description: '',
  });

  const [loading, setLoading] = useState(false);

  // Modals
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [customName, setCustomName] = useState('');

  const predefinedNames = ['Bolt', 'Yacht', 'Jet Ski', 'Kayak'];
  const predefinedTypes = ['Boats', 'Yachts', 'Jet Skis', 'Kayaks'];

  // Fetch watercrafts
  const fetchWatercrafts = async () => {
    const { data, error } = await supabase.from('watercrafts').select('*');
    if (error) console.error(error);
    else {
      const sanitizedData = data.map((wc: any) => ({
        ...wc,
        images: Array.isArray(wc.images) ? wc.images : wc.images ? JSON.parse(wc.images) : [],
      }));
      setWatercrafts(sanitizedData);
    }
  };

  useEffect(() => {
    fetchWatercrafts();
  }, []);

  // Upload Image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', CLOUDINARY_FOLDER);

    setLoading(true);
    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      const uploadedUrl = response.data.secure_url;

      setNewWatercraft({
        ...newWatercraft,
        images: [...(newWatercraft.images || []), uploadedUrl],
      });
    } catch (err) {
      console.error('Image upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (url: string) => {
    setNewWatercraft({
      ...newWatercraft,
      images: newWatercraft.images?.filter((img) => img !== url),
    });
  };

  // Submit Form
  const handleSubmit = async () => {
    if (!newWatercraft.name || !newWatercraft.type) {
      alert('Name and Type are required');
      return;
    }

    const payload = { ...newWatercraft, images: newWatercraft.images || [] };

    if (editing) {
      const { error } = await supabase
        .from('watercrafts')
        .update(payload)
        .eq('id', editing.id);

      if (!error) {
        setEditing(null);
        resetForm();
        fetchWatercrafts();
      } else console.error(error);
    } else {
      const { error } = await supabase.from('watercrafts').insert([payload]);
      if (!error) {
        resetForm();
        fetchWatercrafts();
      } else console.error(error);
    }
  };

  const resetForm = () => {
    setNewWatercraft({
      name: '',
      type: 'Boats',
      seats: undefined,
      color: '',
      size: '',
      brand: '',
      images: [],
      description: '',
    });
    setCustomName('');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return;
    await supabase.from('watercrafts').delete().eq('id', id);
    fetchWatercrafts();
  };

  const handleEdit = (wc: Watercraft) => {
    setEditing(wc);
    setNewWatercraft({
      ...wc,
      images: Array.isArray(wc.images) ? wc.images : wc.images ? JSON.parse(wc.images) : [],
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Manage Watercrafts</h1>

      {/* FORM */}
      <div className="border p-4 mb-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">
          {editing ? 'Edit Watercraft' : 'Add New Watercraft'}
        </h2>

        <div className="grid gap-2 md:grid-cols-2">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full cursor-pointer"
            readOnly
            value={newWatercraft.name}
            onClick={() => setShowNameModal(true)}
          />

          {/* Type Input */}
          <input
            type="text"
            placeholder="Type"
            className="border p-2 w-full cursor-pointer"
            readOnly
            value={newWatercraft.type}
            onClick={() => setShowTypeModal(true)}
          />

          <input
            type="number"
            placeholder="Seats"
            className="border p-2"
            value={newWatercraft.seats ?? ''}
            onChange={(e) =>
              setNewWatercraft({ ...newWatercraft, seats: Number(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Color"
            className="border p-2"
            value={newWatercraft.color || ''}
            onChange={(e) =>
              setNewWatercraft({ ...newWatercraft, color: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Size"
            className="border p-2"
            value={newWatercraft.size || ''}
            onChange={(e) =>
              setNewWatercraft({ ...newWatercraft, size: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Brand"
            className="border p-2"
            value={newWatercraft.brand || ''}
            onChange={(e) =>
              setNewWatercraft({ ...newWatercraft, brand: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            className="border p-2 col-span-2"
            value={newWatercraft.description || ''}
            onChange={(e) =>
              setNewWatercraft({ ...newWatercraft, description: e.target.value })
            }
          />

          {/* Image Upload */}
          <div className="col-span-2">
            <input type="file" onChange={handleImageUpload} />
            {loading && <p>Uploading...</p>}
            <div className="flex gap-2 mt-2 flex-wrap">
              {newWatercraft.images?.map((url) => (
                <div key={url} className="relative">
                  <img src={url} className="h-24 w-32 object-cover rounded" />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-600 text-white rounded px-1"
                    onClick={() => removeImage(url)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded col-span-2"
            onClick={handleSubmit}
            type="button"
          >
            {editing ? 'Update Watercraft' : 'Add Watercraft'}
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="grid gap-4">
        {watercrafts.map((wc) => (
          <div
            key={wc.id}
            className="border p-4 rounded flex justify-between items-center shadow-sm"
          >
            <div className="flex items-center gap-4">
              {wc.images?.[0] && (
                <img
                  src={wc.images[0]}
                  className="h-24 w-32 object-cover rounded"
                />
              )}
              <div>
                <h3 className="font-bold">{wc.name}</h3>
                <p className="text-sm">Type: {wc.type}</p>
                <p className="text-sm">Seats: {wc.seats}</p>
                <p className="text-sm">Color: {wc.color}</p>
                <p className="text-sm">Size: {wc.size}</p>
                <p className="text-sm">Brand: {wc.brand}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => handleEdit(wc)}
                type="button"
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(wc.id!)}
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* NAME MODAL */}
      {showNameModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-2">Select Watercraft Name</h2>
            <div className="grid gap-2">
              {predefinedNames.map((name) => (
                <button
                  key={name}
                  className="border p-2 rounded hover:bg-gray-100"
                  onClick={() => {
                    setNewWatercraft({ ...newWatercraft, name });
                    setShowNameModal(false);
                  }}
                  type="button"
                >
                  {name}
                </button>
              ))}
              <div>
                <p className="text-sm font-semibold mt-2">Other:</p>
                <input
                  type="text"
                  placeholder="Enter custom name"
                  className="border p-2 w-full mt-1"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-blue-600 text-white w-full py-1 rounded mt-2"
                  onClick={() => {
                    if (customName.trim() !== '') {
                      setNewWatercraft({
                        ...newWatercraft,
                        name: customName.trim(),
                      });
                    }
                    setShowNameModal(false);
                  }}
                >
                  Use Custom Name
                </button>
              </div>
            </div>
            <button
              className="mt-3 text-red-600 font-semibold"
              onClick={() => setShowNameModal(false)}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* TYPE MODAL */}
      {showTypeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-2">Select Type</h2>
            {predefinedTypes.map((type) => (
              <button
                key={type}
                className="border p-2 rounded w-full hover:bg-gray-100 mb-2"
                onClick={() => {
                  setNewWatercraft({ ...newWatercraft, type });
                  setShowTypeModal(false);
                }}
                type="button"
              >
                {type}
              </button>
            ))}
            <button
              className="text-red-600 mt-2"
              onClick={() => setShowTypeModal(false)}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
