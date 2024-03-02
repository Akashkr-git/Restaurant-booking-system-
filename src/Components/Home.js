import React, { useState, useEffect } from 'react'
import logo1 from '../images/logo.png';
import Burgermenu from '../images/burger.png';
import close from '../images/close.png';
import { Link } from 'react-router-dom';
import photo1 from '../images/carousel_food.jpg';
import photo3 from '../images/carousel_food3.jpg';
import photo4 from '../images/carousel_food4.jpg';
import photo5 from '../images/carousel_food5.jpg';
import Chinese_item from './chinese items/Chinese_item';
import chillipotato from './chinese items/chinese photos/chilli potato.jpg';
import vegmomos from './chinese items/chinese photos/veg momos.jpg';
import { IconButton } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';


const Home = () => {
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
    const [current, setcurrent] = useState(0);
    const [autoplay, setautoplay] = useState(true);
    const images = [photo1, photo3, photo4, photo5];

    const Handlepre = () => {
        setcurrent(current === 0 ? images.length - 1 : current - 1);
    }
    const Handlenext = () => {
        setcurrent(current === images.length - 1 ? 0 : current + 1);
    }
    let timeOut = null;
    useEffect(() => {
        timeOut = autoplay &&
            setTimeout(() => {
                Handlepre();
            }, 2500);
    })

    const productdec = [

        {
            id: 1,
            Name: "Chilli Potato",
            image: chillipotato,
            Charges: "Rate: 70 Rs.",
            Orderbutton: "Order Now",
            Addbutton: "Add to plate"
        },
        {
            id: 3,
            Name: "Veg momos",
            image: vegmomos,
            Charges: "Rate: 90 Rs.",
            Orderbutton: "Order Now",
            Addbutton: "Add to plate"
        }

    ]

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
                        <li><Link to="/login">login</Link></li>
                        <li><Link to="/signup">signup</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><a href="">Orders</a></li>
                    </ul>
                </div>
            </div>
            <div className="carouselbox">
                <img src={images[current]} alt="carousel" id='carousel' onMouseEnter={() => { setautoplay(false) }} onMouseLeave={() => { setautoplay(true) }} />
                {/* <button onClick={Handlepre} id='prev'></button>
                <button onClick={Handlenext} id='next'></button> */}
            </div>
            <div className='searchbar'>
                <input type="search" placeholder='search here' />
                <IconButton icon={<SearchIcon/>} id='searchicon'/>
            </div> 
            <div className="productbox">
                <div className="chinese">
                    {productdec.map((chinese) => (
                        <Chinese_item key={chinese.id} chinese={chinese} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
