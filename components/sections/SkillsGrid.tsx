import React, { useState } from 'react'

type Skill = {
  title: string
  context: string // New field for additional tooltip text
}

const skillData: Skill[] = [
  { title: 'Figma', context: 'Design tool for UI and UX.' },
  { title: 'HTML', context: 'Markup language for web pages.' },
  { title: 'CSS', context: 'Style sheet language for styling web pages.' },
  {
    title: 'Adobe CC',
    context:
      'Suite of software for graphic design, video editing, and web development.',
  },
  {
    title: 'React',
    context: 'JavaScript library for building user interfaces.',
  },
  {
    title: 'Next.js',
    context:
      'React framework for server-side rendering and static site generation.',
  },
  {
    title: 'Tailwind CSS',
    context: 'Utility-first CSS framework for rapid UI development.',
  },
  { title: 'Framer Motion', context: 'Library for React animations.' },
  {
    title: 'Accessibility',
    context:
      'Designing and developing with the needs of people with disabilities in mind.',
  },
  {
    title: 'Information Architecture',
    context: 'Organizing, structuring, and labeling content effectively.',
  },
  {
    title: 'Git',
    context: 'Version control system for tracking changes in source code.',
  },
  {
    title: 'A/B Testing',
    context: 'Comparing two versions to determine which one performs better.',
  },
  {
    title: 'Prototyping',
    context:
      'Creating a sample version of a product to test concepts or processes.',
  },
  {
    title: 'UX Surveys',
    context: 'Gathering user feedback through questionnaires and surveys.',
  },
  {
    title: 'Usability Testing',
    context: 'Evaluating a product by testing it on users.',
  },
  { title: 'VS Code', context: 'Source-code editor made by Microsoft.' },
  { title: 'TypeScript', context: 'Typed superset of JavaScript.' },
  {
    title: 'Card Sorting',
    context: 'Method where users organize content into categories.',
  },
  { title: 'Iconography', context: 'Design icons with meaningful intention.' },
  {
    title: 'Heatmaps',
    context: 'Visualized user interactions on a webpage with color coding.',
  },
]

const SkillsGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="px-8 selection:bg-orange-200">
      <div className="relative z-30 flex flex-wrap justify-center max-w-3xl gap-2 mx-auto mb-20 transition-all duration-300 lg:max-w-4xl lg:my-24">
        {skillData.map((skill, index) => (
          <div
            key={index}
            aria-label={skill.title} // Add aria-label here
            className="relative px-4 py-2 text-xs transition-all duration-300 border rounded-full lg:text-base hover:text-white text-white/60 group border-white/20 hover:cursor-cell hover:border-white/40"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {skill.title}
            {hoveredIndex === index && (
              <div className="absolute p-2 mb-2 text-xs leading-relaxed text-center text-white transform -translate-x-1/2 border shadow-lg bottom-full left-1/2 w-72 rounded-xl border-white/10 bg-black/10 backdrop-blur-2xl">
                {skill.context}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsGrid
