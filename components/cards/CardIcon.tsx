import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FadeY } from "../animations";


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
      <FadeY delay={delay} className={`p-8 rounded-sm flex flex-col justify-between border-2 border-red-600 hover:border-black bg-red-600 group hover:bg-white hover:shadow-2xl hover:text-brand-dark duration-300 ${className}`}>
        <div className="z-10">
          {children}
        </div>
        <div className="z-10">
          <h5 className="text-white font-extrabold text-lg lg:text-xl group-hover:text-black mb-2">{title}</h5>
          <p className="text-white font-mono opacity-60 text-sm group-hover:text-black">{description}</p>
        </div>
      </FadeY>
    </Link>
  </>;
};

export default CardIcon;
