import React from 'react'
import { FadeY } from '../animations'
import DoodleScribbleAnimate from '../svg/DoodleScribbleAnimate'
import FeatureCard from '../cards/FeatureCard'
import FeatureCardMobile from '../cards/FeatureCardMobile'
import { mobileCaseStudiesData } from '../../data/mobileCaseStudiesData'
import { desktopCaseStudiesData } from '../../data/desktopCaseStudiesData'

const CaseStudies = () => {
  return (
    <>
      <section
        id="Work"
        className="relative z-20 flex flex-col justify-center max-w-5xl px-8 py-12 mx-auto scroll-mt-10 selection:bg-orange-200 lg:pt-32">
        <FadeY>
          <DoodleScribbleAnimate
            startColor={'#dc2626'}
            endColor={'#facc15'}
            className="w-24 mb-2 lg:mx-auto lg:mb-0 lg:w-44"
          />
        </FadeY>
        <h1 className="z-10 mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
          <FadeY delay={0.25}>Product </FadeY>
          <FadeY delay={0.5}>Highlights</FadeY>
        </h1>
        <FadeY className="relative z-20" delay={0.75}>
          <p className="max-w-xl mx-auto font-mono text-sm leading-loose text-zinc-400 lg:text-center">
            There are a lot of products to choose from! Here are just a few
            highlights to explore.
          </p>
        </FadeY>
      </section>

      <section className="px-8 pb-12 mx-auto max-w-screen-2xl selection:bg-orange-200 lg:pb-32">
        <FadeY delay={0.25} className="grid gap-8 md:grid-cols-2">
          {mobileCaseStudiesData.map((item) => (
            <FeatureCardMobile
              key={item.keyId}
              urlSrc={item.href}
              title={item.title}
              description={item.description}
              altText={item.alt}
              category={item.category}
              imgSrcOne={item.imgSrcOne}
              imgSrcTwo={item.imgSrcTwo}
              showCaseStudy={true}
            />
          ))}

          {desktopCaseStudiesData.map((item) => (
            <FeatureCard
              key={item.keyId}
              urlSrc={item.href}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              altText={item.alt}
              category={item.category}
              showCaseStudy={item.caseStudy}
            />
          ))}
        </FadeY>
      </section>
    </>
  )
}

export default CaseStudies
