import { Context } from "hono";
import { app } from "./bootstrap";
import { getSupabaseClient } from "./utils";

const getUser = async (
  supabase: ReturnType<typeof getSupabaseClient>,
  c: Context
) => {
  const authHeader = c.req.header("Authorization");
  const user = await supabase.auth.getUser(authHeader?.split(" ")[1]);
  return user;
};

app.get("/tasks", async (c) => {
  const supabase = getSupabaseClient(c);

  const user = await getUser(supabase, c);

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .match({ user_id: user.data.user?.id });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.post("/tasks/add", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();
  const user = await getUser(supabase, c);

  const { data, error } = await supabase
    .from("tasks")
    .insert([{ ...body, user_id: user.data.user }]);

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.delete("/tasks/:id", async (c) => {
  const supabase = getSupabaseClient(c);

  const user = await getUser(supabase, c);

  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .match({ id: c.req.param("id"), user_id: user.data.user?.id });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.put("/tasks/:id", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();
  const user = await getUser(supabase, c);

  const { data, error } = await supabase
    .from("tasks")
    .update({ ...body, user_id: user.data.user?.id })
    .match({ id: c.req.param("id") });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.patch("/tasks/:id", async (c) => {
  const supabase = getSupabaseClient(c);

  const body = await c.req.json();
  const user = await getUser(supabase, c);

  const { data, error } = await supabase
    .from("tasks")
    .upsert(body)
    .match({ id: c.req.param("id"), user_id: user.data.user?.id });

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
