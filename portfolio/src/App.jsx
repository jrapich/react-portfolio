import { useState } from 'react'
import Header from './components/UI/header/Header'
import { Outlet } from 'react-router-dom' 

function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}

export default App
