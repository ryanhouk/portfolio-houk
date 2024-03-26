import React, { useState } from 'react';

type Skill = {
    title: string;
    context: string; // New field for additional tooltip text
};

const skillData: Skill[] = [
    { title: 'Figma', context: 'Design tool for UI and UX.' },
    { title: 'HTML', context: 'Markup language for web pages.' },
    { title: 'CSS', context: 'Style sheet language for styling web pages.' },
    { title: 'Adobe CC', context: 'Suite of software for graphic design, video editing, and web development.' },
    { title: 'React', context: 'JavaScript library for building user interfaces.' },
    { title: 'Next.js', context: 'React framework for server-side rendering and static site generation.' },
    { title: 'Tailwind CSS', context: 'Utility-first CSS framework for rapid UI development.' },
    { title: 'Framer Motion', context: 'Library for React animations.' },
    { title: 'Accessibility', context: 'Designing and developing with the needs of people with disabilities in mind.' },
    { title: 'Information Architecture', context: 'Organizing, structuring, and labeling content effectively.' },
    { title: 'Git', context: 'Version control system for tracking changes in source code.' },
    { title: 'A/B Testing', context: 'Comparing two versions to determine which one performs better.' },
    { title: 'Prototyping', context: 'Creating a sample version of a product to test concepts or processes.' },
    { title: 'UX Surveys', context: 'Gathering user feedback through questionnaires and surveys.' },
    { title: 'Usability Testing', context: 'Evaluating a product by testing it on users.' },
    { title: 'VS Code', context: 'Source-code editor made by Microsoft.' },
    { title: 'TypeScript', context: 'Typed superset of JavaScript.' },
    { title: 'Card Sorting', context: 'Method where users organize content into categories.' },
    { title: 'Iconography', context: 'Design icons with meaningful intention.' },
    { title: 'Heatmaps', context: 'Visualized user interactions on a webpage with color coding.' },
    { title: 'Being Nice', context: 'Genuinely treating people with respect 😊' }
];

const SkillsGrid = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className='px-8 selection:bg-orange-200'>
            <div className='flex flex-wrap justify-center gap-2 relative z-30 xl:-translate-y-20 mb-20 lg:mb-4 max-w-2xl mx-auto transition-all duration-300'>
                {skillData.map((skill, index) => (
                    <div
                        key={index}
                        aria-label={skill.title} // Add aria-label here
                        className='group relative bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-yellow-400 font-mono text-xs px-4 py-2 bg-white/10 border border-white/10 hover:border-white/40 rounded-full hover:cursor-cell transition-all duration-300'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {skill.title}
                        {hoveredIndex === index && (
                            <div className='absolute text-center leading-relaxed border border-white/10 bottom-full w-72 mb-2 left-1/2 transform -translate-x-1/2 p-2 bg-black/20 backdrop-blur-2xl text-white text-xs rounded-xl shadow-lg'>
                                {skill.context}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
