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
      url: 'https://medium.com/prototypr/accessibility-in-web-design-the-responsibility-of-developers-c82ecdd9ebf2',
      img: '/img/blog/blog-access.webp',
      title: 'Accessibility in web design & the responsibility of developers',
    },
    {
      url: 'https://uxdesign.cc/the-rise-of-the-tiktok-pattern-dc5dc5524664',
      img: '/img/blog/blog-tiktok.webp',
      title: 'The rise of the TikTok pattern',
    },
    {
      url: 'https://ryanhouk.medium.com/the-illusion-of-wireless-charging-b296655e58a5',
      img: '/img/blog/blog-wireless.webp',
      title: 'The confusing obsession with wireless charging',
    },
    {
      url: 'https://medium.com/@ryanhouk/do-netflix-hbo-spotify-twitter-hulu-apple-and-google-agree-with-these-designers-9d8d8ae2e9a1',
      img: '/img/blog/blog-agree.webp',
      title:
        'Do Netflix, HBO, Apple, Google, Hulu, Twitter and Spotify, agree with these designers?',
    },
    {
      url: 'https://uxdesign.cc/here-are-the-accessibility-scores-for-5-the-most-popular-websites-491085b3bd07',
      img: '/img/blog/blog-access-02.webp',
      title:
        'The accessibility rating for 5 popular websites — how did they score?',
    },
  ];

  return (
    <>
      <section
        id='Blog'
        className='scroll-mt-16 pt-12 selection:bg-orange-200 lg:pt-32'
      >
        <div className='relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-8'>
          <FadeY delay={0.25}>
            <DoodleLoops
              startColor={'#dc2626'}
              stopColor={'#facc15'}
              className='mb-2 w-20 lg:mx-auto lg:mb-2 lg:w-64'
            />
          </FadeY>
          <h1 className='mb-4 font-clash text-4xl text-white lg:mb-8 lg:text-center lg:text-9xl'>
            <FadeY delay={0.5}>Blog</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className='mx-auto max-w-2xl font-mono text-sm leading-loose text-white opacity-60 lg:text-center'>
              Interested in design and tech? I&apos;d love to hear your
              thoughts!
            </p>
          </FadeY>
          <FadeY delay={1} className='mt-8 flex lg:justify-center'>
            <Link
              href={'https://medium.com/@ryanhouk'}
              target='_blank'
              className='rounded-full border-2 border-white px-8 py-3 font-object text-white transition-all duration-300 hover:bg-white hover:text-black'
            >
              Visit Blog
            </Link>
          </FadeY>
        </div>
      </section>

      <section
        id='Posts'
        className='mx-auto max-w-5xl px-8 pt-12 selection:bg-orange-200'
      >
        <div className='flex flex-col'>
          {data.map((post, index) => (
            <Link
              href={post.url}
              key={index}
              target='_blank'
              className='group flex flex-wrap items-center border-t border-white/10 py-4 transition-all duration-300 last:border-b hover:bg-white/5 lg:flex-nowrap'
            >
              <Image
                src={post.img}
                alt={post.title}
                height={400}
                width={200}
                className='w-full lg:w-56'
              />
              <div className='flex flex-col'>
                <h3 className='mt-4 font-object text-lg text-white lg:mx-8 lg:-mt-2 lg:text-2xl'>
                  {post.title}
                </h3>
                <div className='-mt-8 hidden items-center opacity-0 transition-all duration-200 group-hover:mt-2 group-hover:opacity-100 lg:ml-8 lg:flex'>
                  <p className='font-mono text-xs text-white'>Read More</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
