import React from 'react'
import LogoWrapper from '../cards/LogoWrapper'
import IconCode from '../svg/IconCode'
import IconDesignTech from '../svg/IconDesignTech'
import IconProcess from '../svg/IconProcess'

type Props = {}

const SkillCallouts = (props: Props) => {
  return (
    <>
      <section className="px-8 py-12 border-t border-zinc-900">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-4 gap-4 lg:gap-6">
            <div className="col-span-4 lg:col-span-1">
              <LogoWrapper>
                <IconProcess className={'w-10'} strokeColor={'#fff'} />
              </LogoWrapper>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <LogoWrapper className="flex flex-col justify-between">
                <IconDesignTech
                  className={'w-10 bg-red-200'}
                  strokeColor={'#fff'}
                />
                <div>
                  <h3 className="text-white bg-green-200 font-object">
                    Process
                  </h3>
                </div>
              </LogoWrapper>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <LogoWrapper>ITEM</LogoWrapper>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <LogoWrapper>
                <IconCode className={'w-10'} strokeColor={'#fff'} />
              </LogoWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillCallouts
