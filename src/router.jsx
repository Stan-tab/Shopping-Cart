import { createBrowserRouter } from "react-router";
import App from "./App";
import { loader as appLoader } from "./App";
import Error from "./rootes/Error";
import Market from "./rootes/Market";
import { loader as marketLoader } from "./rootes/Market";
import Card from "./rootes/Card";
import { loader as cardLoad } from "./rootes/Card";
import Cart from "./rootes/Cart";

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
          { path: "Jewelery", element: <Market />, loader: marketLoader },
          { path: "Electronics", element: <Market />, loader: marketLoader },
          {
            path: "Women's clothing",
            element: <Market />,
            loader: marketLoader,
          },
          { path: "Men's clothing", element: <Market />, loader: marketLoader },
          { path: "product/:id", element: <Card />, loader: cardLoad },
          { path: "cart", element: <Cart /> },
        ],
      },
    ],
  },
]);

export default router;
