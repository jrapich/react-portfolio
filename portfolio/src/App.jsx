import { useState } from 'react'
import Header from './components/UI/header/Header'
import { Outlet } from 'react-router-dom' 
import Footer from './components/UI/footer/Footer'

function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default App
