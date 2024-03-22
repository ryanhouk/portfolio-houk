import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FadeY } from '../../../components/animations';

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
    <FadeY delay={.25} className="flex justify-center items-center h-screen">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Klove Details</h1>
        <p className="mt-4">You have successfully accessed protected content!</p>
      </div>
    </FadeY>
  );
};

export default KloveDetails;
