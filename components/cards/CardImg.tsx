import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FadeY } from "../animations";
import { ArrowRightSVG } from "../svg";

interface Props extends PropsWithChildren<any> {
  className: string;
  title: string;
  description?: string;
  imgSrc: string;
  altText: string;
  cardUrl: string;
}

const CardImg = ({
  className,
  imgSrc,
  altText,
  cardUrl,
  description,
  title,
  children,
}: Props) => {
  return (
    <>
      <Link
        href={""}
        className="transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div
          className={`group flex h-full flex-col justify-start rounded-sm border-2 border-black duration-300 hover:text-brand-dark ${className}`}
        >
          <img
            src={imgSrc}
            alt={altText}
            className="aspect-video overflow-hidden border-b-2 border-black object-cover"
          />
          <div className="p-4">
            <h5 className="mb-2 flex items-center text-lg font-extrabold group-hover:text-black lg:text-xl">
              {title}
            </h5>
            <p className="font-mono text-sm opacity-60 group-hover:opacity-100">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardImg;
