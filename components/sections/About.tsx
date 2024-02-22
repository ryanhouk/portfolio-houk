import React from 'react';
import { FadeY } from '../animations';
import DoodleHash from '../svg/DoodleHash';


type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <>
      <section id='About' className='py-12 lg:py-32 scroll-mt-16'>
        <div className='relative z-20 mx-auto max-w-5xl flex flex-col justify-center px-8'>
          <h1 className='font-clash text-4xl text-white lg:text-9xl lg:text-center mb-4 lg:mb-8'>
           <FadeY delay={.25}><DoodleHash StartColor={'#dc2626'} EndColor={'#facc15'} className='w-10 mb-2 lg:mb-0 lg:w-20 lg:mx-auto' /></FadeY>
            <FadeY delay={0.5}>About Me</FadeY>
            <FadeY delay={.75}>
              <p className='lg:text-center text-white font-mono opacity-60 max-w-2xl mx-auto text-sm leading-loose'>
            A quick snippet about me.
          </p>
            </FadeY>
          </h1>
        </div>

        <FadeY className='relative mx-auto max-w-5xl mt-8 lg:mt-24' delay={0.2}>
          <img
            className='mx-auto -mb-16 w-48 lg:w-72 transition-all duration-200'
            src='/img/objects/tape-gray.png'
            alt='piece of duct tape stuck to a letter'
          />
          <div className='m-4 rounded-sm bg-white p-4 py-12 shadow-md lg:p-16 lg:py-16'>
            <h2 className='mb-8 font-mono'>Hey, friends!</h2>
            <p className='mb-8 font-mono leading-loose'>
              I&apos;ve been doing this for a long time and have had both successes and failures. Empathy? Yep! Usability testing? Yep! Aligning business and customer goals? You better know it!
            </p>
            <p className='mb-8 font-mono leading-loose'>
              It all started with a digital training tutorial for a Pepsi bottling plant. I designed the UI in Photoshop (Figma didn&apos;t exist yet) and coded the software with Lingo using Macromedia Director. I told you I&apos;ve been doing this for a long time. I ended up focusing on design over coding and have been a product designer for several years until I rediscovered my love for coding and have been doing both now for a while.
            </p>
            <p className='mb-8 font-mono leading-loose'>
              I&apos;ve worked with startups, co-founded a startup and raised angel investments, worked with agencies, and companies. I&apos;ve learned that successful and powerful products have teams behind them with absent egos and creative contributions coming from everyone.
            </p>
            <p className='font-mono leading-loose'>~ Ryan</p>
            {/* <p className='hidden lg:block font-mono leading-loose'>
              <br />
              P.S. Delete my photo.
            </p> */}
          </div>
        </FadeY>
      </section>
    </>
  );
};

export default About;
