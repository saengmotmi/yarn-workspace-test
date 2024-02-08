import { getTodos } from "@/entities/todos/api";
import { Todo } from "@/entities/todos/model";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const { todos } = await getTodos();

  return todos;
};

const Todos = () => {
  const todos = useLoaderData() as Todo[];

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

Todos.loader = loader;
