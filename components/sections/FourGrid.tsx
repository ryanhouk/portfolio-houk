import Link from 'next/link';
import React from 'react';
import IconArrowRight from '../svg/IconArrowRight';
import { FadeY } from '../animations';
import DoodleScribble from '../svg/DoodleScribble';

// import Image from 'next/image';

type Item = {
  href: string;
  title: string;
  description: string;
  backgroundImage: string;
};

const data: Item[] = [
  {
    href: '/',
    title: 'P4O Platform',
    description: `Using AI to increase reviewers' speed and accuracy. Due to PII guidelines, this is a private project and can be discussed, but not shown.`,
    backgroundImage: '/img/mockup/phone.webp',
  },
  {
    href: '/',
    title: 'K-LOVE Platforms',
    description: 'Crafting user-centric experiences for tvOS, iOS, Android, websites, and web applications, specifically tailored for content-rich brands.',
    backgroundImage: '/img/mockup/streaming.webp',
  },
    {
    href: '/',
    title: 'WebMob Site',
    description: 'Developed an internal website that enables stakeholders to monitor project progress and access style guides, fostering greater transparency and collaboration.',
    backgroundImage: '/img/mockup/internal.webp',
  },
  {
    href: '/',
    title: 'Wribbn',
    description: 'Co-founded a startup and raised funding for an all-in-one listing app. Created entry points for users to add and consume content across platforms including browser extensions and embedded content.',
    backgroundImage: '/img/mockup/wrbn.webp',
  },
  {
    href: '/',
    title: 'Crisis Response',
    description: 'Focused on enhancing website accessibility, ensuring universal usability for all users, including those with disabilities.',
    backgroundImage: '/img/mockup/access.webp',
  },
  {
    href: '/',
    title: 'Donor Cloud',
    description: 'Updated donor platforms for easier contribution tracking and boosting overall donations.',
    backgroundImage: '/img/mockup/account.webp',
  },

];

const FourGrid = () => {
  return (
    <>
      <section id='Work' className='relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-8 py-12 lg:pt-32 scroll-mt-10 selection:bg-orange-200'>
        <FadeY>
            <DoodleScribble startColor={'#dc2626'} stopColor={'#facc15'} className='w-24 lg:mb-0 mb-2 lg:w-44 lg:mx-auto' />
        </FadeY>
        <h1 className='font-clash text-4xl text-white lg:text-9xl lg:text-center mb-4 lg:mb-8 z-10'>
          <FadeY delay={.25}>Work </FadeY>
          <FadeY delay={.5}>Highlights</FadeY>
        </h1>
        <FadeY className='relative z-20' delay={.75}>
          <p className='lg:text-center text-white font-mono opacity-60 max-w-2xl mx-auto text-sm leading-loose'>
            There is a lot of work to choose from! Here are a few highlights to dive into.
          </p>
        </FadeY>
      </section>

      <section className='max-w-7xl mx-auto px-8 lg:pb-32 pb-12 selection:bg-orange-200'>
        <FadeY delay={.25} className='grid lg:grid-cols-2 gap-8'>
          {data.map((item, index) => (
            <Link key={index} href={item.href} className="group hover:-translate-y-2 transition-all duration-300 border border-white/[.15] rounded-3xl overflow-clip">
              <div
                className="h-96 lg:h-[500px] flex flex-col justify-end relative bg-no-repeat bg-center lg:bg-left lg:group-hover:bg-right bg-cover transition-all duration-300"
                style={{ backgroundImage: `url('${item.backgroundImage}')` }}>
                <div className='w-full h-48 bg-gradient-to-t from-black/80 to-black/0 bottom-0 absolute z-0'></div>
                <div className='w-full h-full bg-black/30 absolute z-0'></div>
                <div className='lg:p-8 p-6 group-hover:-translate-y-4 transition-all duration-300 z-10'>
                  <p className='text-orange-400 text-sm font-mono pb-4'>Case Study Soon</p>
                  <div className='flex items-center'>
                    <h3 className='text-white font-object text-2xl mb-2'>{item.title}</h3>
                    <IconArrowRight className='w-6 group-hover:ml-4 ml-0 transition-all duration-200 opacity-0 group-hover:opacity-100 text-white mb-2 lg:flex hidden' />
                  </div>
                  <p className='lg:text-white/60 text-white font-mono leading-relaxed group-hover:text-white transition-all duration-200 text-sm'>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </FadeY>
      </section>
    </>
  );
};

export default FourGrid;
