import React from 'react';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/sections/Hero';
import FourGrid from '../components/sections/FourGrid';
import Package from '../components/sections/Package';
import About from '../components/sections/About';
import LoopingText from '../components/animations/LoopingText';
// import ImageDivider from '../components/sections/ImageDivider';


type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <div className='relative overflow-clip'>
        <div className='fixed bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-32'></div>
        <Navbar />
        <Hero />
        <Package />
        <LoopingText />
        {/* <ImageDivider /> */}
        <FourGrid />
        <About />
        {/* END DIV */}
      </div>
    </>
  );
};

export default Index;
