import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "@/pages/login";
import Todos from "@/pages/todos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Todos />} loader={Todos.loader} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
