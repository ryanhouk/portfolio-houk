import React from "react";

type Props = {
    className: string;
    strokeColor: string;
    strokeWidth: number;
};

const Close = ({ className, strokeColor, strokeWidth }: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export default Close;
