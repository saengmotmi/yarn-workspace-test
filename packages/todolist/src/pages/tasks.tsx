import { createTask, deleteTask, getTasks } from "@/entities/tasks/api";
import { Task } from "@/entities/tasks/model";
import { ActionFunctionArgs, Form, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const { data } = await getTasks();

  return data || [];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST":
      const createForm = await request.formData();

      return createTask({
        completed: false,
        due_date: null,
        task_name: createForm.get("task_name") as string,
      });
    case "DELETE":
      const deleteForm = await request.formData();
      const id = deleteForm.get("id") as string;

      return deleteTask(id);

    default: {
      throw new Response("", { status: 405 });
    }
  }
};

const Tasks = () => {
  const task = useLoaderData() as Task[];

  return (
    <div>
      <h1>Tasks</h1>
      <Form action="/" method="POST">
        <input type="text" name="task_name" />
        <button type="submit">Add</button>
      </Form>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            <Form action="/" method="DELETE">
              <span>{task.task_name}</span>
              <button type="submit" name="id" value={task.id}>
                -
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

Tasks.loader = loader;
Tasks.action = action;
