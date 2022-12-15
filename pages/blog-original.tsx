import React from 'react'
import { CardImg } from '../components/cards';

type Props = {}

const Blog = (props: Props) => {
    return (
        <>
            {/* INTRO */}
            {/* <img src="/img/texture/plastic-half-01.webp" alt="plastic wrap texture overlaid on text" className='absolute md:h-[600px] -left-4 md:-left-20 sm:-top-20 xl:top-0 right-0 mx-auto px-4 lg:px-32' /> */}
            <img src="/img/texture/plastic-flat-edge.webp" alt="plastic wrap texture overlaid on text" className="absolute stop-selector w-full max-h-[600px]" />
            {/* <RoundScribbleSVG
                className={"w-[700px] absolute -left-[500px] mx-auto -top-[50%] hidden lg:block -z-10"}
                strokeColor={"#dc2626"}
                strokeWidth={0.5}
            /> */}
            <section className="px-12 py-12 sm:py-32 lg:py-40">
                <h1 className="text-5xl sm:text-9xl xl:text-[200px] font-black pb-4 lg:pb-12 text-brand-dark text-center">
                    The blog.
                </h1>
                <p className="font-mono text-center mx-auto px-12 text-black/70">
                    Copy describing the kind of blog this is
                </p>
            </section>

            {/* BLOGS */}
            <section className="relative py-12 lg:py-32 xl:py-48 bg-brand-light border-t-2 border-brand-dark">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto z-10 relative px-8 lg:px-12 max-w-screen-2xl">
                    <CardImg className={''} title={'The truth about YouTube Premium'} description={'YouTube premium is among my favorite subscriptions. Mind you, I subscribe to all sorts of services ranging from video streaming, music, news, podcasts, software, blogging platforms and so on.'} imgSrc={'https://miro.medium.com/max/1400/1*pTYAxjNVwtPspOQ2j03FBQ.webp'} altText={''} cardUrl={''}></CardImg>
                    <CardImg className={''} title={'The rise of the TikTok pattern'} description={'A look at the growing number of apps embracing the reemergence of short-form video and the TikTok pattern.'} imgSrc={'https://miro.medium.com/max/1400/1*mZYb1IKzshGWmjpDxvtUDg.webp'} altText={''} cardUrl={''}></CardImg>
                    <CardImg className={''} title={'10 beautiful icon sites for your next project'} description={'A curated list of sets with developer and designer friendly features built into the icon set dashboards.'} imgSrc={'https://miro.medium.com/max/1400/1*lHfZ9hpVc1QQdt5FT0Y5Ug.webp'} altText={''} cardUrl={''}></CardImg>
                    <CardImg className={''} title={`It's OK to code, it's OK to no-code, but there's a cost to both`} description={`This post may appear as an overly critical review of no-code tools, but it's not.`} imgSrc={'https://miro.medium.com/max/1400/1*BPgE4Sx1LA5RYX4FXDro-g.webp'} altText={'alt'} cardUrl={''}></CardImg>
                    <CardImg className={''} title={`Every social media app is missing this one simple feature`} description={`OK, everyone, this is going to be a quick one. Social media apps are in need of a new feature.`} imgSrc={'https://miro.medium.com/max/1400/1*nA42hL3Qf5c7eIxyblnUBA.webp'} altText={'alt'} cardUrl={''}></CardImg>
                    <CardImg className={''} title={`New Brutalism and web accessibility: what you need to know`} description={`New Brutalism is a trend that has been growing in popularity over the past several years.`} imgSrc={'https://miro.medium.com/max/1400/1*TcPYushw0Q_3PymYadpzUw.webp'} altText={'alt'} cardUrl={''}></CardImg>
                </div>
            </section>
        </>
    )
}

export default Blog;