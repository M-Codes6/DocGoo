// user-auth/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase project URL and anon key
const supabaseUrl = 'https://mjhimbyhsukausbwkucj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qaGltYnloc3VrYXVzYndrdWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NzYwODIsImV4cCI6MjA0NDU1MjA4Mn0.c-TQPWXkQ9cha6qqioM4fF2NVyNVCW2WpxA1rm_2e8s';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anon key. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
