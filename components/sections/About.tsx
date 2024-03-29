import React from 'react';
import { FadeY } from '../animations';
import DoodleHash from '../svg/DoodleHash';
import Link from 'next/link';
import Image from 'next/image';


type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <>
      <section id='About' className='py-12 lg:py-32 scroll-mt-16 selection:bg-orange-200'>
        <div className='relative z-20 mx-auto max-w-5xl flex flex-col justify-center px-8'>
           <FadeY delay={.25}><DoodleHash StartColor={'#dc2626'} EndColor={'#facc15'} className='w-10 mb-2 lg:mb-0 lg:w-20 lg:mx-auto' /></FadeY>
          <h2 className='font-clash text-4xl text-white lg:text-9xl lg:text-center mb-4 lg:mb-8'>
            <FadeY delay={0.5}>About Me</FadeY>
            </h2>
          <FadeY delay={.75}>
              <p className='lg:text-center text-white font-mono opacity-60 max-w-2xl mx-auto text-sm leading-loose'>
            A quick snippet about me.
          </p>
            </FadeY>
            <FadeY delay={1} className='flex lg:justify-center mt-8'>
              <Link href={'mailto:ryan.houk@proton.me?subject=Hey, Ryan! I like your portfolio.'} className='border-2 border-white px-8 py-3 rounded-full text-white font-object hover:bg-white hover:text-black transition-all duration-300' >Contact Me</Link>
            </FadeY>
        </div>

        <FadeY className='relative mx-auto max-w-5xl mt-8 lg:mt-24' delay={0.2}>
          <img
            className='mx-auto -mb-16 w-48 lg:w-72 transition-all duration-200'
            src='/img/objects/tape-gray.png'
            alt='piece of duct tape stuck to a letter'
          />
          <div className='m-4 rounded-sm bg-white p-4 py-12 shadow-md lg:p-16 lg:py-16'>
            <h3 className='mb-8 font-mono'>Hey, friends!</h3>
            <p className='mb-8 font-mono leading-loose'>
              I&apos;ve been doing this for over 15 years and continuously learning from both success and failure. Empathy? Yep! Usability testing? Yep! Aligning business and customer goals? You know it!
            </p>
            <p className='mb-8 font-mono leading-loose'>
              It all started with a digital training tutorial for a Pepsi bottling plant. I designed the UI in Photoshop (Figma didn&apos;t exist yet) and coded the software with Lingo using Macromedia Director. Didn&apos; I say I&apos;ve been doing this for a long time? I&apos;ve done product design for years until rediscovering my love for coding, now I do both.
            </p>
            <p className='mb-8 font-mono leading-loose'>
              I&apos;ve worked with startups, co-founded a startup, raised angel investments, and worked with agencies. These experiences taught me that successfull products result from teams with no egos where creative contributions come from everyone.
            </p>
            <p className='font-mono leading-loose'>~ Ryan</p>
          <Image
            src='/img/objects/sticker-gray-round.png'
            alt='sticker with the words design with care'
            width={200}
            height={200}
            className='w-40 lg:w-48 mx-auto lg:left-0 lg:right-0 -right-8 transition-all duration-200 absolute hover:cursor-cell -rotate-12 hover:rotate-12 drop-shadow-lg'
          />
          </div>
        </FadeY>
      </section>
    </>
  );
};

export default About;
