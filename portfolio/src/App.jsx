import { useState } from 'react'
import Header from './components/UI/header/Header'
import { Outlet } from 'react-router-dom' 
import Footer from './components/UI/footer/Footer'

function App() {
  return (
    <>
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
    </style>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default App
