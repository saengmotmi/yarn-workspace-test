import { app } from "./bootstrap";
import { getSupabaseClient } from "./utils";

app.get("/tasks", async (c) => {
  const supabase = getSupabaseClient(c);

  const { data, error } = await supabase.from("tasks").select("*");

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.post("/tasks/add", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await supabase.from("tasks").insert([body]);

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.delete("/tasks/:id", async (c) => {
  const supabase = getSupabaseClient(c);

  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .match({ id: c.req.param("id") });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.put("/tasks/:id", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await supabase
    .from("tasks")
    .update(body)
    .match({ id: c.req.param("id") });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
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
