// src/pages/admin/index.tsx

import { Link } from "react-router-dom";
import { Home, Building, Anchor, Layers, Users } from "lucide-react";

const adminLinks = [
  {
    name: "Manage Properties",
    icon: <Building className="w-7 h-7 text-gold-600" />,
    to: "/admin/properties",
    desc: "Add, edit, or remove real estate listings.",
  },
  {
    name: "Manage Boats",
    icon: <Anchor className="w-7 h-7 text-blue-500" />,
    to: "/admin/boats",
    desc: "Showcase and update water vehicles.",
  },
  {
    name: "Manage Projects",
    icon: <Layers className="w-7 h-7 text-emerald-600" />,
    to: "/admin/projects",
    desc: "Track project progress and investor details.",
  },
  {
    name: "Investor Leads",
    icon: <Users className="w-7 h-7 text-charcoal-700" />,
    to: "/admin/investors",
    desc: "Review and respond to investor inquiries.",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2 text-center">
        <span className="text-gold-600">Admin</span> Dashboard
      </h1>
      <p className="mb-10 text-slate-500 text-center text-lg">
        Welcome! Choose what you want to manage today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {adminLinks.map((link) => (
          <Link
            to={link.to}
            key={link.to}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl border border-slate-100 p-7 flex flex-col items-start transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-slate-50 rounded-lg">{link.icon}</div>
              <span className="text-xl font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                {link.name}
              </span>
            </div>
            <span className="text-sm text-slate-500">{link.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
