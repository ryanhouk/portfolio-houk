import React from "react";

type Props = {
    className: string;
    strokeColor: string;
};

const IconProcess = ({ className, strokeColor }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className={className} ><g><polyline points="6.5 13.5 4 11 12.5 11" fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" /><polyline points="13.5 4 12.5 7.5 8 0.5" fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" /><polyline points="2 3.5 5.5 3.5 0.5 10.5" fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" /></g></svg>
    );
};

export default IconProcess;
