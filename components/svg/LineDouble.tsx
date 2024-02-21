import React from "react";

type Props = {
  className: string;
  strokeColor: string;
  strokeWidth: number;
};

const LineDouble = ({ className, strokeColor, strokeWidth }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 324 317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.5068 136.983L322.202 162.818"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M59.5068 136.983L322.202 162.818"
        stroke={strokeColor}
        stroke-opacity="0.2"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1 153.981L263.696 179.816"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1 153.981L263.696 179.816"
        stroke={strokeColor}
        stroke-opacity="0.2"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default LineDouble;
