import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DetailsHeader from '../../../components/header/DetailsHeader';
import DetailsNav from '../../../components/nav/DetailsNav';
import IconDevices from '../../../components/svg/IconDevices';

const KloveDetails: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure the user has access before displaying the page
    const hasAccess = localStorage.getItem('hasAccess_klove');
    if (hasAccess !== 'true') {
      // If not, redirect back to the password entry page
      router.push('/enter-password');
    }
  }, [router]);

  return (
    <>
    {/* NAV */}
    <DetailsNav />

    {/* HERO */}
        <section className='h-screen bg-white overflow-clip'>
          <DetailsHeader icon={<IconDevices startColor={'#dc2626'} endColor={'#facc15'} className='w-10 lg:w-16' />} title={'Content Heavy Platforms'} imgSrc={`/img/mockup/klove/web/tv-player-bottom.jpg`} />
        </section>

      {/* INTRO TEXT */}
      <section className='py-12 lg:py-20 bg-orange-100'>
        <div className='grid grid-cols-2 max-w-5xl mx-auto'>
          <div className="col-span-1">
            <h2 className='text-sm tracking-wide text-orange-700 uppercase mb-2'>The Problem</h2>
            <p className='font-mono'>Problem statement</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </>
  );
};

export default KloveDetails;
