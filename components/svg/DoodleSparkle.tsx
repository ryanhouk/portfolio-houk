import React from 'react';

type Props = {
    startColor: string;
    endColor: string;
    className?: string;
}

const DoodleSparkle = ({ startColor, endColor, className = 'w-10 h-10' }: Props) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className={className}
                viewBox="0 0 82 84"
            >
                <defs>
                    <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={startColor} />
                        <stop offset="100%" stopColor={endColor} />
                    </linearGradient>
                </defs>
                <path
                    stroke="url(#sparkleGradient)"
                    strokeLinecap="round"
                    strokeWidth="1.906"
                    d="M41.582 1.216c-1.796 4.609-1.197 8.882-1.023 13.747.226 6.318.418 12.596.877 18.903M41.065 45.18c-1.314 6.33-.723 12.5-.176 18.9.52 6.077 1.25 12.132 1.968 18.188M1.134 46.665c4.033-1.795 7.835-1.868 12.175-2.162 6.567-.446 12.894-1.294 19.347-2.551M47.263 40.096c11.15-.714 22.127-2.565 33.184-4.1M49.343 34.65l3.574-6.483M32.979 50.35l-4.34 4.29M52.636 48.666l4.315 2.91M31.549 30.847c-4.675-1.415-8.835-3.493-13.275-5.488"
                ></path>
            </svg>
        </>
    )
}

export default DoodleSparkle;
