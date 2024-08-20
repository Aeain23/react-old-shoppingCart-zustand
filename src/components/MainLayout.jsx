import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Toaster 
    position="top-center"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
    // Define default options
    className: '',
    duration: 1000,


    // Default options for specific types
    // success: {
    //   duration: 2000,
    //   theme: {
    //     primary: 'green',
    //     secondary: 'black',
    //   },
    // },
  }}/>
    </>
   
  );
}

export default MainLayout;
