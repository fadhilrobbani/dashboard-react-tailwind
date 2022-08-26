import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <div className='bg-slate-900 mx-auto py-10 px-6 grid md:grid-cols-2 md:items-center gap-2'>
      <div>
        <h1 className='text-2xl md:text-3xl font-bold'>
          Want Tips and Trick to Optimize Your Flow?
        </h1>
        <p>Sign up to our newslatter and stay to up to date</p>
      </div>
      <div>
        <div className='mt-8 flex flex-col items-center sm:flex-row gap-4 justify-center '>
          <input
            type='text'
            className='w-full rounded-md text-slate-900 py-2 px-4'
            placeholder='Enter your email'
          />
          <button className='w-full sm:w-36 bg-green-600 min-w-[120px] rounded-md py-2 px-4'>
            Notify Me
          </button>
        </div>
        <div className='mt-4'>
          <p className='text-sm'>
            We care about protection for your privacy and data. Read Our
          </p>
          <Link to='' className='text-green-500 text-sm'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
