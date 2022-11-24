import React from "react";

type Props = {
    className: string;
    strokeColor: string;
};

const ArrowDown = ({ className, strokeColor }: Props) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
        >
            <g fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 0.5L7 13.5"></path>
                <path d="M10.5 10L7 13.5 3.5 10"></path>
            </g>
        </svg>
    );
};

export default ArrowDown;
