import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ThankYou = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      fetch(`https://canva-pro-69848a87bb3e.herokuapp.com/product/${id}`)
        .then((res) => res.json())
        .then((info) => setProduct(info));
    }, [product]);
    return (
        <div>
            <h2>Thanks for order this item {product.ProductName}</h2>
        </div>
    );
};

export default ThankYou;