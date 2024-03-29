import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface EnterPasswordProps {}

const EnterPassword: React.FC<EnterPasswordProps> = () => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Add state for error message
  const router = useRouter();

  const checkPassword = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage(null); // Reset error message on each attempt

    const response = await fetch('/api/checkPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const { isValid } = await response.json();

    if (isValid) {
      localStorage.setItem('hasAccess_klove', 'true');
      router.push('/details/klove');
    } else {
      setErrorMessage(`That's the wrong password. You can hit the link below to request access.`); // Set error message instead of alert
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'black';

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
    <>
      <div className='flex flex-col lg:flex-row h-screen'>
        <div className='flex-1 flex items-center justify-center'>
          <section className='mx-6 w-full max-w-sm'>
            <div className='text-white text-center mb-8'>
              <h1 className='text-3xl font-clash'>K-LOVE Platforms</h1>
              <p className='mt-4 font-mono text-sm opacity-60 leading-normal'>Please enter the password to view this case study. You can request access <Link className='hover:underline' href={`mailto:ryan.houk@proton.me?subject=Hi, Ryan! I'd like access to K-LOVE.`}>here</Link>.</p>
            </div>
            <form onSubmit={checkPassword} className='flex flex-col items-center'>
              <div className="relative w-full mb-4">
                <input
                  className='rounded-lg p-3 w-full'
                  placeholder='Enter password'
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 font-medium hover:underline"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errorMessage && <div className="text-white/60 text-center text-xs max-w-[270px] leading-normal mb-2">{errorMessage}</div>} {/* Conditionally display error message */}
              <button type="submit" className='border-2 mt-6 border-white px-8 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full'>Enter</button>
            </form>
            <div className='mt-8 text-center'>
              <Link className='hover:text-white text-white/60 transition-all hover:underline text-sm font-mono' href={`mailto:ryan.houk@proton.me?subject=Hi, Ryan! I'd like access to K-LOVE.`}>Request Access</Link>
            </div>
          </section>
        </div>
        <div className="flex-1 bg-[url('/img/mockup/klove/mob/kl-dual-full.webp')] bg-cover bg-no-repeat bg-center"></div>
      </div>
    </>
  );
};

export default EnterPassword;
