import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
  className: string;
//   title: string;
  description: string;
  delay?: number;
  cardUrl: string;
  target?: "_blank" | "_self";
}

const CardGhostImg = ({
  className,
  cardUrl,
  description,
//   title,
//   children,
  target,
}: Props) => {
  return (
    <>
      <Link
        target={target}
        href={cardUrl}
        className="transition-all duration-200"
      >
        <div
          className={`group h-64 flex flex-col justify-between rounded-sm border-2 border-white/20 hover:border-white bg-brand-dark p-8 duration-300 hover:bg-white ${className}`}
        >
            
            <p className="font-mono text-sm text-white opacity-60 group-hover:text-black">
              {description}
            </p>
          </div>
      </Link>
    </>
  );
};

export default CardGhostImg;
