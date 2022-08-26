import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-center w-full h-screen flex flex-col gap-2 justify-center items-center  max-w-[800px] mx-auto'>
      <h1 className='uppercase text-green-600 font-semibold'>
        Growing with data analysis
      </h1>
      <h1 className='text-4xl md:text-7xl font-bold'>Grow with data</h1>
      <div className='flex gap-1'>
        <p className='text-base md:text-2xl font-semibold'>
          Lorem ipsum dolor sit, amet consectetur
        </p>
        <Typed
          className='text-base md:text-2xl font-semibold'
          strings={['kodok dingin', 'kodok panas', 'kodok hangat']}
          typeSpeed={120}
          backSpeed={130}
          loop
        />
      </div>
      <h1 className='text-base md:text-xl text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        officiis!
      </h1>
      <button className='bg-green-700 rounded-md px-4 py-2 hover:bg-transparent hover:ring-2 hover:ring-green-600'>
        Get Started
      </button>
    </div>
  );
};

export default Hero;
