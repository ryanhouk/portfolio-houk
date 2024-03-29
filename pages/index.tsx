import React, { useEffect } from 'react';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/sections/Hero';
import FourGrid from '../components/sections/FourGrid';
import Package from '../components/sections/Package';
import About from '../components/sections/About';
import LoopingText from '../components/animations/LoopingText';
import Blog from '../components/sections/Blog';
import Footer from '../components/sections/Footer';
import SkillsGrid from '../components/sections/SkillsGrid';
import ThankYou from '../components/sections/ThankYou';

type Props = {};

const Index = (props: Props) => {
  useEffect(() => {
    // Save the current body background color
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Set the body background to the desired color when the component mounts
    document.body.style.backgroundColor = 'black'; // or any color you prefer

    // Revert back to the original color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
    <>
      <div id='Home' className='relative overflow-clip'>
        <div className='fixed bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-32'></div>
        <Navbar />
        <Hero />
        <Package />
        <SkillsGrid />
        <LoopingText />
        <FourGrid />
        <Blog />
        <About />
        {/* <ImageDivider /> */}
        <ThankYou />
        <Footer />
        {/* END DIV */}
      </div>
    </>
  );
};

export default Index;
