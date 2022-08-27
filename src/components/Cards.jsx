import React from 'react';
import CardItem from './CardItem';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineGroup, MdOutlineGroups } from 'react-icons/md';

const Cards = () => {
  const card = [
    {
      image: <FaRegUser />,
      title: 'Single User',
      currency: 'Rp150.000',
      description: {
        storage: '100GB',
        numUsers: '1 Granted User',
        speed: 'Up to 10 mb/s',
      },
      buttonLink: '/',
    },
    {
      image: <MdOutlineGroup />,
      title: ' Small Group',
      currency: 'Rp500.000',
      description: {
        storage: '500GB',
        numUsers: '10 Granted User',
        speed: 'Up to 50 mb/s',
      },
      buttonLink: '/',
    },
    {
      image: <MdOutlineGroups />,
      title: 'Large Group',
      currency: 'Rp1.350.000',
      description: {
        storage: '10TGB',
        numUsers: '1000 Granted User',
        speed: 'Up to 150 mb/s',
      },
      buttonLink: '/',
    },
  ];

  return (
    <div className='w-full bg-white px-6 py-10 '>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {
          (card.map = (item, index) => {
            return (
              <CardItem
                key={index}
                image={item.image}
                title={item.title}
                currency={item.currency}
                description={item.description}
                buttonLink={item.buttonLink}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Cards;
