import React from "react";

type Props = {
    className: string;
    strokeColor: string;
};

const IconDesignTech = ({ className, strokeColor }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 14 14"
        >
            <g fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 9.5a1 1 0 001-1"></path>
                <path d="M4.5 9.5L6 9.5"></path>
                <path d="M9.5 4.5L9.5 6"></path>
                <path d="M5.5 4.5a1 1 0 00-1 1M.5 1.5a1 1 0 011-1h7a1 1 0 011 1v3h3a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-3h-3a1 1 0 01-1-1z"></path>
                <path d="M8 4.5L9.5 4.5"></path>
                <path d="M4.5 8L4.5 9.5"></path>
            </g>
        </svg>
    );
};

export default IconDesignTech;
