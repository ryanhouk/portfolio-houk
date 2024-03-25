import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DetailsHeader from '../../../components/header/DetailsHeader';
import DetailsNav from '../../../components/nav/DetailsNav';

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
      <div className='h-screen bg-white'>
        <section>
          <DetailsHeader title={'Content Heavy Platforms'} imgSrc={`/img/mockup/klove/web/tv-player-center.jpg`} />
        </section>
      </div>
    </>
  );
};

export default KloveDetails;
