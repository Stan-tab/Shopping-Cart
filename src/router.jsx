import { createBrowserRouter } from "react-router";
import App from "./App";
import { loader as appLoader } from "./App";
import Error from "./rootes/Error";
import Market from "./rootes/Market";
import Card from "./rootes/Card";
import { loader as cardLoad } from "./rootes/Card";

const router = createBrowserRouter([
  {
    path: "/Shopping-Cart",
    element: <App />,
    loader: appLoader,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Market /> },
          { path: "product/:id", element: <Card />, loader: cardLoad},
        ],
      },
    ],
  },
]);

export default router;
