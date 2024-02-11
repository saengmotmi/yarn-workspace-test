import { CreateUserDTO, LoginUserDTO, User } from "../model";
import { UserBaseUrl } from "./const";

export const createUser = (user: CreateUserDTO) => {
  return fetch(UserBaseUrl + "/signup", {
    method: "POST",
    body: JSON.stringify(user),
  }).then((res) => res.json()) as Promise<User>;
};

export const getAuthMe = (user: LoginUserDTO) => {
  return fetch(UserBaseUrl + "/login", {
    method: "POST",
    body: JSON.stringify(user),
  }).then((res) => res.json()) as Promise<User>;
};
