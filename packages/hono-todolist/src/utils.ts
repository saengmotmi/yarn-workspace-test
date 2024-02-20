import { createClient } from "@supabase/supabase-js";
import { Context } from "hono";
import { env } from "hono/adapter";

export const getSupabaseClient = async (c: Context) => {
  const SUPABASE_URL = env(c).SUPABASE_URL;
  const SUPABASE_ANON_KEY = env(c).SUPABASE_ANON_KEY;
  const authHeader = c.req.header("Authorization");

  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    ...(authHeader && {
      global: { headers: { Authorization: authHeader } },
    }),
  });

  const user = await client.auth.getUser(authHeader?.split(" ")[1]);

  return { client, user };
};
