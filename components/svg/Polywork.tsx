import React from "react";

type Props = {
    className: string;
    fillColor: string;
};

const Polywork = ({ className, fillColor }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 320 448"
        >
            <g fill="none" fillRule="evenodd">
                <path
                    fill={fillColor}
                    fillRule="nonzero"
                    d="M32 0h128c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32S0 433.7 0 416V32C0 14.3 14.3 0 32 0zm32 256h96c53 0 96-43 96-96s-43-96-96-96H64v192z"
                ></path>
            </g>
        </svg>
    );
};

export default Polywork;
