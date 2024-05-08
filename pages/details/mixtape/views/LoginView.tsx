import React, { useEffect } from 'react'
import Toggle from '../components/Toggle'
import BlockButton from '../components/BlockButton'
import Link from 'next/link'
import LogoApple from '../svg/LogoApple'

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
          {/* HERO */}
          <div>LOGO</div>

          {/* ACTIONS */}
          <div className="flex flex-col justify-end h-full">
            {/* FORM */}
            <div className="flex flex-col p-4 gap-y-2">
              <input
                className="text-[17px] px-4 border text-white border-white/10 placeholder:text-white/30 rounded-[10px] bg-white/5 h-[58px] w-full"
                placeholder="Email"
                type="email"
              />
              <input
                className="text-[17px] px-4 border text-white border-white/10 placeholder:text-white/30 rounded-[10px] bg-white/5 h-[58px] w-full"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex flex-col p-4 gap-y-2">
              <BlockButton title={'Sign up with email'} />
              <Link
                href={''}
                className="text-[17px] flex justify-center rounded-[10px] items-center hover:brightness-90 transition-all font-medium bg-white h-[50px] text-black w-full">
                <LogoApple className="w-6 h-6 mr-2 text-black" /> Continue with
                Apple
              </Link>
            </div>
            <div className="border-t-[.5px] border-white/20 pt-5 pb-20">
              <p className="text-white text-[17px] text-center">
                Already have an account?{' '}
                <span className="text-[#0A84FF]">Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginView
