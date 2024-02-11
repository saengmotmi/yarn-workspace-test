import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "@/pages/login";
import Todos from "@/pages/todos";
import SignUp from "@/pages/signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Todos />}
        loader={Todos.loader}
        action={Todos.action}
      />
      <Route path="/login" element={<Login />} action={Login.action} />
      <Route path="/signup" element={<SignUp />} action={SignUp.action} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
