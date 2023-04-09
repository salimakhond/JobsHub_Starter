import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;