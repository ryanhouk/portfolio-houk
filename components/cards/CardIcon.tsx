import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FadeY } from "../animations";
import { ArrowRightSVG } from "../svg";

interface Props extends PropsWithChildren<any> {
  className: string;
  title: string;
  description: string;
  delay?: number;
  cardUrl: string;
  target?: "_blank" | "_self";
}

const CardIcon = ({
  className,
  cardUrl,
  description,
  title,
  children,
  target,
}: Props) => {
  return (
    <>
      <Link
        target={target}
        href={cardUrl}
        className="transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2"
      >
        <div
          className={`group flex flex-col justify-between rounded-sm border-2 border-brand-dark bg-brand-dark p-8 duration-300 hover:border-black hover:bg-white hover:text-brand-dark hover:shadow-2xl ${className}`}
        >
          <div className="z-10">{children}</div>
          <div className="z-10">
            <h5 className="mb-2 flex items-center text-lg font-extrabold text-white group-hover:text-black lg:text-xl">
              {title}{" "}
              <ArrowRightSVG
                className={
                  "mt-1 w-6 opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:opacity-100"
                }
                strokeColor={"#000"}
                strokeWidth={2}
              />
            </h5>
            <p className="font-mono text-sm text-white opacity-60 group-hover:text-black">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardIcon;
