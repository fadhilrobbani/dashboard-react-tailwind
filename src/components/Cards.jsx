import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineGroup, MdOutlineGroups } from 'react-icons/md';
import { data } from 'autoprefixer';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();
  // const card = [
  //   {
  //     image: <FaRegUser />,
  //     title: 'Single User',
  //     currency: 'Rp150.000',
  //     description: {
  //       storage: '100GB',
  //       numUsers: '1 Granted User',
  //       speed: 'Up to 10 mb/s',
  //     },
  //     buttonLink: '/',
  //   },
  //   {
  //     image: <MdOutlineGroup />,
  //     title: ' Small Group',
  //     currency: 'Rp500.000',
  //     description: {
  //       storage: '500GB',
  //       numUsers: '10 Granted User',
  //       speed: 'Up to 50 mb/s',
  //     },
  //     buttonLink: '/',
  //   },
  //   {
  //     image: <MdOutlineGroups />,
  //     title: 'Large Group',
  //     currency: 'Rp1.350.000',
  //     description: {
  //       storage: '10TGB',
  //       numUsers: '1000 Granted User',
  //       speed: 'Up to 150 mb/s',
  //     },
  //     buttonLink: '/',
  //   },
  // ];

  return (
    <div className='w-full bg-white px-6 py-10 '>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 pt-10 py-6 '>
        <div className='relative rounded-md file:container pt-12 py-4 px-10 gap-6 shadow-xl hover:scale-105 transition duration-200 flex flex-col justify-center items-center '>
          <FaRegUser
            size={60}
            color='#070f1c'
            className='bg-slate-600 p-2 rounded-full absolute top-[-26px]'
          />
          <h1 className='font-bold text-xl text-slate-900'>Single User</h1>
          <h1 className='font-bold text-3xl text-slate-900'>Rp150.000</h1>
          <div className='text-center gap-1 w-full flex justify-center items-center flex-col'>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              500 GB
            </p>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              1 Granted User
            </p>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              Up to 10 mb/s
            </p>
          </div>
          <button
            className='bg-green-700 hover:ring-2 hover:ring-green-600 hover:bg-transparent hover:text-green-700 rounded-md py-2 px-4'
            onClick={() => navigate('/blog')}
          >
            Start Trial
          </button>
        </div>
        <div className=' relative rounded-md file:container pt-12 py-4 px-10 gap-6 shadow-xl hover:scale-105 transition duration-200 flex flex-col justify-center items-center '>
          <MdOutlineGroup
            size={60}
            color='#070f1c'
            className='bg-slate-600 p-2 rounded-full absolute top-[-26px]'
          />
          <h1 className='font-bold text-xl text-slate-900'>Single User</h1>
          <h1 className='font-bold text-3xl text-slate-900'>Rp150.000</h1>
          <div className='text-center gap-1 w-full flex justify-center items-center flex-col'>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              500 GB
            </p>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              1 Granted User
            </p>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              Up to 10 mb/s
            </p>
          </div>
          <button
            className='bg-green-700 hover:ring-2 hover:ring-green-600 hover:bg-transparent hover:text-green-700 rounded-md py-2 px-4'
            onClick={() => navigate('/blog')}
          >
            Start Trial
          </button>
        </div>
        <div className='relative rounded-md file:container pt-12 py-4 px-10 gap-6 shadow-xl hover:scale-105 transition duration-200 flex flex-col justify-center items-center '>
          <MdOutlineGroups
            size={60}
            color='#070f1c'
            className='bg-slate-600 p-2 rounded-full absolute top-[-26px]'
          />
          <h1 className='font-bold text-xl text-slate-900'>Single User</h1>
          <h1 className='font-bold text-3xl text-slate-900'>Rp150.000</h1>
          <div className='text-center gap-1 w-full flex justify-center items-center flex-col'>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              500 GB
            </p>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              1 Granted User
            </p>
            <p className='font-semibold w-full py-1 border-b-2 text-slate-900'>
              Up to 10 mb/s
            </p>
          </div>
          <button
            className='bg-green-700 hover:ring-2 hover:ring-green-600 hover:bg-transparent hover:text-green-700 rounded-md py-2 px-4'
            onClick={() => navigate('/blog')}
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
