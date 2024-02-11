import { createUser } from "@/entities/users/api";
import { ActionFunctionArgs, Form } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST":
      const signUpForm = await request.formData();

      return createUser({
        email: signUpForm.get("email") as string,
        password: signUpForm.get("password") as string,
      });

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
