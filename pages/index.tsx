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
        <div className="absolute top-[14rem] -left-32 z-10 hidden w-[28.5rem] rotate-90 p-4 selection:bg-black/10 xl:flex">
          <p className="text-justify font-mono text-[.75rem] leading-relaxed opacity-70">
            Please don&apos;t do vertical text ❌ Sure it looks cool, but
            it&apos;s a pain in the butt to read and isn&apos;t very accessible.
          </p>
        </div>
        <div className="absolute right-12 top-12 z-10 hidden gap-10 xl:flex xl:flex-col">
          <Link
            className="group"
            target={"_blank"}
            href={"https://medium.com/@ryanhouk"}
          >
            <MediumSVG
              className={
                "mx-auto w-[32px] transition-all duration-200 group-hover:-translate-y-1"
              }
              fillColor={"#000"}
            />
            <div className="mx-auto mt-2 text-center font-mono text-[.75rem] transition-all duration-200 group-hover:text-red-600">
              Medium
            </div>
          </Link>
          <Link className="group" target={"_blank"} href={""}>
            <LinkedInSVG
              className={
                "mx-auto w-[24px] transition-all duration-200 group-hover:-translate-y-1 group-hover:text-red-600"
              }
              fillColor={"#000"}
            />
            <div className="mx-auto mt-2 text-center font-mono text-[.75rem] transition-all duration-200 group-hover:text-red-600">
              LinkedIn
            </div>
          </Link>
          <Link className="group" target={"_blank"} href={""}>
            <TwitterSVG
              className={
                "mx-auto w-[26px] transition-all duration-200 group-hover:-translate-y-1 group-hover:text-red-600"
              }
              fillColor={"#000"}
            />
            <div className="mx-auto mt-2 text-center font-mono text-[.75rem] transition-all duration-200 group-hover:text-red-600">
              Twitter
            </div>
          </Link>
          <Link
            className="group"
            target={"_blank"}
            href={"https://dribbble.com/ryanhouk"}
          >
            <DribbbleSVG
              className={
                "mx-auto w-[24px] transition-all duration-200 group-hover:-translate-y-1 group-hover:text-red-600"
              }
              fillColor={"#000"}
            />
            <div className="mx-auto mt-2 text-center font-mono text-[.75rem] transition-all duration-200 group-hover:text-red-600">
              Dribbble
            </div>
          </Link>
          <Link
            className="group"
            target={"_blank"}
            href={"https://www.polywork.com/ryanhouk"}
          >
            <PolyworkSVG
              className={
                "mx-auto w-[16px] transition-all duration-200 group-hover:-translate-y-1 group-hover:text-red-600"
              }
              fillColor={"#000"}
            />
            <div className="mx-auto mt-2 text-center font-mono text-[.75rem] transition-all duration-200 group-hover:text-red-600">
              Polywork
            </div>
          </Link>
        </div>

        <LineVerticalSVG
          className={
            "absolute left-36 top-0 z-10 hidden h-full opacity-25 xl:flex"
          }
          strokeColor={"#000"}
          strokeWidth={0.1}
        />

        <LineVerticalSVG
          className={
            "absolute right-36 top-0 z-10 hidden h-full opacity-25 xl:flex"
          }
          strokeColor={"#000"}
          strokeWidth={0.1}
        />

        {/* INTRO */}
        <section className="relative flex items-center justify-center bg-brand-light pb-16 selection:bg-black/10 lg:pt-24 lg:pb-48">
          {/* <div className="h-32 w-32 lg:w-64 lg:h-64 absolute mx-auto rounded-full border-black border-[2px] left-0 right-0 -bottom-16 lg:-bottom-32 hidden lg:block"></div> */}
          <img
            src="/img/object/box-logos-rick.webp"
            alt="old box with software logos all over it"
            className="absolute -top-[240px] z-30 mx-auto w-[900px] px-8 drop-shadow-3xl transition-all duration-300 hover:-top-[400px] hover:rotate-45 sm:-top-[600px] lg:-top-[750px] lg:w-[1000px] lg:drop-shadow-4xl"
          />
          {/* <RoundScribbleSVG
            className={"w-[400px] absolute left-0 top-0 right-0 mx-auto hidden lg:block z-0"}
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          /> */}
          <FadeY className="max-w-7xl pt-24 lg:pt-0" once={true}>
            <h1 className="px-12 pt-16 pb-4 text-center text-5xl font-black sm:text-9xl lg:pt-52 lg:pb-12 xl:text-[200px]">
              It&apos;s been a{" "}
              <span className="text-border cursor-cell transition-all duration-200">
                minute.
              </span>
            </h1>
            <p className="mx-auto px-12 text-center font-mono leading-relaxed lg:w-4/6">
              <span className="text-black/70">
                This is another portfolio site. It might look a little messy,
                but design, development, usability testing, and iterating is
                often a little messy.{" "}
              </span>
              😊
            </p>
            <div className="flex justify-center">
              <ArrowDownSVG
                className={"mt-16 w-8 animate-bounce"}
                strokeColor={"#000"}
              />
            </div>
          </FadeY>
          <img
            src="/img/photo/morty.webp"
            alt="picture of morty smith"
            className="absolute right-8 bottom-6 hidden w-28 lg:flex"
          />
          <img
            src="/img/sticker/sticker-gray-round-thumb.png"
            alt="design without ego sticker"
            className="absolute -right-20 -bottom-16 z-20 w-48 -rotate-12 drop-shadow-md transition-all duration-200 hover:rotate-0 lg:-right-24 lg:-bottom-24 lg:w-[26rem]"
          />
          {/* SUMMER SMITH */}
          <img
            src="/img/photo/summer-smith.webp"
            alt=""
            className="absolute left-0 right-0 -bottom-[320px] z-0 mx-auto hidden w-48 drop-shadow-sm transition-all duration-500 hover:-bottom-8 lg:block"
          />
        </section>

        {/* ABOUT ME */}
        <section className="relative bg-red-600 py-12 selection:bg-black/10 lg:mx-12 lg:py-32 xl:py-48">
          <RoundScribbleSVG
            className={"absolute left-8 top-8 z-0 hidden w-[400px] lg:block"}
            strokeColor={"#000"}
            strokeWidth={0.5}
          />
          <img
            className="absolute -left-24 top-0 z-0 hidden w-[400px] rotate-12 drop-shadow-lg transition-all duration-200 hover:rotate-0 lg:block"
            src="/img/photo/self-bw-car.png"
            alt="photo of ryan with beard and beanie"
          />
          {/* <img src="/img/photo/summer-smith.webp" alt="" className="absolute left-0 right-0 mx-auto -top-4 z-0 w-48 hover:-top-48 hidden lg:block transition-all duration-300" /> */}
          <FadeY
            className="relative z-10 mx-auto max-w-7xl px-8 lg:px-0"
            delay={0.2}
          >
            <h2 className="text-border-test text-center text-5xl font-black text-white drop-shadow-sm sm:text-9xl xl:text-[200px]">
              It&apos;s been a{" "}
              <span className="text-border cursor-cell transition-all duration-200">
                journey.
              </span>
            </h2>
          </FadeY>
          <div className="mt-12 h-[.5px] bg-black"></div>
          <FadeY className="mx-auto mt-16 max-w-5xl lg:mt-24" delay={0.2}>
            <img
              className="mx-auto -mb-16 w-48 transition-all duration-200 lg:w-72"
              src="/img/sticker/tape-gray.png"
              alt="piece of duct tape stuck to a letter"
            />
            <div className="m-4 rounded-sm bg-white p-4 py-12 shadow-md lg:p-16 lg:py-16">
              <h2 className="mb-8 font-mono">A brief history.</h2>
              <p className="mb-8 font-mono leading-loose">
                I could say I&apos;m a designer who loves to create meaningful
                experiences etcetera, but we&apos;ve all read that so many times
                it&apos;s become a cliche. I&apos;ve been doing this for a long
                time and have had both successes and failures. Empathy? Yep!
                Usability testing? Yep! Aligning business and customer goals?
                Yessir. Feedback and collaboration SOMETHING.
              </p>
              <p className="mb-8 font-mono leading-loose">
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
            <RectangeDotsSVG
              className={"mx-auto -mt-10 w-72"}
              fillColor={"#000"}
            />
          </FadeY>
          <RoundScribbleSVG
            className={
              "absolute -right-24 -bottom-32 hidden w-[500px] lg:block"
            }
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          />
          <img
            src="/img/object/cd-ns.webp"
            alt="cd case with macromedia and pepsi logos"
            className="flex justify-center p-8 drop-shadow-2xl lg:absolute lg:-right-10 lg:-bottom-16 lg:w-[500px] lg:-rotate-12 lg:p-0"
          />
        </section>

        {/* BEEN BUSY */}
        <section className="relative py-12 lg:py-32 xl:py-48">
          <FadeY
            className="mx-auto mb-16 max-w-7xl px-8 selection:bg-black/10"
            delay={0.25}
          >
            <h2 className="z-20 mb-8 text-center text-5xl font-black sm:text-9xl lg:px-12 xl:text-[200px]">
              It&apos;s been{" "}
              <span className="text-border cursor-cell transition-all duration-200">
                busy.
              </span>
            </h2>
            <p className="mx-auto text-center font-mono text-black/70 lg:w-2/3">
              Halvah marzipan marshmallow apple pie shortbread croissant apple
              pie macaroon.
            </p>
          </FadeY>
          <FadeY
            delay={0.2}
            className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:px-12"
          >
            <CardIcon
              description={
                "Gummi bears cotton candy powder apple pie caramels cake"
              }
              title={"Design"}
              className={"lg:h-72"}
            >
              <IconDesignTechSVG
                className={
                  "mb-6 w-16 transition-all duration-300 group-hover:-rotate-6"
                }
                strokeColor={"#000"}
              />
            </CardIcon>
            <CardIcon
              description={
                "Gummi bears cotton candy powder apple pie caramels cake"
              }
              title={"Code"}
              className={"lg:h-72"}
            >
              <IconCodeSVG
                className={
                  "mb-6 w-14 transition-all duration-300 group-hover:-rotate-6"
                }
                strokeColor={"#000"}
              />
            </CardIcon>
            <CardIcon
              description={
                "Gummi bears cotton candy powder apple pie caramels cake"
              }
              title={"Blog"}
              className={"lg:h-72"}
            >
              <IconWriteSVG
                className={
                  "mb-6 w-14 transition-all duration-300 group-hover:-rotate-6"
                }
                strokeColor={"#000"}
              />
            </CardIcon>
            <CardIcon
              description={
                "Gummi bears cotton candy powder apple pie caramels cake"
              }
              title={"Process"}
              className={"relative overflow-clip lg:h-72"}
            >
              <IconProcessSVG
                className={
                  "mb-6 w-14 transition-all duration-300 group-hover:-rotate-6"
                }
                strokeColor={"#000"}
              />
              {/* <RoundScribbleSVG className={"w-52 opacity-0 -left-12 -bottom-12 group-hover:opacity-10 absolute transition-all duration-300"} strokeColor={"#000"} strokeWidth={2} /> */}
            </CardIcon>
          </FadeY>
          {/* <div className="h-32 w-32 lg:w-64 lg:h-64 absolute rounded-full border-red-600 border-[.5px] -right-16 -bottom-16 lg:-bottom-32"></div> */}
          {/* <div className="h-[.5px] bg-black w-full mt-12 lg:mt-32 xl:mt-48 hidden lg:flex"></div> */}
        </section>

        {/* PROJECTS */}
        <section className="relative bg-brand-dark py-12 lg:mx-12 lg:py-32 xl:py-48">
          <CrossSVG
            className={
              "absolute left-0 right-0 -top-12 mx-auto hidden w-24 lg:-top-32 lg:block lg:w-64"
            }
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          />
          <RoundScribbleSVG
            className={"absolute -left-72 -top-16 hidden w-[370px] lg:block"}
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          />
          <RoundLinesOutSVG
            className={
              "absolute -right-40 -bottom-12 hidden w-[370px] lg:block"
            }
            strokeColor={"#dc2626"}
          />
          <img
            src="/img/sticker/sticker-gray-round.png"
            alt="sticker with design with care written on it"
            className="absolute -left-24 hidden w-48 rotate-12 transition-all hover:rotate-0 lg:-top-16 lg:flex lg:w-80"
          />
          <FadeY
            className="mb-16 px-8 selection:bg-white/10 lg:mb-32"
            delay={0.15}
          >
            <h2 className="relative z-20 mb-8 text-center text-5xl font-black text-white sm:text-9xl lg:px-12 xl:text-[200px]">
              Projects.
            </h2>
            <p className="mx-auto text-center font-mono leading-relaxed text-white/70 lg:w-2/3">
              A deeper look into the projects and products I&apos;ve worked on.
            </p>
          </FadeY>
          <FadeY delay={0.15}>
            <p className="font-lg text-center font-mono text-white">
              Coming soon.
            </p>
          </FadeY>
          <FadeY className="max-w-screen-2xl mx-auto h-96 mt-16" delay={.15}>
            <img src="/img/mockup/crc/crc-paper-01.webp" alt="" className="absolute -rotate-6 w-full p-8 lg:p-24" />
            <img src="/img/mockup/klove/tvos-paper-min.webp" alt="" className="absolute rotate-6 w-full p-8 lg:p-24" />
          </FadeY>
        </section>
        {/* CLOSING CONTAINER DIV */}
      </div>
    </>
  );
}
