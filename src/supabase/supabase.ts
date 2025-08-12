/**
 * supabase.ts
 *
 * Create a localised supabase component
 * to be passed around the app.
 *
 * Created 12-8-25
 */

import { createClient } from "@supabase/supabase-js";

// Create a new client using the dev env values.
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export default supabase;
