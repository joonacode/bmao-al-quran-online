import { Spinner } from '@components/common';
const LoadingOverlay = () => {
  return (
    <div className='h-[calc(100vh_-_150px)] flex flex-col items-center justify-center'>
      <Spinner className='text-6xl' />
    </div>
  );
};

export default LoadingOverlay;
