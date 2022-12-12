import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FadeY } from "../animations";
import { ArrowRightSVG } from "../svg";


interface Props extends PropsWithChildren<any> {
    className: string;
    title: string;
    description: string;
    imgSrc: string;
    altText: string;
    cardUrl: string;
}

const CardImg = ({ className, imgSrc, altText, cardUrl, description, title, children }: Props) => {

    return <>
        <Link href={""} className="hover:-translate-y-2 transition-all hover:shadow-2xl duration-200">
            <div className={`rounded-sm flex border-2 border-black flex-col justify-start group h-full hover:text-brand-dark duration-300 ${className}`}>
                <img src={imgSrc} alt={altText} className="aspect-video object-cover overflow-hidden border-b-2 border-black" />
                <div className="p-4">
                    <h5 className="font-extrabold text-lg lg:text-xl group-hover:text-black mb-2 flex items-center">{title}</h5>
                    <p className="font-mono opacity-60 text-sm group-hover:opacity-100">{description}</p>
                </div>
            </div>
        </Link>
    </>;
};

export default CardImg;
