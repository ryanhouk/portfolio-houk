import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className="h-screen bg-slate-100 relative overflow-clip font-medium">
        <section className="">
          <p className="font-mono uppercase text-sm">Small Heading</p>
          <h1 className="text-3xl lg:text-9xl font-black text-red-600">
            About Me
          </h1>
          <img
            src="/img/pkg-01.webp"
            alt=""
            className="w-[1400px] absolute -right-64 top-0"
          />
        </section>
      </div>
    </>
  );
};

export default About;
