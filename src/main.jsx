import * as ReactDOM from "react-dom/client";
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Contact,{
    loader as contactLoader,
} from "./routes/contact";
import Root, { loader as rootLoader, action as rootAction,} from "./routes/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        action: rootAction,
        loader: rootLoader,

        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
        ],
    },
    {
        path: "contacts/:contactId",
        element: <Contact/>,
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);