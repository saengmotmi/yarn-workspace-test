import { createUser } from "@/entities/users/api";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST":
      const signUpForm = await request.formData();

      const { data } = await createUser({
        email: signUpForm.get("email") as string,
        password: signUpForm.get("password") as string,
      });
      localStorage.setItem("token", data.session.access_token);

      return redirect("/");
    default: {
      throw new Response("", { status: 405 });
    }
  }
};

const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <Form action="/signup" method="POST">
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default SignUp;

SignUp.action = action;
