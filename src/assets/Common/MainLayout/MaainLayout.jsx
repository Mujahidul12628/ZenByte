/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

import { AuthContext } from "../../Provider/AuthProvider";


import Loader from "../Loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";




const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div className="p-0 m-0">
            {loading ? (
                <Loader></Loader>
            ) : (
                <>
                    <NavBar></NavBar>
                    
                    <div className='min-h-[calc(100vh-290px)]'>
                        <Outlet />
                    </div>
                    <Footer></Footer>
                    <ToastContainer></ToastContainer>
                </>
            )}
        </div>
    );

};

export default MainLayout;

