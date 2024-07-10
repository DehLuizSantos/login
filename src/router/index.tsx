import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LoginPage />
      </>
    )
  },
 
]);

export function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
