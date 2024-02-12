export const host = "http://localhost";
export const port = 8080;

export const UserBaseUrl =
  "https://hono-todolist.ohjtack.workers.dev" + "/users" ??
  `${host}:${port}/users`;
