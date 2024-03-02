import React, { useState } from 'react'
import logo1 from '../images/logo.png';
import Burgermenu from '../images/burger.png';
import close from '../images/close.png';
import { Link } from 'react-router-dom';

const Signup = () => {
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
        <div className="burgeritemlogin" style={{ display: ispopup ? 'none' : 'block' }}>
          <ul className='list'>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="signupbox">
        <div className="signupform">
          <form action="" className="signup">
            <h2>SignUp Now</h2>
            <div className="inputfield">
              <input type="text" placeholder='Enter your Name' required />
              <input type="number" placeholder='Enter your phone' className='inputbox' required />
              <input type="email" placeholder='Enter your email' className='inputbox' required />
              <input type="password" placeholder='Create password' className='inputbox' required />
              <input type="password" placeholder='Confirm password' className='inputbox' required />
            </div>
            <button id='signupbtn'>SignUp</button>
            <p id='signinlink'>Already have account ? <Link to="/login">click here</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
