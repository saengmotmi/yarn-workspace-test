import { app } from "./bootstrap";
import { getSupabaseClient } from "./utils";

app.get("/", (c) => {
  // const supabase = getSupabaseClient(c);

  return c.text("Hello Hono!");
});

app.post("/users/signup", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await supabase.auth.signUp({
    email: body.email,
    password: body.password,
  });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.post("/users/login", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

export default app;
