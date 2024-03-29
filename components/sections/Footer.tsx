import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <section className='relative z-10 border-t border-white/10 py-8 selection:bg-orange-200 lg:py-16'>
        <p className='mx-auto max-w-4xl text-center font-mono text-xs'>
          <span className='text-white'>Designed & developed by</span>{' '}
          <span className='bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text text-transparent'>
            Ryan Houk
          </span>
        </p>
      </section>
    </>
  );
};

export default Footer;
