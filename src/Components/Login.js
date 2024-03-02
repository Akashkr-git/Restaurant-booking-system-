import React, { useState } from 'react';
import logo1 from '../images/logo.png';
import Burgermenu from '../images/burger.png';
import close from '../images/close.png';
import '../CSS_files/login.css';
import { Link } from 'react-router-dom';


export const Login = () => {
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
        <>
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
                        <li><Link to="/signup">signup</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='loginbox'>
                <div className="loginform">
                    <form action="" className='login'>
                        {/* <IconButton icon={<CloseIcon/>} onClick={content.toggle} id='cross'> </IconButton> */}
                        <div className="heading"><h2>Login now</h2></div>
                        <div className="inputfield">
                            <input type="text" placeholder='Enter your phone' id='input101'required />
                            <input type="password" placeholder='Enter your password' id='input102'  required/>
                        </div>
                        <button id='loginbtn'>login</button>
                        <p id='signinlink'>Don't have account ? <Link to="/signup">click here</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}




