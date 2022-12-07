import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FadeY } from "../animations";
import { ArrowRightSVG } from "../svg";


interface Props extends PropsWithChildren<any> {
  className: string;
  title: string;
  description: string;
  delay?: number;
  // cardUrl: string;
}

const CardIcon = ({ className, delay, cardUrl, description, title, children }: Props) => {

  return <>
    <Link href="" className="hover:-translate-y-2 transition-all duration-200">
      <div className={`p-8 rounded-sm flex flex-col justify-between border-2 border-red-600 hover:border-black bg-red-600 group hover:bg-white hover:shadow-2xl hover:text-brand-dark duration-300 ${className}`}>
        <div className="z-10">
          {children}
        </div>
        <div className="z-10">
          <h5 className="text-white font-extrabold text-lg lg:text-xl group-hover:text-black mb-2 flex items-center">{title} <ArrowRightSVG className={"w-6 group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 mt-1"}
            strokeColor={"#000"} strokeWidth={2} /></h5>
          <p className="text-white font-mono opacity-60 text-sm group-hover:text-black">{description}</p>
        </div>
      </div>
    </Link>
  </>;
};

export default CardIcon;
