import React, { useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
  const [scroll, setScroll] = useState('opacity-0 invisible');
  const handlescroll = () =>
    window.scrollY > 60
      ? setScroll('opacity-90 visible')
      : setScroll('opacity-0 invisible');
  const onClickScroll = () => window.scrollTo(0, 0);
  window.addEventListener('scroll', () => handlescroll());

  return (
    <div
      onClick={() => onClickScroll()}
      className={`${scroll}  transition-all duration-300 fixed right-5 md:w-10 md:h-10  bottom-4 w-8 h-8 rounded-lg bg-slate-500 hover:bg-slate-600 cursor-pointer flex justify-center items-center`}
    >
      <HiArrowUp size={22} />
    </div>
  );
};

export default ScrollToTop;
