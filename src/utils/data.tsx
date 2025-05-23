export interface Property {
  id: string;
  title: string;
  type: 'riverfront' | 'inland';
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  features: string[];
  ecoFeatures: string[];
  smartFeatures: string[];
  images: string[];
  virtualTour?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const properties: Property[] = [
  {
    id: "p1",
    title: "Riverside Luxury Villa",
    type: "riverfront",
    price: 4850000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7200,
    address: "Trassaco",
    city: "Greater Accra",
    state: "GH",
    zipCode: "GA",
    description: "Nestled along the pristine waterfront, this magnificent villa offers unobstructed river views and direct access to your private dock. The architecture seamlessly blends modern luxury with timeless elegance, featuring floor-to-ceiling windows that bathe the interior in natural light and frame the spectacular water vistas. The spacious open-concept design includes a chef's kitchen with top-of-the-line appliances, a wine cellar, and multiple entertaining spaces that flow onto expansive terraces. The primary suite is a true sanctuary with a spa-like bathroom and a private balcony overlooking the water. The meticulously landscaped grounds include an infinity pool, outdoor kitchen, and fire pit area, perfect for enjoying the sunset over the river.",
    features: [
      "Private dock with boat lift",
      "Infinity pool overlooking the river",
      "Wine cellar with temperature control",
      "Home theater with state-of-the-art sound system",
      "Gourmet kitchen with marble countertops",
      "Outdoor entertainment area with full kitchen",
      "Three-car garage with EV charging stations"
    ],
    ecoFeatures: [
      "Solar panel system with battery storage",
      "Geothermal heating and cooling",
      "Smart water conservation system",
      "Energy-efficient appliances and windows",
      "Sustainable building materials"
    ],
    smartFeatures: [
      "Whole-home automation system",
      "Advanced security with camera monitoring",
      "Smart lighting and climate control",
      "Automated window treatments",
      "Voice-activated controls"
    ],
    images: [
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
    ],
    virtualTour: "https://www.example.com/virtualtour/riverside-villa",
    featured: true
  },
  {
    id: "p2",
    title: "Hillside Modern Mansion",
    type: "inland",
    price: 6250000,
    bedrooms: 6,
    bathrooms: 8,
    sqft: 8500,
    address: "Lagoon View Estate",
    city: "Sakumono",
    state: "GH",
    zipCode: "TM",
    description: "Perched atop the exclusive hills with panoramic city views, this architectural masterpiece represents the pinnacle of luxury living. The striking contemporary design features clean lines, dramatic angles, and an abundance of natural light through the expansive walls of glass. The seamless indoor-outdoor flow creates a serene living environment that takes full advantage of the Southern California climate. The property boasts a spectacular infinity pool that appears to merge with the horizon, a wellness wing with a gym, sauna, and massage room, plus a separate guest house for visitors. The primary suite occupies its own wing with dual bathrooms, expansive walk-in closets, and a private terrace with fireplace. State-of-the-art smart home technology controls everything from security to entertainment systems with effortless precision.",
    features: [
      "Panoramic city views from every room",
      "Infinity edge pool with adjacent spa",
      "Wine tasting room with custom storage",
      "Private wellness center with gym, sauna and yoga studio",
      "Gourmet kitchen with two islands",
      "Outdoor entertaining pavilion",
      "Four-car garage with car elevator"
    ],
    ecoFeatures: [
      "LEED-certified construction",
      "Rainwater harvesting system",
      "Green roof technology",
      "Solar-powered water heating",
      "Reclaimed materials throughout"
    ],
    smartFeatures: [
      "Biometric security access",
      "Automated environmental controls",
      "Smart glass technology",
      "Integrated audio-visual system",
      "Remote monitoring and control"
    ],
    images: [
      "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
    ],
    virtualTour: "https://www.example.com/virtualtour/hillside-mansion",
    featured: true
  },
  {
    id: "p3",
    title: "Waterfront Contemporary Estate",
    type: "riverfront",
    price: 5750000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6300,
    address: "Prampram",
    city: "Newport",
    state: "RI",
    zipCode: "02840",
    description: "This stunning waterfront property captures the essence of luxury coastal living with its sophisticated architectural design and premium finishes. Situated on a prime waterfront lot with 120 feet of water frontage and a private deep-water dock, this home is a boater's paradise. The open floor plan features a double-height great room with walls of glass overlooking the water, a chef's kitchen with custom cabinetry, and a primary suite with breathtaking water views. The outdoor spaces are equally impressive with a waterside infinity pool, multiple terraces, and a covered entertaining area with an outdoor kitchen and fireplace.",
    features: [
      "120 feet of water frontage",
      "Private deep-water dock with boat lift",
      "Waterside infinity pool and spa",
      "Chef's kitchen with premium appliances",
      "Temperature-controlled wine room",
      "Private boat house",
      "Multiple waterfront terraces"
    ],
    ecoFeatures: [
      "Energy-efficient building envelope",
      "Sustainable hardwood flooring",
      "Drought-resistant landscaping",
      "High-efficiency HVAC system",
      "Low-VOC materials throughout"
    ],
    smartFeatures: [
      "Integrated home automation",
      "Smart dock monitoring system",
      "Automated shade system",
      "Wireless audio throughout",
      "Advanced security with water access monitoring"
    ],
    images: [
      "https://images.pexels.com/photos/2873064/pexels-photo-2873064.jpeg",
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg",
      "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg",
      "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg"
    ],
    virtualTour: "https://www.example.com/virtualtour/waterfront-estate",
    featured: true
  },
  {
    id: "p4",
    title: "Mountain View Luxury Retreat",
    type: "inland",
    price: 4200000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5800,
    address: "12 Mountain Crest Road",
    city: "Aspen",
    state: "CO",
    zipCode: "81611",
    description: "Surrounded by the majestic beauty of the mountains, this luxury retreat offers an unparalleled living experience in one of the most sought-after locations. The architecture harmoniously blends with the natural surroundings, using stone, timber, and glass to create a warm yet sophisticated ambiance. The great room features a soaring ceiling with exposed beams and a dramatic stone fireplace, while walls of windows showcase the breathtaking mountain views. The gourmet kitchen is a chef's dream with custom cabinetry and top-tier appliances. The primary suite includes a sitting area, private deck, and a spa-inspired bathroom. Additional highlights include a media room, wine cellar, and a separate guest apartment above the three-car garage.",
    features: [
      "Panoramic mountain views",
      "Stone and timber construction",
      "Great room with floor-to-ceiling fireplace",
      "Chef's kitchen with breakfast nook",
      "Home office with custom built-ins",
      "Media room with theater seating",
      "Separate guest apartment"
    ],
    ecoFeatures: [
      "Passive solar design",
      "Radiant floor heating",
      "Locally-sourced building materials",
      "High-performance insulation",
      "Energy-efficient windows"
    ],
    smartFeatures: [
      "Smart home security system",
      "Automated climate control",
      "Programmable lighting scenes",
      "Integrated sound system",
      "Remote access and monitoring"
    ],
    images: [
      "https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg"
    ],
    virtualTour: "https://www.example.com/virtualtour/mountain-retreat"
  },
  {
    id: "p5",
    title: "Waterside Modern Masterpiece",
    type: "riverfront",
    price: 7950000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8800,
    address: "555 Lakeshore Drive",
    city: "Lake Tahoe",
    state: "NV",
    zipCode: "89449",
    description: "This extraordinary lakefront residence represents the pinnacle of modern architectural design, offering a once-in-a-lifetime opportunity to own a true masterpiece on the water. Every aspect of this home has been meticulously crafted to maximize the breathtaking views while providing the ultimate in luxury living. The dramatic entry leads to a spectacular great room with 30-foot ceilings and walls of glass framing the lake and mountain vistas. The custom chef's kitchen features exotic stone countertops, bespoke cabinetry, and professional-grade appliances. Each bedroom is a private retreat with en-suite bathrooms and most with lake views. The lower level includes a state-of-the-art home theater, wine cellar, and gym. Outside, the infinity-edge pool appears to merge with the lake, while the extensive terraces, outdoor kitchen, and fire features create the perfect setting for entertaining.",
    features: [
      "200 feet of lake frontage with private beach",
      "Custom boathouse with two slips",
      "Infinity-edge pool and hot tub",
      "Outdoor kitchen and multiple terraces",
      "Home theater with professional sound system",
      "Temperature-controlled wine cellar",
      "Elevator serving all floors"
    ],
    ecoFeatures: [
      "Geothermal heating and cooling",
      "Solar panel array",
      "Advanced water filtration system",
      "Sustainable and eco-friendly materials",
      "Energy-efficient building systems"
    ],
    smartFeatures: [
      "Comprehensive home automation",
      "Integrated audio-visual throughout",
      "Advanced security with cameras",
      "Automated lighting and shade control",
      "Smart dock and boathouse monitoring"
    ],
    images: [
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
      "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
      "https://images.pexels.com/photos/2635039/pexels-photo-2635039.jpeg"
    ],
    virtualTour: "https://www.example.com/virtualtour/lakeside-masterpiece"
  },
  {
    id: "p6",
    title: "Urban Penthouse with Skyline Views",
    type: "inland",
    price: 9200000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5500,
    address: "100 Skyline Avenue, Penthouse A",
    city: "New York",
    state: "NY",
    zipCode: "10022",
    description: "Occupying the entire top floor of one of the city's most prestigious buildings, this spectacular penthouse offers unrivaled luxury and panoramic city views from every room. The residence is accessed via a private elevator that opens to a grand gallery leading to the magnificent living areas. The expansive living room features 12-foot ceilings, a fireplace, and floor-to-ceiling windows showcasing dramatic city and river views. The formal dining room easily accommodates large gatherings, while the chef's kitchen is equipped with the finest appliances and finishes. The lavish primary suite includes a sitting area, two dressing rooms, and a sumptuous bathroom with a soaking tub positioned to enjoy the views. Three additional bedroom suites, a library, media room, and staff quarters complete this exceptional home. A wrap-around terrace offers multiple outdoor living spaces with breathtaking vistas of the city skyline.",
    features: [
      "Private elevator access",
      "360-degree city views",
      "Wrap-around terrace with outdoor kitchen",
      "Chef's kitchen with breakfast area",
      "Library with custom millwork",
      "Media room with wet bar",
      "Staff quarters with separate entrance"
    ],
    ecoFeatures: [
      "Energy-efficient appliances",
      "Sustainable building materials",
      "Water-saving fixtures",
      "High-performance windows",
      "Smart energy management"
    ],
    smartFeatures: [
      "Whole-home automation system",
      "Advanced security with doorman integration",
      "Climate and lighting control",
      "Motorized window treatments",
      "Integrated audio-visual systems"
    ],
    images: [
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
    ],
    virtualTour: "https://www.example.com/virtualtour/urban-penthouse"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Obed ",
    title: "Waterfront Property Buyers",
    quote: "EDRIC Limited provided an exceptional experience from start to finish. Their understanding of luxury riverfront properties is unmatched. They helped us find our dream home with all the yacht amenities we desired.",
    image: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg"
  },
  {
    id: "t2",
    name: "Seyram",
    title: "Eco-Luxury Home Owner",
    quote: "I was impressed by EDRIC Limited' commitment to showcasing properties with sophisticated eco-friendly features. They found me a home that perfectly balances luxury living with environmental responsibility.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: "t3",
    name: "Miriam",
    title: "Hillside Estate Clients",
    quote: "The team at EDRIC Limited understood exactly what we were looking for in our inland property. Their attention to detail and knowledge of smart home technology made our buying experience seamless.",
    image: "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg"
  }
];