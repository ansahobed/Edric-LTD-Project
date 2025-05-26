import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dvynyyvlwscdmjszyiuc.supabase.co'; // ⬅️ REPLACE
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2eW55eXZsd3NjZG1qc3p5aXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5OTk5ODUsImV4cCI6MjA2MzU3NTk4NX0.1OCR31qHDmcbC-aT48c0KFl_xnKkb8jGQjVfFp5RuNo'; // ⬅️ REPLACE

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

