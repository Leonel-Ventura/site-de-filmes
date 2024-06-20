import {createBrowserRouter , RouterProvider,} from "react-router-dom";
import Home from "./home";
import Detalhes from "./detalhes";
import Pesquisa from "./pesquisa";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/pesquisa/:value",
      element: <Pesquisa/>,
    },
    {
      path: "/detalhes/:id",
      element: <Detalhes/>,
    },
  ]);

export default function RootRoute() {
    return <RouterProvider router={router} />
}