import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "@/pages/login";
import Tasks from "@/pages/tasks";
import SignUp from "@/pages/signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Tasks />}
        loader={Tasks.loader}
        action={Tasks.action}
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
