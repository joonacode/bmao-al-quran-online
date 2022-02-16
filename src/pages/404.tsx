import { Button } from '@components/common';
import React from 'react';
import { BiSad } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className='h-[calc(100vh_-_150px)] flex items-center justify-center flex-col'>
      <h1 className='text-center justify-center text-4xl mb-5 font-bold flex gap-2 flex-wrap'>
        <span>404 Page Not Found</span> <BiSad />
      </h1>
      <Button variant='warning' isLink href='/'>
        Back
      </Button>
    </div>
  );
};

export default NotFound;
