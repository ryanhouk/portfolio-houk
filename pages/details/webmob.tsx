import React from 'react'
import { FadeY } from '../../components/animations'

type Props = {}

const WebMob = (props: Props) => {
  return (
    <>
    <section className=''>
    <FadeY className='max-w-3xl mx-auto'>
                <h2 className='text-white font-object leading-relaxed text-xl bg-white/5 rounded-3xl p-6 lg:p-6'>Internal customers need a place to track their requests, create new ones, and view the latest designs. The marketing team members need a place to obtain image specifications for image collateral.</h2>
            </FadeY>
        <div className='max-w-6xl flex mx-auto mt-72 lg:gap-24 px-8'>
            
            <div className='flex-1'>
                <p className='font-mono uppercase text-xs mb-2 text-orange-400'>Problem</p>
                <p className='font-mono text-white text-xs leading-loose'>Internal stakeholders within our organization are experiencing 
                frustration due to the scattered distribution of links and files across emails and Teams messages. This disorganization hampers efficient collaboration, leading to delays in accessing critical information and hindering productivity. As a result, there is a pressing need to implement a streamlined solution that centralizes document sharing and communication channels, thereby enhancing collaboration effectiveness and reducing stakeholder frustration.</p>        
            </div>
        </div>
    </section>
    </>
  )
}

export default WebMob