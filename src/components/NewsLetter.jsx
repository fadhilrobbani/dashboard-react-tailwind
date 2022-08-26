import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState('text-slate-900');
  const onChangeInput = useCallback((ev) => {
    setInput(ev.currentTarget.value);
    ev.currentTarget.value.includes('@')
      ? setInvalid('text-slate-900')
      : setInvalid('text-pink-600 focus:ring-pink-600');
  });

  return (
    <div className='bg-slate-900 mx-auto py-10 px-6 grid md:grid-cols-2 md:items-center gap-2'>
      <div>
        <h1 className='text-2xl md:text-3xl font-bold'>
          Want Tips and Trick to Optimize Your Flow?
        </h1>
        <p>Sign up to our newslatter and stay to up to date</p>
      </div>
      <div>
        <form action=''>
          <div className='mt-8 flex flex-col items-center sm:flex-row gap-4 justify-center '>
            <input
              type='text'
              onChange={onChangeInput}
              value={input}
              className={`focus:outline-none focus:ring-green-700 focus:ring-4 w-full rounded-md py-2 px-4 ${invalid}`}
              placeholder='Enter your email'
            />
            <button
              type='submit'
              className='w-full sm:w-36 bg-green-600 min-w-[120px] rounded-md py-2 px-4'
            >
              Notify Me
            </button>
          </div>
        </form>
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
