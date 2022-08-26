import React from 'react';
import DataImg from '../assets/undraw_data_reports_706v.png';

const Analytics = () => {
  return (
    <div className='bg-white mx-auto py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={DataImg} alt='' className='mx-auto w-11/12' />
        <div className='flex flex-col gap-2 justify-center items-center md:items-start'>
          <p className='text-green-600 font-bold md:text-xl'>
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className='text-slate-900 text-xl md:text-2xl font-bold'>
            Manage Data Analytics Centrally
          </h1>
          <p className='text-slate-900 text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, deleniti magni alias labore quisquam pariatur
            dignissimos ipsum! Delectus, pariatur ipsum!
          </p>
          <button className='mt-3 bg-slate-900 text-slate-100 py-2 px-4 rounded-md hover:bg-white hover:text-slate-900 hover:ring-2 hover:ring-slate-900 cursor-pointer'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
