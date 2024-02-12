import { getAuthMe } from "@/entities/users/api";
import { ActionFunctionArgs, Form } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST":
      const loginForm = await request.formData();

      const { data } = await getAuthMe({
        email: loginForm.get("email") as string,
        password: loginForm.get("password") as string,
      });
      localStorage.setItem("token", data.session.access_token);
      return data;

    default: {
      throw new Response("", { status: 405 });
    }
  }
};

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form action="/login" method="POST">
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Login;

Login.action = action;
