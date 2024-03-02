import { useState } from 'react';
import './App.css';
import Carousel from './Components/Carousel';
import Header from './Components/Header';
import {Login}from './Components/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Chinese_product from './Components/chinese items/Chinese_product';
import Chinese_details from './Components/chinese items/Chinese_details';
import Admin_panel from './Components/Admin_panel';





function App() {
  // const [displayContent, setDisplayContent] = useState(null);
  // const [displaySignup, setDisplaySignup] = useState(null);

  // const handleButtonClick = () => {
  //   setDisplayContent(true);
  //   setDisplaySignup(false);
  // }
  // const toggsignup = () => {
  //   setDisplaySignup(true);
  //   setDisplayContent(false);
  // }
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/carousel' element={<Carousel/> }/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/products' element={<Chinese_product/>}/>
          <Route path="/details/:id" element={<Chinese_details/>}/>
          <Route path="/Admin" element={<Admin_panel/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
