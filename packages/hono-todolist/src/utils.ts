import { createClient } from "@supabase/supabase-js";
import { Context } from "hono";
import { env } from "hono/adapter";

export const getSupabaseClient = (c: Context) => {
  const SUPABASE_URL = env(c).SUPABASE_URL;
  const SUPABASE_ANON_KEY = env(c).SUPABASE_ANON_KEY;
  const authHeader = c.req.header("Authorization");

  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    ...(authHeader && {
      global: { headers: { Authorization: authHeader } },
    }),
  });
};
