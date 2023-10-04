import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/> 
            <Outlet/>
        </div>
    ) 
}

const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children: [
        {
            path:"/",
            element: <Body/>
        },
        {
        path:"/about",
        element: <About/>
        },
        {
        path: "/contactus",
        element: <Contact/>
        }
    ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(<AppLayout/>) 