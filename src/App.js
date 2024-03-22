import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import Index from './main/index';
import Switcher from './components/Switcher';
import IndexTwo from './main/index-two';
import IndexThree from './main/index-three';
import IndexDark from './main/index-dark';
import IndexRtl from './main/index-rtl';
import './App.css';


function App() {

  const fn = async() =>{
    const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
    const data = await response.json();
    console.log(data.user);
  }
  fn();
 
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index-two" element={<IndexTwo/>} />
      <Route path="/index-three" element={<IndexThree/>} />
      <Route path="/index-dark" element={<IndexDark/>} />
      <Route path="/index-rtl" element={<IndexRtl/>} />
    </Routes>
    <Switcher/>
  </BrowserRouter>
  );
}

export default App;
