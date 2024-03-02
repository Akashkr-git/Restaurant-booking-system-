import React, {useState,useEffect} from 'react';
import photo1 from '../images/carousel_food.jpg';
// import photo2 from '../images/carousel_food2.jpg';
import photo3 from '../images/carousel_food3.jpg';
import photo4 from '../images/carousel_food4.jpg';
import photo5 from '../images/carousel_food5.jpg';
import '../CSS_files/carousel.css';
import {IconButton} from "rsuite";


const Carousel = () => {
    const [current,setcurrent] = useState(0);
    const [autoplay,setautoplay] = useState(true);
    const images = [photo1, photo3, photo4, photo5];

    const Handlepre = () => {
        setcurrent(current === 0?  images.length-1 : current-1);
    }
    const Handlenext = () => {
        setcurrent(current === images.length-1 ? 0 : current+1);
    }
    let timeOut = null;
    useEffect(()=>{
      timeOut = autoplay && 
      setTimeout(()=>{
        Handlepre();
      }, 2500);
    })
  return (
    <div>
      <div className="carouselbox">
         <img src={images[current]} alt="carousel" id='carousel' onMouseEnter={()=>{setautoplay(false)}} onMouseLeave={()=>{setautoplay(true)}} />
         {/* <button onClick={Handlepre} id='prev'></button>
         <button onClick={Handlenext} id='next'></button> */}
      </div>
    </div>
  )
}

export default Carousel
