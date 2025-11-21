import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface Watercraft {
  id: number;
  name: string;
  type: string;
  seats?: number;
  color?: string;
  size?: string;
  brand?: string;
  images?: string[];
  description?: string;
}

export default function WatercraftDetailPage() {
  const { id } = useParams();
  const [watercraft, setWatercraft] = useState<Watercraft | null>(null);

  const fetchWatercraft = async () => {
    const { data, error } = await supabase
      .from("watercrafts")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) setWatercraft(data);
  };

  useEffect(() => {
    fetchWatercraft();
  }, []);

  if (!watercraft) return <p className="p-10 text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{watercraft.name}</h1>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {watercraft.images?.map(img => (
          <img
            key={img}
            src={img}
            className="w-full h-64 object-cover rounded"
          />
        ))}
      </div>

      {/* Details */}
      <div className="space-y-2">
        <p><strong>Type:</strong> {watercraft.type}</p>
        {watercraft.brand && <p><strong>Brand:</strong> {watercraft.brand}</p>}
        {watercraft.size && <p><strong>Size:</strong> {watercraft.size}</p>}
        {watercraft.color && <p><strong>Color:</strong> {watercraft.color}</p>}
        {watercraft.seats && <p><strong>Seats:</strong> {watercraft.seats}</p>}
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="mt-2 text-gray-700">{watercraft.description}</p>
      </div>
    </div>
  );
}
