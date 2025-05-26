import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function AdminInvestors() {
  const [leads, setLeads] = useState<any[]>([]);

  const fetchLeads = async () => {
    const { data, error } = await supabase.from('investor_leads').select('*');
    if (!error) setLeads(data);
  };

  useEffect(() => { fetchLeads(); }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Investor Leads</h2>
      <div className="space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {lead.name}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Phone:</strong> {lead.phone}</p>
            <p><strong>Message:</strong> {lead.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
