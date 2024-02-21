import React from "react";

type Props = {
    className: string;
    strokeColor: string;
};

const IconCode = ({ className, strokeColor }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 14 14"
        >
            <g fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round">
                <rect width="13" height="13" x="0.5" y="0.5" rx="1"></rect>
                <path d="M0.5 4L13.5 4"></path>
                <path d="M4.5 7L3 8.5 4.5 10"></path>
                <path d="M10 7L11.5 8.5 10 10"></path>
                <path d="M6.5 10.5L8 6"></path>
            </g>
        </svg>
    );
};

export default IconCode;
