import React from 'react';
import Chinese_descrip from './Chinese_descrip';
import { useParams } from 'react-router-dom';
import '../chinese items/chinese_details.css';
import Rating from './chinese photos/Rating';

const Chinese_details = () => {
  const { id } = useParams();
  const product = Chinese_descrip.find((p) => p.id === parseInt(id))
  return (
    <div>
      <div className="productdec">
        <div className="imgpart">
          <img src={product.image} alt="" />
        </div>
        <div className="headingpart">
          <h2>{product.Name}</h2>
          <div className="heading2">
            <h4>{product.Charges}</h4> <Rating/>
          </div>
        </div>
        <div className="description">

        </div>
      </div>
    </div>
  )
}

export default Chinese_details
