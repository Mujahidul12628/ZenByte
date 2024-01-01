import React from 'react';

import {
    createBrowserRouter,
} from "react-router-dom";


import MaainLayout from '../Common/MainLayout/MaainLayout';
import Home from '../Component/Home/Home';
import ErrorPAge from '../Common/ErrorPage/ErrorPAge';
import Login from '../Common/Login/Login';
import Register from '../Common/Register/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MaainLayout></MaainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>
              },
              {
                path: "register",
                element: <Register></Register>
              },
            
        ]
    },
    
    {
        path: '*',
        element: <ErrorPAge></ErrorPAge>
    }
]);

export default router;