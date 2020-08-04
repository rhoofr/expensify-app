import React from 'react';

export const LoadingPage = () => {
  return (
    <div className='loader'>
      <img
        className='loader__image'
        src='/images/loader.gif'
        alt='Loading...'
      />
    </div>
  );
};

export default LoadingPage;
