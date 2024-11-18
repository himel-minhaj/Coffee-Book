import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster></Toaster>
      {/* navber */}
      <div className='h-16'>
        <Navber></Navber>
      </div>
      <div className="min-h-[calc(100vh-232px)] container mx-auto px-12 py-12">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;