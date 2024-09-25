import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import {router} from "./app/routes.tsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router} />
)
