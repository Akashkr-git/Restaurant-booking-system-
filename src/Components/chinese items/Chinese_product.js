import React, { useState } from 'react';
import Chinese_item from './Chinese_item';
import Chinese_descrip from './Chinese_descrip';
import '../chinese items/chinese_product.css';
import logo1 from './chinese photos/logo.png';
import Burgermenu from './chinese photos/burger.png';
import close from './chinese photos/close.png';
import { Link } from 'react-router-dom';

const Chinese_product = () => {
  const [ispopup, setpopup] = useState(true);
  const [isclose, setclose] = useState(false);
  const togglepopup = () => {
    setpopup(!ispopup);
    setclose(!isclose);
  }
  const toggleclose = () => {
    setclose(!isclose);
    setpopup(!ispopup);
  }
  return (
    <div>
      <div className='header'>
        <div className="Navbar">
          <div className="Navright">
            <img src={logo1} alt="logo" id='logo101' />
          </div>
          <div className="Navleft">
            {isclose && <img src={close} onClick={toggleclose} alt="closeicon" id='close101' />}
            {ispopup && <img src={Burgermenu} onClick={togglepopup} alt="hamburger" id='burger101' />}
          </div>
        </div>
        <div className="burgeritem" style={{ display: ispopup ? 'none' : 'block' }}>
          <ul className='list'>
            <li><a href="">Orders</a></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="productbox">
        <div className="chinese">
          {Chinese_descrip.map((chinese) => (
            <Chinese_item key={chinese.id} chinese={chinese} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chinese_product
