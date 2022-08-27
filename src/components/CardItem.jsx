import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ image, title, currency, description, buttonLink }) => {
  const navigate = useNavigate();
  return (
    <div className=' text-slate-900 container shadow-xl hover:scale-105 transition duration-200 '>
      {image}
      <h1>{title}</h1>
      <h1>{currency}</h1>
      <div>
        <p>{description.storage}</p>
        <p>{description.numUsers}</p>
        <p>{description.speed}</p>
      </div>
      <button onClick={() => navigate({ buttonLink })}>Start Trial</button>
    </div>
  );
};

export default CardItem;
