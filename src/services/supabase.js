import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ndbnhirljvftguqtcevw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kYm5oaXJsanZmdGd1cXRjZXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMTExODYsImV4cCI6MjA5MDU4NzE4Nn0.ossNzJfdOK7BXNh7ut82ePXz4ZEwLroWnNbJThrg-e8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
