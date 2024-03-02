import React, { useState } from 'react';
import logo1 from '../images/logo.png';
import Burgermenu from '../images/burger.png';
import close from '../images/close.png';
import { Link } from 'react-router-dom';
import '../CSS_files/Admin_panel.css';
const Admin_panel = () => {
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
                        <li><Link to="/signup">Users</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="">items</a></li>
                        <li><a href="">Manage users</a></li>
                    </ul>
                </div>
            </div>
            <div className="adminpanel">
                {/* <h2>Welcome Admin</h2> */}
                <table className="admintable">
                    <tr>
                        <th>User Name</th>
                        <th>User id</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Amit</td>
                        <td>Amit101</td>
                        <td><button>Delete user</button></td>
                    </tr>
                    <tr>
                        <td>Kusum</td>
                        <td>Kusum199</td>
                        <td><button>Delete user</button></td>
                    </tr>
                    <tr>
                        <td>Tushar</td>
                        <td>Tushar111</td>
                        <td><button>Delete user</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Admin_panel
