import Link from "next/link";
import { FadeY } from "../components/animations";
import { CardIcon } from "../components/cards";
import {
  ArrowDownSVG,
  CrossSVG,
  DribbbleSVG,
  IconCodeSVG,
  IconDesignTechSVG,
  IconProcessSVG,
  IconWriteSVG,
  LineVerticalSVG,
  LinkedInSVG,
  MediumSVG,
  PolyworkSVG,
  RectangeDotsSVG,
  RoundLinesOutSVG,
  RoundScribbleSVG,
  TwitterSVG,
} from "../components/svg";

export default function Home() {
  return (
    <>
      {/* CONTAINER DIV */}
      <div className="overflow-clip">
        {/* HERO */}
        <div className="absolute z-10 w-[28.5rem] rotate-90 top-[14rem] -left-32 hidden p-4 xl:flex selection:bg-black/10">
          <p className="font-mono text-[.75rem] text-justify leading-relaxed opacity-70">
            Please don't do vertical text ❌ Sure it looks cool, but it's a pain in
            the butt to read and isn't very accessible.
          </p>
        </div>
        <div className="absolute right-12 top-12 z-10 hidden xl:flex xl:flex-col gap-10">
          <Link className="group" target={'_blank'} href={"https://medium.com/@ryanhouk"}>
            <MediumSVG className={"w-[32px] mx-auto group-hover:-translate-y-1 transition-all duration-200"} fillColor={"#000"} />
            <div className="font-mono mx-auto text-[.75rem] text-center mt-2 group-hover:text-red-600 transition-all duration-200">Medium</div>
          </Link>
          <Link className="group" target={'_blank'} href={""}>
            <LinkedInSVG className={"w-[24px] mx-auto group-hover:-translate-y-1 transition-all group-hover:text-red-600 duration-200"} fillColor={"#000"} />
            <div className="font-mono group-hover:text-red-600 mx-auto text-[.75rem] text-center mt-2 transition-all duration-200">LinkedIn</div>
          </Link>
          <Link className="group" target={'_blank'} href={""}>
            <TwitterSVG className={"w-[26px] mx-auto group-hover:-translate-y-1 transition-all group-hover:text-red-600 duration-200"} fillColor={"#000"} />
            <div className="font-mono group-hover:text-red-600 mx-auto text-[.75rem] text-center mt-2 transition-all duration-200">Twitter</div>
          </Link>
          <Link className="group" target={'_blank'} href={"https://dribbble.com/ryanhouk"}>
            <DribbbleSVG className={"w-[24px] mx-auto group-hover:-translate-y-1 transition-all group-hover:text-red-600 duration-200"} fillColor={"#000"} />
            <div className="font-mono group-hover:text-red-600 mx-auto text-[.75rem] text-center mt-2 transition-all duration-200">Dribbble</div>
          </Link>
          <Link className="group" target={'_blank'} href={"https://www.polywork.com/ryanhouk"}>
            <PolyworkSVG className={"w-[16px] mx-auto group-hover:-translate-y-1 transition-all group-hover:text-red-600 duration-200"} fillColor={"#000"} />
            <div className="font-mono group-hover:text-red-600 mx-auto text-[.75rem] text-center mt-2 transition-all duration-200">Polywork</div>
          </Link>
        </div>

        <LineVerticalSVG
          className={
            "h-full absolute left-36 top-0 z-10 hidden xl:flex opacity-25"
          }
          strokeColor={"#000"}
          strokeWidth={0.1}
        />

        <LineVerticalSVG
          className={
            "h-full absolute right-36 top-0 z-10 hidden xl:flex opacity-25"
          }
          strokeColor={"#000"}
          strokeWidth={0.1}
        />

        {/* INTRO */}
        <section className="relative pb-16 lg:pt-24 lg:pb-48 bg-brand-light flex justify-center items-center selection:bg-black/10">
          {/* <div className="h-32 w-32 lg:w-64 lg:h-64 absolute mx-auto rounded-full border-black border-[2px] left-0 right-0 -bottom-16 lg:-bottom-32 hidden lg:block"></div> */}
          <img
            src="/img/object/box-logos-rick.webp"
            alt="old box with software logos all over it"
            className="z-30 w-[900px] lg:w-[1000px] absolute hover:rotate-45 mx-auto hover:-top-[400px] -top-[240px] sm:-top-[600px] lg:-top-[750px] drop-shadow-4xl transition-all duration-300 px-8"
          />
          {/* <RoundScribbleSVG
            className={"w-[400px] absolute left-0 top-0 right-0 mx-auto hidden lg:block z-0"}
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          /> */}
          <FadeY className="max-w-7xl lg:pt-0 pt-24" once={true}>
            <h1 className="text-5xl sm:text-9xl xl:text-[200px] font-black px-12 pt-16 lg:pt-52 pb-4 lg:pb-12 text-center">
              It's been a minute.
            </h1>
            <p className="font-mono text-center mx-auto px-12 lg:w-4/6 leading-relaxed">
              <span className="text-black/70">This is another portfolio site. It might look a little messy, but design, development, usability testing, and iterating is often a little messy. </span>😊
            </p>
            <div className="flex justify-center">
              <ArrowDownSVG className={"w-8 mt-16 animate-bounce"} strokeColor={"#000"} />
            </div>
          </FadeY>
          <img src="/img/photo/morty.webp" alt="picture of morty smith" className="w-28 absolute right-8 bottom-6 hidden lg:flex" />
          <img src="/img/sticker/sticker-gray-round-thumb.png" alt="design without ego sticker" className="absolute hover:rotate-0 duration-200 transition-all -right-20 -bottom-16 lg:-right-24 lg:-bottom-24 -rotate-12 w-48 lg:w-[26rem] z-20 drop-shadow-md" />
          {/* SUMMER SMITH */}
          <img src="/img/photo/summer-smith.webp" alt="" className="absolute drop-shadow-sm left-0 right-0 hover:-bottom-8 -bottom-[320px] mx-auto z-0 w-48 hidden lg:block transition-all duration-500" />
        </section>


        {/* ABOUT ME */}
        <section className="relative py-12 lg:py-32 xl:py-48 bg-red-600 selection:bg-black/10 lg:mx-12">
          <RoundScribbleSVG
            className={"w-[400px] absolute left-8 top-8 hidden lg:block z-0"}
            strokeColor={"#000"}
            strokeWidth={0.5}
          />
          <img
            className="absolute -left-24 top-0 z-0 w-[400px] rotate-12 hidden lg:block drop-shadow-lg hover:rotate-0 transition-all duration-200"
            src="/img/photo/self-bw-car.png"
            alt="photo of ryan with beard and beanie"
          />
          {/* <img src="/img/photo/summer-smith.webp" alt="" className="absolute left-0 right-0 mx-auto -top-4 z-0 w-48 hover:-top-48 hidden lg:block transition-all duration-300" /> */}
          <FadeY className="z-10 mx-auto px-8 lg:px-0 relative" delay={0.2}>
            <h2 className="text-5xl text-center sm:text-9xl xl:text-[200px] font-black text-white drop-shadow-sm text-border-test">
              It's been a journey.
            </h2>
          </FadeY>
          <div className="h-[.5px] bg-black mt-12"></div>
          <FadeY className="max-w-5xl mx-auto mt-16 lg:mt-24" delay={0.2}>
            <img
              className="lg:w-72 w-48 mx-auto -mb-16 transition-all duration-200"
              src="/img/sticker/tape-gray.png"
              alt="piece of duct tape stuck to a letter"
            />
            <div className="p-4 lg:py-16 py-12 lg:p-16 bg-white shadow-md rounded-sm m-4">
              <h2 className="font-mono mb-8">A brief history.</h2>
              <p className="font-mono leading-loose mb-8">
                I could say I'm a designer who loves to create meaningful experiences etcetera, but we've all read that so many times it's become a cliche. I've been doing this for a long time and have had both successes and failures. Empathy? Yep! Usability testing? Yep! Aligning business and customer goals? Yessir. Feedback and collaboration SOMETHING.
              </p>
              <p className="font-mono leading-loose mb-8">
                Powder lollipop gummi bears lollipop apple pie. Dragée biscuit
                halvah carrot cake croissant sweet. Chocolate cake croissant
                pudding donut brownie sesame snaps bear claw. Pie sweet roll
                gummies soufflé croissant.
              </p>
              <p className="font-mono leading-loose">
                Powder lollipop gummi bears lollipop apple pie. Dragée biscuit
                halvah carrot cake croissant sweet. Chocolate cake croissant
                pudding donut brownie sesame snaps bear claw. Pie sweet roll
                gummies soufflé croissant. Powder lollipop gummi bears lollipop
                apple pie. Dragée biscuit halvah carrot cake croissant sweet.
                Chocolate cake croissant pudding donut brownie sesame snaps bear
                claw.
              </p>
            </div>
            <RectangeDotsSVG className={"w-72 mx-auto -mt-10"} fillColor={"#000"} />
          </FadeY>
          <RoundScribbleSVG
            className={"w-[500px] absolute -right-24 -bottom-32 hidden lg:block"}
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          />
          <img src="/img/object/cd-ns.webp" alt="cd case with macromedia and pepsi logos" className="lg:w-[500px] p-8 lg:p-0 lg:-rotate-12 lg:-right-10 lg:-bottom-16 lg:absolute flex justify-center drop-shadow-2xl" />
        </section>

        {/* BEEN BUSY */}
        <section className="py-12 lg:py-32 xl:py-48 relative">
          <FadeY className="mb-16 px-8 selection:bg-black/10 max-w-7xl mx-auto" delay={.25}>
            <h2 className="text-5xl sm:text-9xl xl:text-[200px] z-20 font-black lg:px-12 text-center mb-8">
              It's been busy.
            </h2>
            <p className="text-center font-mono mx-auto text-black/70 lg:w-2/3">
              Halvah marzipan marshmallow apple pie shortbread croissant apple pie macaroon.
            </p>
          </FadeY>
          <FadeY delay={.2} className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto z-10 relative px-8 lg:px-12 max-w-6xl">
            <CardIcon description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Design"} className={"lg:h-72"}>
              <IconDesignTechSVG className={"w-16 group-hover:-rotate-6 transition-all duration-300 mb-6"} strokeColor={"#000"} />
            </CardIcon>
            <CardIcon description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Code"} className={"lg:h-72"}>
              <IconCodeSVG className={"w-14 group-hover:-rotate-6 transition-all duration-300 mb-6"} strokeColor={"#000"} />
            </CardIcon>
            <CardIcon description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Blog"} className={"lg:h-72"}>
              <IconWriteSVG className={"w-14 group-hover:-rotate-6 transition-all duration-300 mb-6"} strokeColor={"#000"} />
            </CardIcon>
            <CardIcon description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Process"} className={"lg:h-72 relative overflow-clip"}>
              <IconProcessSVG className={"w-14 group-hover:-rotate-6 transition-all duration-300 mb-6"} strokeColor={"#000"} />
              {/* <RoundScribbleSVG className={"w-52 opacity-0 -left-12 -bottom-12 group-hover:opacity-10 absolute transition-all duration-300"} strokeColor={"#000"} strokeWidth={2} /> */}
            </CardIcon>
          </FadeY>
          {/* <div className="h-32 w-32 lg:w-64 lg:h-64 absolute rounded-full border-red-600 border-[.5px] -right-16 -bottom-16 lg:-bottom-32"></div> */}
          {/* <div className="h-[.5px] bg-black w-full mt-12 lg:mt-32 xl:mt-48 hidden lg:flex"></div> */}
        </section>

        {/* PROJECTS */}
        <section className="relative py-12 lg:py-32 xl:py-48 bg-brand-dark lg:mx-12">
          <CrossSVG className={"mx-auto w-24 lg:w-64 hidden lg:block absolute left-0 right-0 -top-12 lg:-top-32"} strokeColor={"#dc2626"} strokeWidth={.5} />
          {/* <RoundScribbleSVG
            className={"w-[370px] absolute -left-72 -top-16 hidden lg:block"}
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          /> */}
          <RoundLinesOutSVG
            className={"w-[370px] absolute -right-40 -bottom-12 hidden lg:block"}
            strokeColor={"#dc2626"} />
          <img src="/img/sticker/sticker-gray-round.png" alt="sticker with design with care written on it" className="absolute hidden lg:flex rotate-12 hover:rotate-0 w-48 lg:w-80 -right-24 lg:bottom-16 transition-all" />
          <FadeY className="mb-16 lg:mb-32 px-8 selection:bg-white/10" delay={.15}>
            <h2 className="text-5xl relative sm:text-9xl xl:text-[200px] z-20 font-black text-white lg:px-12 text-center mb-8">
              Projects.
            </h2>
            <p className="text-center font-mono mx-auto text-white/70 lg:w-2/3 leading-relaxed">
              A deeper look into the projects and products I've worked on.
            </p>
          </FadeY>
          <FadeY delay={.15}>
            <p className="text-center text-white font-lg font-mono">Coming soon.</p>
          </FadeY>
        </section>
        {/* CLOSING CONTAINER DIV */}
      </div>
    </>
  );
}
