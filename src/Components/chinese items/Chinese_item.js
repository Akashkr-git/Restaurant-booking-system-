import React from 'react';
import { Link } from 'react-router-dom';



const Chinese_item = ({ chinese }) => {
  return (
    <>
      <Link to={`/details/${chinese.id}`} className='chinesebox'>
        <img src={chinese.image} alt={chinese.Name} />
        <h3>{chinese.Name}</h3>
        <div className="heading_1">
            <h5>{chinese.Charges}</h5>  
        </div>
        <div className="buttons">
          <button type='submit' id='btnorder01'>{chinese.Orderbutton}</button>
          <button type='submit' id='btnadd01'>{chinese.Addbutton}</button>
        </div>
      </Link>
    </>
  )
}

export default Chinese_item
