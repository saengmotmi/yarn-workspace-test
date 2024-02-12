import { Tables } from "hono-todolist/database.types";
import type { Session } from "@supabase/supabase-js";

export type User = Tables<"users">;

export type UserSession = {
  data: {
    user: Session["user"];
    session: Session;
  };
};

export type AuthUserDTO = Pick<User, "email" | "password">;
