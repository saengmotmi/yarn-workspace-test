import { AuthUserDTO, UserSession } from "../model";
import { UserBaseUrl } from "./const";

export const createUser = (user: AuthUserDTO) => {
  return fetch(UserBaseUrl + "/signup", {
    method: "POST",
    body: JSON.stringify(user),
  }).then((res) => res.json()) as Promise<UserSession>;
};

export const getAuthMe = (user: AuthUserDTO) => {
  return fetch(UserBaseUrl + "/login", {
    method: "POST",
    body: JSON.stringify(user),
  }).then((res) => res.json()) as Promise<UserSession>;
};
