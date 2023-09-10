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
          <img
            src="/img/object/box-logos-rick.webp"
            alt="old box with software logos all over it"
            className="absolute hidden lg:flex -top-[200px] z-30 mx-auto transition-all duration-300 hover:-top-[400px] hover:rotate-45 sm:-top-[600px] lg:-top-[700px] lg:w-[1100px]"

          />

          {/* <RoundScribbleSVG
            className={
              "absolute left-0 top-0 right-0 z-0 mx-auto hidden w-[400px] lg:block"
            }
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          /> */}
          <FadeY className="max-w-7xl pt-24 lg:pt-0" once={true}>
            <h1 className="px-12 pb-4 lg:text-center text-5xl font-black sm:text-9xl lg:pt-64 lg:pb-12 xl:text-[180px] leading-[1.1]">
              It&apos;s been a minute

              <span className="text-border cursor-cell transition-all duration-200">
                .
              </span>
            </h1>
            <p className="mx-auto px-12 lg:text-center font-mono leading-relaxed lg:w-4/6">
              <span className="text-black/70">
                This is a portfolio site. It might look a little messy, but
                design, development, usability testing, and iterating is often a
                little messy.{" "}
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
        <section className="relative z-10 bg-red-600 py-12 selection:bg-black/10 lg:mx-12 lg:py-32 xl:py-48">
          <RoundScribbleSVG
            className={"absolute left-8 top-8 z-0 hidden w-[400px] lg:block"}
            strokeColor={"#000"}
            strokeWidth={0.5}
          />
          <img
            className="absolute -left-2 top-0 z-0 hidden w-[200px] rotate-90 lg:block"
            src="/img/photo/mr-meeseeks.webp"
            alt="mr meeseeks"
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
            <h2 className="lg:text-center text-5xl font-black text-white drop-shadow-sm sm:text-9xl xl:text-[180px] leading-[1.1]">
              It&apos;s been a journey
              <span className="text-border cursor-cell transition-all duration-200">
                .
              </span>
            </h2>
          </FadeY>
          <div className="mt-12 h-[.5px] bg-black"></div>
          <FadeY
            className="relative mx-auto mt-16 max-w-5xl lg:mt-24"
            delay={0.2}
          >
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
                Yessir.
              </p>
              <p className="mb-8 font-mono leading-loose">
                I&apos;ve learned that successful and powerful products have
                teams behind them with absent egos and creative contributions
                coming from everyone.
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
              <p className="font-mono leading-loose">
                Kind regards,
                <br />
                <br />~ Ryan
              </p>
              <p className="hidden font-mono leading-loose lg:block">
                <br />
                P.S. Delete my photo.
              </p>
              {/* <img
                src="/img/photo/evil-rick.png"
                alt="evil rick sanchez"
                className="absolute left-0 right-0 top-32 z-0 mx-auto hidden w-96 lg:flex"
              /> */}
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
            strokeColor={"#000"}
            strokeWidth={0.5}
          />
          {/* ADD THE OPEN DISC IMG ON HOVER WITH NEW CHARACTER INSIDE MISEEKS */}
          <img
            src="/img/object/cd-ns.webp"
            alt="cd case with macromedia and pepsi logos"
            className="flex justify-center p-8 drop-shadow-2xl transition-all duration-200 hover:-bottom-48 lg:absolute lg:-right-10 lg:-bottom-32 lg:w-[500px] lg:-rotate-12 lg:p-0"
          />
          <img
            src="/img/paper/torn-bumber-bk.png"
            alt=""
            className="absolute -left-28 -bottom-8 h-52 rotate-12 lg:-bottom-48 lg:h-80"
          />
        </section>

        {/* BEEN BUSY */}
        <section className="relative py-12 lg:mx-12 lg:py-32 xl:py-48">
          {/* <img
            src="/img/paper/torn-bumber-bk.png"
            alt=""
            className="absolute -left-28 -top-48 h-52 rotate-12 lg:h-80"
          /> */}
          <FadeY
            className="mx-auto mb-16 max-w-7xl px-8 selection:bg-black/10"
            delay={0.25}
          >
            <h2 className="z-20 pb-4 lg:pb-12 lg:text-center text-5xl font-black sm:text-9xl lg:px-12 xl:text-[180px] leading-[1.1]">
              It&apos;s been busy
              <span className="text-border cursor-cell transition-all duration-200">
                .
              </span>
            </h2>
            <p className="mx-auto lg:text-center font-mono text-black/70 lg:w-2/3">
              I&apos;ve been working on a few projects and learning new things too!
            </p>
          </FadeY>
          <FadeY
            delay={0.2}
            className="relative z-10 mx-auto grid grid-cols-1 gap-6 px-8 lg:grid-cols-3 lg:px-0"
          >
            <CardIcon
              description={
                "What is good design? Maybe we can answer that question together."
              }
              title={"Design"}
              className={"lg:h-72"}
              cardUrl={""}
            >
              <IconDesignTechSVG
                className={
                  "mb-6 w-16 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                }
                strokeColor={"#dc2626"}
              />
            </CardIcon>
            {/* <CardIcon
              description={
                "Gummi bears cotton candy powder apple pie caramels cake"
              }
              title={"Code"}
              className={"lg:h-72"}
              cardUrl={""}
            >
              <IconCodeSVG
                className={
                  "mb-6 w-14 transition-all duration-300 group-hover:-rotate-6 hover:scale-125"
                }
                strokeColor={"#dc2626"}
              />
            </CardIcon> */}
            <CardIcon
              target={"_blank"}
              description={"nterested in tech & design? check out my blog."}
              title={"Blog"}
              className={"lg:h-72"}
              cardUrl={"https://medium.com/@ryanhouk"}
            >
              <IconWriteSVG
                className={
                  "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                }
                strokeColor={"#dc2626"}
              />
            </CardIcon>
            <CardIcon
              description={
                "How do we get from A to B? From what's in our head to a working product."
              }
              title={"Process"}
              className={"lg:h-72"}
              cardUrl={""}
            >
              <IconProcessSVG
                className={
                  "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                }
                strokeColor={"#dc2626"}
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
            className="absolute -left-32 hidden w-48 rotate-12 transition-all hover:rotate-0 lg:-top-16 lg:flex lg:w-96"
          />
          <FadeY
            className="mb-16 px-8 selection:bg-white/10 lg:mb-32"
            delay={0.15}
          >
            <h2 className="relative z-20 mb-8 lg:text-center text-5xl font-black text-white sm:text-9xl lg:px-12 xl:text-[180px] leading-[1.1]">
              We've got projects.
            </h2>
            <p className="mx-auto lg:text-center font-mono leading-relaxed text-white/70 lg:w-2/3">
              A deeper look into the projects and products I&apos;ve worked on.
              Coming soon.
            </p>
          </FadeY>
          <FadeY
            className="relative mx-auto mt-16 h-96 max-w-screen-xl"
            delay={0.15}
          >
            <img
              src="/img/mockup/klove/kl-web-home.webp"
              alt=""
              className="absolute w-full -rotate-12 p-8 lg:p-24"
            />
            <img
              src="/img/mockup/crc/crc-paper-01.webp"
              alt=""
              className="absolute w-full rotate-6 p-8 lg:p-24"
            />
            <img
              src="/img/mockup/klove/tvos-paper-min.webp"
              alt=""
              className="absolute w-full -rotate-6 p-8 lg:p-24"
            />
          </FadeY>
          <div className="absolute bottom-0 z-10 h-64 w-full bg-gradient-to-t from-brand-dark to-brand-dark/0"></div>
        </section>

        {/* ETHICAL */}
        <section className="relative z-10 h-full overflow-clip bg-brand-light pt-12 lg:py-32">
          <FadeY
            className="mx-auto max-w-7xl px-8 selection:bg-black/10"
            delay={0.25}
          ></FadeY>
          <div className="flex h-full flex-col md:flex-row">
            <FadeY className="flex flex-1 items-center" delay={0.25}>
              <p className="mx-auto mb-8 border-red-600 px-8 text-center font-mono leading-loose text-black md:w-4/6 md:border-l-4 md:text-left">
                Product design is for everyone. My favorite design is inclusive
                and accessible and it aligns business goals and customer goals.
              </p>
            </FadeY>
            <FadeY className="flex flex-1 justify-center md:justify-end">
              <img
                src="/img/paper/black-paper-design-sm-min.png"
                alt="design for everyone torn paper"
                className=" mr-6 w-[800px] md:-mr-8"
              />
            </FadeY>
          </div>
        </section>

        {/* BLOG */}
        <section className="relative bg-brand-dark py-12 lg:mx-12 lg:py-32 xl:py-48">
          <FadeY
            className="mb-16 px-8 selection:bg-white/10 lg:mb-32"
            delay={0.15}
          >
            <h2 className="relative z-20 mb-8 text-center text-5xl font-black text-white sm:text-9xl lg:px-12 xl:text-[180px] leading-[1.1]">
              Blog.
            </h2>
            <p className="mx-auto text-center font-mono leading-relaxed text-white/70 lg:w-2/3">
              A few highlights from the blog. You can read more
              <Link
                href="https://medium.com/@ryanhouk"
                target={"_blank"}
                className="underline"
              >
                here
              </Link>
              .
            </p>
          </FadeY>

          <FadeY
            className="relative mx-auto mt-16 h-96 max-w-screen-xl"
            delay={0.15}
          >
            ADD BLOGS
          </FadeY>
        </section>

        {/* DESIGN */}
        <section className="relative pt-12 selection:bg-black/10 lg:mx-12 lg:pt-32">
          <FadeY
            className="mb-16 px-8 selection:bg-white/10 lg:mb-32"
            delay={0.15}
          >
            <h2 className="relative z-20 mb-8 text-center text-5xl font-black text-black sm:text-9xl lg:px-12 xl:text-[180px] leading-[1.1]">
              Design.

            </h2>
            {/* <p className="mx-auto max-w-3xl text-center font-mono leading-relaxed text-black/70">
              Ah yes, the tools of the trade. 🧰
            </p> */}
          </FadeY>

          <FadeY
            className="flex h-full flex-col items-center xl:flex-row"
            delay={0.15}
          >
            <div className="flex-1">
              <p className="mx-auto mb-8 border-red-600 px-8 text-center font-mono leading-loose text-black md:w-4/6 md:border-l-4 md:text-left">
                Ah yes, the tools of the trade. Designers use all varieties of
                tools to accomplish beautiful results. There are so many amazing
                and powerful tools, none inherently right or wrong. Use the
                right tools for the right team and product needs. 🧰
              </p>
            </div>
            <div className="mt-16 flex-1 xl:mt-0">
              <img
                src="/img/object/bag-logos-half.png"
                alt="bag with logos of code and design tools spilling out"
                className="col-span-2 mx-auto"
              />
            </div>
          </FadeY>
        </section>

        {/* MY TOOLS */}
        <section className="relative bg-red-600 py-12 px-8 selection:bg-black/10 lg:mx-12 lg:py-32 xl:py-48">
          <FadeY className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
              <CardIcon
                target={"_blank"}
                description={"Tried and true IDE for the masses."}
                title={"VS Code"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"They're both great."}
                title={"Figma & Sketch"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"With a splash of Typescript."}
                title={"React & Nextjs"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"With a splash of Typescript."}
                title={"React & Nextjs"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"With a splash of Typescript."}
                title={"React & Nextjs"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"With a splash of Typescript."}
                title={"React & Nextjs"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"With a splash of Typescript."}
                title={"React & Nextjs"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
              <CardIcon
                target={"_blank"}
                description={"With a splash of Typescript."}
                title={"React & Nextjs"}
                className={"lg:h-72"}
                cardUrl={"#"}
              >
                <IconCodeSVG
                  className={
                    "mb-6 w-14 transition-all duration-300 hover:scale-125 group-hover:-rotate-6"
                  }
                  strokeColor={"#dc2626"}
                />
              </CardIcon>
            </div>
          </FadeY>
        </section>
        {/* CLOSING CONTAINER DIV */}
      </div>
    </>
  );
}
