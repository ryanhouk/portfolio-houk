import React from "react";

type Props = {
  className: string;
  strokeColor: string;
  strokeWidth: number;
};

const VerticalLine = ({ className, strokeColor, strokeWidth }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1 101"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="none"
        strokeWidth={strokeWidth}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <line
          x1="0.5"
          y1="0.5"
          x2="0.5"
          y2="100.5"
          id="Line"
          stroke={strokeColor}
        ></line>
      </g>
    </svg>
  );
};

export default VerticalLine;
