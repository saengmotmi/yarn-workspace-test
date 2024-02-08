import { CreateUserDTO, LoginUserDTO, User } from "../model";
import { UserBaseUrl } from "./const";

export const createUser = (user: CreateUserDTO) => {
  return fetch(UserBaseUrl, {
    method: "POST",
    body: JSON.stringify(user),
  }).then((res) => res.json()) as Promise<User>;
};

export const getAuthMe = () => {
  return fetch(UserBaseUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json()) as Promise<User>;
};

export const getAuthUser = (user: LoginUserDTO) => {
  return fetch(`${UserBaseUrl}/auth`, {
    headers: {
      method: "POST",
    },
    body: JSON.stringify({ user }),
  }).then((res) => res.json()) as Promise<User>;
};
