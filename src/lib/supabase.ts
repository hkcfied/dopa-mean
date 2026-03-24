import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export async function getInstallationCount(): Promise<number | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("installation_stats")
      .select("count")
      .single();
    if (error) return null;
    return data?.count ?? null;
  } catch {
    return null;
  }
}

const INSTALL_KEY = "dopamean_tracked";

export async function trackInstallation(): Promise<void> {
  if (!supabase) return;
  if (localStorage.getItem(INSTALL_KEY)) return;
  try {
    await supabase.rpc("increment_installations");
    localStorage.setItem(INSTALL_KEY, "1");
  } catch {
    // silently fail
  }
}
