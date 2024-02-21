import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  url: string;
  target?: string;
  className?: string;
};

const Button = ({ title, url, target, className }: Props) => {
  return (
    <>
      <Link
        href={url}
        target={target}
        className={`rounded-full bg-purple-600 font-bold text-white lg:px-4 lg:py-3 ${className}`}
      >
        {title}
      </Link>
    </>
  );
};

export default Button;
