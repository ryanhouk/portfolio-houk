import React from 'react';

interface IconDevicesProps {
  startColor: string;
  endColor: string;
  className?: string; // className is optional
}

const IconDevices: React.FC<IconDevicesProps> = ({ startColor, endColor, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className} // Apply the className prop here
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor }} />
          <stop offset="100%" style={{ stopColor: endColor }} />
        </linearGradient>
      </defs>
      {/* Apply the gradient to the stroke of both paths */}
      <path d="M10 15H4V6a2 2 0 012-2h12a2 2 0 012 2v2M2 18h12" stroke="url(#gradient1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"></path>
      <path d="M14 9.2c0-.663.597-1.2 1.333-1.2h5.334C21.403 8 22 8.537 22 9.2v9.6c0 .663-.597 1.2-1.333 1.2h-5.334C14.597 20 14 19.463 14 18.8V9.2zM18 17h.01" stroke="url(#gradient1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"></path>
    </svg>
  );
};

export default IconDevices;
