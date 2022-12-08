import React from "react";

type Props = {
    className: string;
    strokeColor: string;
};

const RoundLinesOut = ({ className, strokeColor }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
            viewBox="0 0 74 73"
        >
            <path
                stroke={strokeColor}
                strokeDasharray="1.75 1.75"
                strokeWidth="0.875"
                d="M19.907 10.184c-1.979.698-3.706 1.326-5.24 2.002m0 0c-4.203 1.85-6.958 4.063-9.468 9.084-1.681 3.361-2.664 7.03-3.505 10.684-2.172 9.434 1.273 16.367 7.12 23.594C17.43 66.2 32.054 74.746 46.187 71.91 56.47 69.847 65.85 61.826 70.2 52.507c3.854-8.257 3.084-16.462 1.824-25.232C69.124 7.078 50.586-2.91 32.03 1.93c-5.351 1.396-10.02 3.839-14.153 7.503-1.07.948-2.107 1.89-3.21 2.753zm0 0c-.664.519-1.352 1.01-2.085 1.457-4.536 2.768-6.012 9.026-7.754 13.57"
            ></path>
        </svg>
    );
};

export default RoundLinesOut;
