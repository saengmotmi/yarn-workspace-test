export const host = "http://localhost";
export const port = 8080;

export const TaskBaseUrl =
  "https://hono-todolist.ohjtack.workers.dev" + "/tasks" ??
  `${host}:${port}/tasks`;
