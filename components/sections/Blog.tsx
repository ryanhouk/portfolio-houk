import Link from 'next/link'
import React from 'react'
import { FadeY } from '../animations'
import Image from 'next/image'
import DoodleLoopsAnimate from '../svg/DoodleLoopsAnimate'
import LinkButton from '../buttons/LinkButton'

// Define the structure for a blog post data
type BlogData = {
  url: string
  img: string
  title: string
  readTime: string
}

const Blog = () => {
  // Sample data for blog posts
  const data: BlogData[] = [
    {
      url: 'https://medium.com/prototypr/accessibility-in-web-design-the-responsibility-of-developers-c82ecdd9ebf2',
      img: '/img/blog/blog-access.webp',
      title: 'Accessibility in web design & the responsibility of developers',
      readTime: '(4 mins)',
    },
    {
      url: 'https://uxdesign.cc/the-rise-of-the-tiktok-pattern-dc5dc5524664',
      img: '/img/blog/blog-tiktok.webp',
      title: 'The rise of the TikTok pattern',
      readTime: '(4 mins)',
    },
    {
      url: 'https://ryanhouk.medium.com/the-illusion-of-wireless-charging-b296655e58a5',
      img: '/img/blog/blog-wireless.webp',
      title: 'The confusing obsession with wireless charging',
      readTime: '(4 mins)',
    },
    {
      url: 'https://medium.com/@ryanhouk/do-netflix-hbo-spotify-twitter-hulu-apple-and-google-agree-with-these-designers-9d8d8ae2e9a1',
      img: '/img/blog/blog-agree.webp',
      title:
        'Do Netflix, HBO, Apple, Google, Hulu, Twitter and Spotify, agree with these designers?',
      readTime: '(5 mins)',
    },
    {
      url: 'https://uxdesign.cc/here-are-the-accessibility-scores-for-5-the-most-popular-websites-491085b3bd07',
      img: '/img/blog/blog-access-02.webp',
      title:
        'The accessibility rating for 5 popular websites — how did they score?',
      readTime: '(5 mins)',
    },
    {
      url: 'https://ryanhouk.medium.com/framer-motion-is-easy-and-powerful-9f54d797e65c',
      img: '/img/blog/blog-framer.webp',
      title: 'Framer Motion is easy and powerful',
      readTime: '(3 mins)',
    },
  ]

  return (
    <>
      <section
        id="Blog"
        className="pt-12 scroll-mt-16 selection:bg-orange-200 lg:pt-32">
        <div className="relative z-20 flex flex-col justify-center max-w-5xl px-8 mx-auto">
          <FadeY delay={0.25}>
            <DoodleLoopsAnimate
              startColor={'#dc2626'}
              stopColor={'#facc15'}
              className="w-24 mb-2 lg:mx-auto lg:mb-2 lg:w-64"
            />
          </FadeY>
          <h1 className="mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
            <FadeY delay={0.5}>Blog</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-zinc-500 lg:text-center">
              Interested in design and tech? I&apos;d love to hear your
              thoughts!
            </p>
          </FadeY>
          <FadeY delay={1} className="flex mt-8 lg:justify-center">
            <LinkButton
              url={'https://medium.com/@ryanhouk'}
              title={'Visit Blog'}
            />
          </FadeY>
        </div>
      </section>

      <section
        id="Posts"
        className="max-w-5xl px-8 pt-12 mx-auto selection:bg-orange-200">
        <div className="flex flex-col">
          {data.map((post, index) => (
            <Link
              href={post.url}
              key={index}
              target="_blank"
              className="flex flex-wrap items-center py-4 transition-all duration-300 border-t group border-white/10 last:border-b hover:bg-white/5 lg:flex-nowrap">
              <Image
                src={post.img}
                alt={post.title}
                height={400}
                width={200}
                className="w-full lg:w-56"
              />
              <div className="flex flex-col">
                <h3 className="mt-4 text-lg text-white font-object lg:mx-8 lg:-mt-2 lg:text-2xl">
                  {post.title}
                </h3>
                <div className="items-center hidden -mt-8 transition-all duration-200 opacity-0 group-hover:mt-2 group-hover:opacity-100 lg:ml-8 lg:flex">
                  <p className="font-mono text-xs text-white">
                    Read <span className="opacity-50">{post.readTime}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
