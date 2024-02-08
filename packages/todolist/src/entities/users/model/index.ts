export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export type LoginUserDTO = Pick<User, "username" | "email">;

export type CreateUserDTO = Omit<User, "id">;
