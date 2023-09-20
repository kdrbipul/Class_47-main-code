import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import Header from "../Shared/Header/Header";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            // {
            //     path:'/home',
            //     element:<Header />
            // },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    }
])


export default router;