import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/ui/Button";

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

export default function WatercraftsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCategory = location.state?.selectedCategory || null;

  const [watercrafts, setWatercrafts] = useState<Watercraft[]>([]);
  const [displayedCrafts, setDisplayedCrafts] = useState<Watercraft[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [loading, setLoading] = useState(true);

  const categories = ["Boats", "Yachts", "Jet Skis", "Kayaks"];

  const fetchWatercrafts = async () => {
    const { data, error } = await supabase.from("watercrafts").select("*");
    if (error) console.error(error);
    else {
      setWatercrafts(data);
      if (initialCategory) {
        setDisplayedCrafts(data.filter((c) => c.type === initialCategory));
      } else {
        setDisplayedCrafts(data);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWatercrafts();
  }, []);

  const handleSelect = (category: string | null) => {
    setSelectedCategory(category);
    if (category) setDisplayedCrafts(watercrafts.filter(c => c.type === category));
    else setDisplayedCrafts(watercrafts);
  };

  if (loading) return <p className="p-10 text-center">Loading...</p>;

  return (
    <section className="section-padding bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-charcoal-800 mb-2">
            Watercrafts Collection
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Select a watercraft category to see all available images and details.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "primary" : "outline"}
                onClick={() => handleSelect(cat)}
              >
                {cat}
              </Button>
            ))}
            <Button variant="outline" onClick={() => handleSelect(null)}>
              All
            </Button>
          </div>
        </div>

        {/* Watercraft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCrafts.map((craft) => (
            <div
              key={craft.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Text Section */}
              <div className="p-6">
                <h2
                  className="text-2xl font-serif text-charcoal-800 mb-2 cursor-pointer hover:underline"
                  onClick={() => navigate(`/watercrafts/${craft.id}`)}
                >
                  {craft.name}
                </h2>
                <p className="text-slate-600 mb-4">{craft.description || craft.type}</p>
                <div className="text-sm space-y-1">
                  {craft.brand && <p>Brand: {craft.brand}</p>}
                  {craft.size && <p>Size: {craft.size}</p>}
                  {craft.color && <p>Color: {craft.color}</p>}
                  {craft.seats && <p>Seats: {craft.seats}</p>}
                </div>
              </div>

              {/* Images Section */}
                   <div className="flex flex-col gap-2 p-4">
                     {craft.images?.map((img, i) => (
                      <img
                           key={i}
                           src={img}
                         alt={`${craft.name} ${i}`}
                        className="w-full h-72 object-cover rounded cursor-pointer"
                       onClick={() => navigate(`/watercrafts/${craft.id}`)}
                                                                           />
                                     )) || (
                        <div className="w-full h-72 bg-gray-200 flex items-center justify-center rounded">
                               No Images
                                  </div>
      )}
                     </div>

              {/* View Details Button Beneath Images */}
              <div className="p-6 text-center">
                <Button onClick={() => navigate(`/watercrafts/${craft.id}`)}>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
