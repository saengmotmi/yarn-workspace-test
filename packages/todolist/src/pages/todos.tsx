import { createTodo, deleteTodo, getTodos } from "@/entities/todos/api";
import { Todo } from "@/entities/todos/model";
import { ActionFunctionArgs, Form, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const { todos } = await getTodos();

  return todos;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST":
      const createForm = await request.formData();

      return createTodo({
        todo: createForm.get("todo") as string,
        completed: false,
        userId: 1,
      });
    case "DELETE":
      const deleteForm = await request.formData();
      const id = deleteForm.get("id") as string;

      return deleteTodo(id);

    default: {
      throw new Response("", { status: 405 });
    }
  }
};

const Todos = () => {
  const todos = useLoaderData() as Todo[];

  return (
    <div>
      <h1>Todos</h1>
      <Form action="/" method="POST">
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </Form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Form action="/" method="DELETE">
              <span>{todo.todo}</span>
              <button type="submit" name="id" value={todo.id}>
                -
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

Todos.loader = loader;
Todos.action = action;
