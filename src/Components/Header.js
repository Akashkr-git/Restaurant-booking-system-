import React, {useState} from 'react';
import '../CSS_files/header.css';
import  logo1 from '../images/logo.png';
import Burgermenu from '../images/burger.png';
import close from '../images/close.png';
import { Link } from 'react-router-dom';



const Header = () => {
  const [ispopup,setpopup] = useState(true);
  const[isclose,setclose] = useState(false);
  const togglepopup = () => {
    setpopup(!ispopup);
    setclose(!isclose);
  }
  const toggleclose = () => {
    setclose(!isclose);
    setpopup(!ispopup);
  }
  return (
    <div className='header'>
       <div className="Navbar">
           <div className="Navright">
              <img src={logo1} alt="logo" id='logo101'/>
           </div>
           <div className="Navleft">
            {isclose && <img src={close} onClick={toggleclose} alt="closeicon" id='close101'/>}
            {ispopup && <img src={Burgermenu} onClick={togglepopup} alt="hamburger" id='burger101' />}
           </div>
       </div>
       <div className="burgeritem" style={{display : ispopup ? 'none' : 'block'}}>
         <ul className='list'>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/signup">signup</Link></li> 
          <li><Link to="/">Home</Link></li>
          <li><a href="">Products</a></li>
          <li><a href="">Orders</a></li>
         </ul>
       </div>
    </div>
  )
}

export default Header
