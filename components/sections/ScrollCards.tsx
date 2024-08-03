import { useEffect, useRef } from 'react'
import FeatureCard from '../cards/FeatureCard'

interface CardProps {
  keyId: string
  urlSrc: string
  imgSrc: string
  title: string
  description: string
  altText: string
  category: string
  showCaseStudy: boolean
}

const cardData: CardProps[] = [
  {
    keyId: '1',
    urlSrc: '/path/to/link1',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    title: 'Title 1',
    description: 'Description 1',
    altText: 'Alt text 1',
    category: 'Category 1',
    showCaseStudy: true,
  },
  {
    keyId: '2',
    urlSrc: '/path/to/link2',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    title: 'Title 2',
    description: 'Description 2',
    altText: 'Alt text 2',
    category: 'Category 2',
    showCaseStudy: false,
  },
  {
    keyId: '3',
    urlSrc: '/path/to/link3',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    title: 'Title 3',
    description: 'Description 3',
    altText: 'Alt text 3',
    category: 'Category 3',
    showCaseStudy: true,
  },
  {
    keyId: '4',
    urlSrc: '/path/to/link3',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    title: 'Title 3',
    description: 'Description 3',
    altText: 'Alt text 3',
    category: 'Category 3',
    showCaseStudy: true,
  },
  {
    keyId: '5',
    urlSrc: '/path/to/link3',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    title: 'Title 3',
    description: 'Description 3',
    altText: 'Alt text 3',
    category: 'Category 3',
    showCaseStudy: true,
  },
  {
    keyId: '6',
    urlSrc: '/path/to/link3',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    title: 'Title 3',
    description: 'Description 3',
    altText: 'Alt text 3',
    category: 'Category 3',
    showCaseStudy: true,
  },
  // Add more cards as needed
]

const ScrollCards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const handleScroll = () => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0 })
        }
      }

      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <section className="px-8 pb-12 selection:bg-orange-200 lg:pb-32">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory">
          {cardData.map((item) => (
            <FeatureCard
              className="max-w-[600px] flex-shrink-0 snap-start"
              key={item.keyId}
              urlSrc={item.urlSrc}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              altText={item.altText}
              category={item.category}
              showCaseStudy={item.showCaseStudy}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default ScrollCards
