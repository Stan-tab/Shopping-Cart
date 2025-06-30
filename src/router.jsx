import { createBrowserRouter } from "react-router";
import App from "./App";
import Error from "./rootes/Error";

const router = createBrowserRouter([
  {
    path: "/Shopping-Cart",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
            
        ]
      },
    ],
  },
]);

export default router;
