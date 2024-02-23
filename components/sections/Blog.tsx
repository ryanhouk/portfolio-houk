import Link from 'next/link';
import React from 'react';
import { FadeY } from '../animations';
import DoodleLoops from '../svg/DoodleLoops';
import Image from 'next/image';
import IconArrowRight from '../svg/IconArrowRight';

// Define the structure for a blog post data
type BlogData = {
  url: string;
  img: string;
  title: string;
};

const Blog = () => {
  // Sample data for blog posts
  const data: BlogData[] = [
       {
      url: "https://medium.com/prototypr/accessibility-in-web-design-the-responsibility-of-developers-c82ecdd9ebf2",
      img: "/img/blog/blog-access.webp",
      title: "Accessibility in web design & the responsibility of developers"
    },
    {
      url: "https://uxdesign.cc/the-rise-of-the-tiktok-pattern-dc5dc5524664",
      img: "/img/blog/blog-tiktok.webp",
      title: "The rise of the TikTok pattern"
    },
       {
      url: "https://ryanhouk.medium.com/the-illusion-of-wireless-charging-b296655e58a5",
      img: "/img/blog/blog-wireless.webp",
      title: "The confusing obsession with wireless charging"
    },
    {
      url: "https://medium.com/@ryanhouk/do-netflix-hbo-spotify-twitter-hulu-apple-and-google-agree-with-these-designers-9d8d8ae2e9a1",
      img: "/img/blog/blog-agree.webp",
      title: "Do Netflix, HBO, Apple, Google, Hulu, Twitter and Spotify, agree with these designers?"
    },
        {
      url: "https://uxdesign.cc/here-are-the-accessibility-scores-for-5-the-most-popular-websites-491085b3bd07",
      img: "/img/blog/blog-access-02.webp",
      title: "The accessibility rating for 5 popular websites — how did they score?"
    },
  ];

  return (
    <>
      <section id='Blog' className='scroll-mt-16 pt-12 lg:pt-32'>
        <div className='relative z-20 mx-auto max-w-5xl flex flex-col justify-center px-8'>
          <FadeY delay={0.25}><DoodleLoops startColor={'#dc2626'} stopColor={'#facc15'} className='w-20 mb-2 lg:mb-2 lg:w-64 lg:mx-auto' /></FadeY>
          <h1 className='font-clash text-4xl text-white lg:text-9xl lg:text-center mb-4 lg:mb-8'>
            <FadeY delay={0.5}>Blog</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className='lg:text-center text-white font-mono opacity-60 max-w-2xl mx-auto text-sm leading-loose'>
              Check out some posts I&apos;ve written.
            </p>
          </FadeY>
          <FadeY delay={1} className='flex lg:justify-center mt-8'>
            <Link href={'https://medium.com/@ryanhouk'} target='_blank' className='border-2 border-white px-8 py-3 rounded-full text-white font-object hover:bg-white hover:text-black transition-all duration-300' >Visit Blog</Link>
          </FadeY>
        </div>
      </section>

      <section id='Posts' className='px-8 py-12 max-w-5xl mx-auto mb-16'>
        <div className='flex flex-col'>
          {data.map((post, index) => (
            <Link href={post.url} key={index} target='_blank' className='flex flex-wrap lg:flex-nowrap items-center py-4 border-t border-white/10 hover:bg-white/5 transition-all duration-300 group'>
                <Image src={post.img} alt={post.title} height={400} width={200} className='w-full lg:w-56' />
                <div className='flex flex-col'>
                    <h3 className='text-white lg:ml-8 text-lg mt-4 lg:-mt-2 lg:text-2xl font-object'>{post.title}</h3>
                <div className='hidden lg:flex items-center lg:ml-8 group-hover:mt-2 -mt-8 opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <p className='text-white font-mono text-xs'>Read More</p>
                </div>
                </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog;
