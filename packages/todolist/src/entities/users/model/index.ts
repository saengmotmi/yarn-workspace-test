import { Tables } from "hono-todolist/database.types";

export type User = Tables<"users">;

export type LoginUserDTO = Pick<User, "email" | "password">;

export type CreateUserDTO = Omit<User, "id">;
