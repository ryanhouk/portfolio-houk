import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define your images data type
type ImageData = {
  src: string;
  alt: string;
};

// Sample data object with images
const imageData: ImageData[] = [
  { src: '/img/mockup/tablet.webp', alt: 'website on an ipad' },
  { src: '/img/mockup/phone.webp', alt: 'iphone with k love app' },
  { src: '/img/mockup/laptop.webp', alt: 'laptop with training website' },
  // Add more images as needed
];

const ImageLoop: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % imageData.length);
        setIsAnimating(false);
      }, 1500); // Match this duration to the transition duration
    }, 3000); // Change image every 3 seconds + transition time
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {imageData.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage || (isAnimating && index === (currentImage + 1) % imageData.length) ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image src={image.src} alt={image.alt} layout="fill" className='object-cover object-top' />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageLoop;
