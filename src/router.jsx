import { createBrowserRouter } from "react-router";
import App from "./App";
import Error from "./rootes/Error";
import Market from "./rootes/Market";

const router = createBrowserRouter([
  {
    path: "/Shopping-Cart",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [{ index: true, element: <Market /> }],
      },
    ],
  },
]);

export default router;
