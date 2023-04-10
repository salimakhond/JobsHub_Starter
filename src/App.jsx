import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='md:min-h-[calc(100vh-341px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;