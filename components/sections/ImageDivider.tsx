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
  { src: '/img/photos/photo-02.webp', alt: 'website on an ipad' },
  { src: '/img/photos/photo-01.webp', alt: 'iphone with k love app' },
  { src: '/img/photos/photo-03.webp', alt: 'laptop with training website' },
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
    <div className='relative mx-auto h-[200px] max-w-5xl overflow-clip rounded-md lg:h-[600px]'>
      {imageData.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0 }}
          animate={{
            opacity:
              index === currentImage ||
              (isAnimating && index === (currentImage + 1) % imageData.length)
                ? 1
                : 0,
          }}
          transition={{ duration: 1.5 }}
          className='absolute inset-0 h-full w-full px-4'
        >
          <Image
            src={image.src}
            alt={image.alt}
            height={1588}
            width={3000}
            className='object-cover object-top'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageLoop;
