import React, { useEffect } from 'react'
import Link from 'next/link'
import LogoApple from '../../svg/LogoApple'
import Image from 'next/image'
import MixNavbar from '../../components/MixNavbar'
import { FadeY } from '../../../../components/animations'
import BackgroundGlow from '../../../../components/animations/BackgroundGlow'

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
      <MixNavbar />

      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <Image
          id="iphone"
          className="w-[473px] h-[932px] object-cover object-center absolute"
          src={'/img/mixtape/frames/iphone.png'}
          alt={''}
          width={473}
          height={932}
          priority // This prop ensures the image is loaded as high priority
        />
        {/* PHONE CONTAINER */}
        <div className="w-[393px] h-[852px] bg-black relative overflow-clip rounded-[55px]">
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
                <Link
                  href={'../'}
                  className="ext-[17px] flex justify-center rounded-[10px] items-center hover:brightness-90 transition-all font-medium bg-[#0A84FF] h-[50px] text-white w-full">
                  Sign Up with Email
                </Link>
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
