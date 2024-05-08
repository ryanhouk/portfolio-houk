import React, { useEffect } from 'react'
// import Toggle from '../components/Toggle'
import BlockButton from '../../components/BlockButton'
import Link from 'next/link'
import LogoApple from '../../svg/LogoApple'
import Image from 'next/image'
import BackgroundGlow from '../../../../../components/animations/BackgroundGlow'
import { FadeY } from '../../../../../components/animations'

type Props = {}

const LoginView = (props: Props) => {
  useEffect(() => {
    // Save the current body background color
    const originalBackgroundColor = document.body.style.backgroundColor

    // Set the body background to the desired color when the component mounts
    document.body.style.backgroundColor = 'black' // or any color you prefer

    // Revert back to the original color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {/* PHONE CONTAINER */}
        <div className="w-[390px] h-[844px] bg-black border border-white/10 relative overflow-clip rounded-[50px]">
          {/* ACTIONS */}
          <div className="flex flex-col justify-between h-full">
            <FadeY delay={0.25} className="relative p-4 mt-52">
              <BackgroundGlow
                className="absolute z-0 mb-20 mr-4 opacity-70"
                size={100}
              />
              <Image
                className="w-20 mx-auto"
                src={`/img/mixtape/mt-logo.png`}
                alt={''}
                height={1008}
                width={1008}
              />
              <p className="-mt-1 text-3xl font-black text-center text-white">
                Mixtape
              </p>
              <p className="mt-1 text-xs text-center text-white/40">
                Not actual logo
              </p>
            </FadeY>
            {/* FORM */}
            <div className="relative z-10">
              <div className="flex flex-col p-4 gap-y-2">
                <FadeY delay={0.75}>
                  <input
                    className="text-[17px] shadow-md px-4 border text-white border-white/10 placeholder:text-white/30 rounded-[10px] bg-white/5 h-[58px] w-full"
                    placeholder="Email"
                    type="email"
                  />
                </FadeY>
                <FadeY delay={1}>
                  <input
                    className="text-[17px] px-4 shadow-md border text-white border-white/10 placeholder:text-white/30 rounded-[10px] bg-white/5 h-[58px] w-full"
                    placeholder="Password"
                    type="password"
                  />
                </FadeY>
              </div>
              <FadeY delay={1.25} className="flex flex-col p-4 gap-y-2">
                <BlockButton title={'Sign up with email'} url={'../'} />
                <Link
                  href={'../'}
                  className="text-[17px] flex justify-center rounded-[10px] items-center hover:brightness-90 transition-all font-medium bg-white h-[50px] text-black w-full">
                  <LogoApple className="w-6 h-6 mr-2 text-black" /> Continue
                  with Apple
                </Link>
              </FadeY>
              <FadeY
                delay={1.5}
                className="border-t-[.5px] border-white/20 pt-5 pb-12">
                <p className="text-white text-[17px] text-center">
                  Already have an account?{' '}
                  <span className="text-[#0A84FF]">Sign In</span>
                </p>
              </FadeY>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginView
