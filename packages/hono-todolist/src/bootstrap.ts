import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";

export type Bindings = {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
};

export const app = new Hono<{ Bindings: Bindings }>();

app.use("*", cors());
app.use(prettyJSON());
