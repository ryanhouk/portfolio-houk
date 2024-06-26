import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import IconDevices from '../../../components/svg/IconDevices'

interface EnterPasswordProps {}

const EnterPassword: React.FC<EnterPasswordProps> = () => {
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null) // Add state for error message
  const router = useRouter()

  const checkPassword = async (event: FormEvent) => {
    event.preventDefault()
    setErrorMessage(null) // Reset error message on each attempt

    const response = await fetch('/api/checkPasswordWebmob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })

    const { isValid } = await response.json()

    if (isValid) {
      localStorage.setItem('hasAccess_webmob', 'true') // Specific local storage key for WebMob
      router.push('/details/webmob') // Specific redirection for WebMob
    } else {
      setErrorMessage(
        `That's the wrong password for WebMob. You can hit the link below to request access.`
      ) // Set error message instead of alert
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor
    document.body.style.backgroundColor = 'black'

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])

  return (
    <>
      <div className="flex flex-col h-screen lg:flex-row">
        <div className="flex items-center justify-center flex-1">
          <section className="w-full max-w-sm mx-6">
            <IconDevices
              startColor={'#dc2626'}
              endColor={'#facc15'}
              className="w-10 mx-auto mb-4 lg:mb-6 lg:w-16"
            />
            <div className="mb-8 text-center text-white">
              <h1 className="text-3xl font-clash">WebMob</h1>
              <p className="mt-4 font-mono text-sm leading-normal opacity-60">
                Please enter the password to view this case study. You can
                request access{' '}
                <Link
                  className="hover:underline"
                  href={`mailto:ryan.houk@proton.me?subject=Hi, Ryan! I'd like access to WebMob.`}>
                  here
                </Link>
                .
              </p>
            </div>
            <form
              onSubmit={checkPassword}
              className="flex flex-col items-center">
              <div className="relative w-full mb-4">
                <input
                  className="w-full p-3 rounded-lg"
                  placeholder="Enter password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm font-medium leading-5 hover:underline"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errorMessage && (
                <div className="text-white/60 text-center text-xs max-w-[270px] leading-normal mb-2">
                  {errorMessage}
                </div>
              )}{' '}
              {/* Conditionally display error message */}
              <button
                type="submit"
                className="w-full px-8 py-3 mt-6 font-semibold text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black">
                Enter
              </button>
            </form>
            <div className="mt-8 text-center">
              <Link
                className="font-mono text-sm transition-all hover:text-white text-white/60 hover:underline"
                href={`mailto:ryan.houk@proton.me?subject=Hi, Ryan! I'd like access to K-LOVE.`}>
                Request Access
              </Link>
            </div>
          </section>
        </div>
        <div className="flex-1 bg-[url('/img/mockup/klove/mob/kl-dual-full.webp')] bg-cover bg-no-repeat bg-center"></div>
      </div>
    </>
  )
}

export default EnterPassword
