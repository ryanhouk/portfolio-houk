import React from "react";

type Props = {
    className: string;
    strokeColor: string;
    strokeWidth: number;
};

const Cross = ({ className, strokeColor, strokeWidth }: Props) => {
    return (


        <svg className={className} viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
                <polygon id="Path" stroke={strokeColor} stroke-width={strokeWidth} points="39.4 2 26.9 14.5 14.4 2 2 14.4 14.5 26.9 2 39.4 14.4 51.8 26.9 39.3 39.4 51.8 51.8 39.4 39.3 26.9 51.8 14.4"></polygon>
            </g>
        </svg>

    );
};

export default Cross;
