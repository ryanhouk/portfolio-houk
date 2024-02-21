import React from "react";

type Props = {
    className: string;
};

const TwitterX = ({ className }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            className={className}
        >
            <g fill="currentColor" fillRule="evenodd" stroke="none">
                <g fill="currentColor" fillRule="nonzero">
                    <path d="M16.99 0h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L3.736 19.5H.426l7.73-8.835L0 0h6.826l4.713 6.231L16.99 0zm-1.161 17.52h1.833L5.83 1.876H3.863L15.829 17.52z"></path>
                </g>
            </g>
        </svg>
    );
};

export default TwitterX;
