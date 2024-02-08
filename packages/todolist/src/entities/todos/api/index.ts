import { PageMeta } from "@/shared/types/api";
import { CreateTodoDTO, Todo } from "../model";
import { TodoBaseUrl } from "./const";

export const getTodos = () => {
  return fetch(TodoBaseUrl).then((res) => res.json()) as Promise<
    { todos: Todo[] } & PageMeta
  >;
};

export const getTodoById = (id: number) => {
  return fetch(`${TodoBaseUrl}/${id}`).then((res) =>
    res.json()
  ) as Promise<Todo>;
};

export const getTodosByUserId = (userId: number) => {
  return fetch(`${TodoBaseUrl}/user/${userId}`).then((res) =>
    res.json()
  ) as Promise<{ todos: Todo[] } & PageMeta>;
};

export const createTodo = (todo: CreateTodoDTO) => {
  return fetch(TodoBaseUrl, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((res) => res.json()) as Promise<Todo>;
};

export const deleteTodo = (id: number) => {
  return fetch(`${TodoBaseUrl}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json()) as Promise<Todo>;
};
