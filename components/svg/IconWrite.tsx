import React from "react";

type Props = {
    className: string;
    strokeColor: string;
};

const IconWrite = ({ className, strokeColor }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 14 14"
        >
            <g fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 13.5H1.5a1 1 0 01-1-1v-11a1 1 0 011-1H9M10.5 3.5l1.5-3 1.5 3V12a1.5 1.5 0 01-3 0z"></path>
                <path d="M10.5 9.5L13.5 9.5"></path>
                <path d="M3.5 0.5L3.5 13.5"></path>
                <path d="M6 4L8 4"></path>
            </g>
        </svg>
    );
};

export default IconWrite;
