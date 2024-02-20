import { app } from "./bootstrap";
import { getSupabaseClient } from "./utils";

app.get("/tasks", async (c) => {
  const { client, user } = await getSupabaseClient(c);

  const { data, error } = await client
    .from("tasks")
    .select("*")
    .match({ user_id: user.data.user?.id });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.post("/tasks/add", async (c) => {
  const { client, user } = await getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await client
    .from("tasks")
    .insert([{ ...body, user_id: user.data.user?.id }])
    .select();

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.delete("/tasks/:id", async (c) => {
  const { client, user } = await getSupabaseClient(c);

  const { data, error } = await client
    .from("tasks")
    .delete()
    .match({ id: c.req.param("id"), user_id: user.data.user?.id })
    .select();

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.put("/tasks/:id", async (c) => {
  const { client, user } = await getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await client
    .from("tasks")
    .update({ ...body, user_id: user.data.user?.id })
    .match({ id: c.req.param("id"), user_id: user.data.user?.id })
    .select();

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.patch("/tasks/:id", async (c) => {
  const { client, user } = await getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await client
    .from("tasks")
    .update({ ...body, user_id: user.data.user?.id })
    .match({ id: c.req.param("id"), user_id: user.data.user?.id })
    .select();

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.post("/users/signup", async (c) => {
  const { client, user } = await getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await client.auth.signUp({
    email: body.email,
    password: body.password,
  });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

app.post("/users/login", async (c) => {
  const { client } = await getSupabaseClient(c);

  const body = await c.req.json();

  const { data, error } = await client.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  if (error) {
    return c.json({ error: error.message });
  }
  return c.json({ data });
});

export default app;
