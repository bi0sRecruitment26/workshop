// Fill these in with your NEW Supabase project's values
// (Settings -> API in your Supabase dashboard).
//
// The anon/public key is SAFE to expose in client-side code / a public
// GitHub repo -- that is how Supabase is designed to work. Security comes
// from the Row Level Security policies and the capacity-limiting trigger
// in supabase-schema-v3.sql, not from hiding this key. Do NOT put the
// "service_role" key here -- this project has no backend, so that key
// should never appear in this repo at all.

const SUPABASE_URL = "https://mrctbgkxpzpwtvineyjt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_iAENynI4HQ36oSqPeUgaCQ_UzaHk8PR";

// Same VPA as above, shown as plain text for laptop users -- upi:// links
// only open an app on a phone, so this is the manual fallback.
const UPI_ID = "paytm.s30z8sz@pty";