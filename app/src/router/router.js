import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import About from "../views/About";
import PageNotFound from "../views/PageNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <PageNotFound/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
])