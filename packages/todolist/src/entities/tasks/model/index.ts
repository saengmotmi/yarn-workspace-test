import { Tables } from "hono-todolist/database.types";

export type Task = Tables<"tasks">;

export type CreateTaskDTO = Omit<Tables<"tasks">, "id" | "user_id">;
