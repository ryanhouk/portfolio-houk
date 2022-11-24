import React from "react";

type Props = {
    className: string;
    fillColor: string;
};

const ShapeTopLeft = ({ className, fillColor }: Props) => {
    return (
        <svg className={className} viewBox="0 0 634 135" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill={fillColor} fill-rule="nonzero">
                    <polygon id="Path" points="0 30 113 47 225 0 338 39 450 75 633.857544 135 0 135"></polygon>
                </g>
            </g>
        </svg>
    );
};

export default ShapeTopLeft;
