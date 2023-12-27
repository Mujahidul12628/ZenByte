import React from 'react';

import {
    createBrowserRouter,
} from "react-router-dom";


import MaainLayout from '../Common/MainLayout/MaainLayout';
import Home from '../Component/Home/Home';
import ErrorPAge from '../Common/ErrorPage/ErrorPAge';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MaainLayout></MaainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            }
            
        ]
    },
    
    {
        path: '*',
        element: <ErrorPAge></ErrorPAge>
    }
]);

export default router;