import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kquqkptdkhwofmsmqfue.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdXFrcHRka2h3b2Ztc21xZnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MjM3MjEsImV4cCI6MjAzNzk5OTcyMX0.21EvzpO1dnSiHEFYxTVzEtrpGffDz7ai1_iNEsCQN0c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
