import { createClient } from "@supabase/supabase-js";

// Create a new client using the dev env values.
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export default supabase;
