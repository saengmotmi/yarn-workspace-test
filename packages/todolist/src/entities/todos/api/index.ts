import { PageMeta } from "@/shared/types/api";
import { CreateTodoDTO, Todo } from "../model";
import { TodoBaseUrl } from "./const";

export const getTodos = () => {
  return fetch(TodoBaseUrl).then((res) => res.json()) as Promise<
    { todos: Todo[] } & PageMeta
  >;
};

export const getTodoById = (id: number): Promise<Todo> => {
  return fetch(`${TodoBaseUrl}/${id}`).then((res) => res.json());
};

export const getTodosByUserId = (
  userId: number
): Promise<{ todos: Todo[] } & PageMeta> => {
  return fetch(`${TodoBaseUrl}/user/${userId}`).then((res) => res.json());
};

export const createTodo = (todo: CreateTodoDTO): Promise<Todo> => {
  return fetch(`${TodoBaseUrl}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
};

export const deleteTodo = (id: string): Promise<Todo> => {
  return fetch(`${TodoBaseUrl}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
