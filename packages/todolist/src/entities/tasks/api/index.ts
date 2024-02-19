import { PageMeta } from "@/shared/types/api";
import { CreateTaskDTO, Task } from "../model";
import { TaskBaseUrl } from "./const";

export const getTasks = () => {
  return fetch(TaskBaseUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json()) as Promise<{ data: Task[] } & PageMeta>;
};

export const createTask = (task: CreateTaskDTO): Promise<Task> => {
  return fetch(`${TaskBaseUrl}/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};

export const deleteTask = (id: string): Promise<Task> => {
  return fetch(`${TaskBaseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json());
};
