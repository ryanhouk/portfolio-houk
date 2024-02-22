import React from 'react';

type Props = {
  className?: string;
};

function IconTv({ className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M20.993 4.5H3.007c-.832 0-1.507.675-1.507 1.507v9.736c0 .833.675 1.507 1.507 1.507h17.986c.833 0 1.507-.674 1.507-1.507V6.007c0-.832-.674-1.507-1.507-1.507zM6 19.5h12'></path>
    </svg>
  );
}

export default IconTv;
