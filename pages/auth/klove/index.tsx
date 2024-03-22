import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const EnterPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const checkPassword = (event: FormEvent) => {
    event.preventDefault();
    const envPassword = process.env.NEXT_PUBLIC_PASSWORD_KLOVE;

    if (password === envPassword) {
      localStorage.setItem('hasAccess_klove', 'true');
      router.push('/details/klove');
    } else {
      alert('Wrong password!');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row h-screen'>
        {/* Centering Wrapper */}
        <div className='flex-1 flex items-center justify-center'>
          <section className='mx-6 w-full max-w-sm'>
            {/* INTRO */}
            <div className='text-white text-center mb-8'>
              <h1 className='text-3xl font-clash'>K-LOVE Platforms</h1>
              <p className='mt-4 font-mono text-sm opacity-60 leading-normal'>Please enter the password to view this case study. You can request access here.</p>
            </div>
            {/* FORM */}
            <form onSubmit={checkPassword} className='flex flex-col items-center'>
              <div className="relative w-full">
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
              <button type="submit" className='border-2 mt-6 border-white px-8 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full'>Enter</button>
            </form>
          </section>
        </div>

        {/* IMAGE */}
        <div className="flex-1 bg-[url('/img/mockup/klove/mob/kl-dual-full.webp')] bg-cover bg-no-repeat bg-center"></div>
      </div>
    </>
  );
};

export default EnterPassword;
