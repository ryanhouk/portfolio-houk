import Link from "next/link";
import { FadeY } from "../components/animations";
import { CardIcon } from "../components/cards";
import {
  ArrowDownSVG,
  DribbbleSVG,
  IconCodeSVG,
  IconDesignTechSVG,
  IconWriteSVG,
  LineVerticalSVG,
  LinkedInSVG,
  MediumSVG,
  RectangeDotsSVG,
  RoundScribbleSVG,
  TwitterSVG,
} from "../components/svg";

export default function Home() {
  return (
    <>
      <div className="overflow-clip">
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
          <Link className="group" target={'_blank'} href={"https://dribbble.com/ryanhouk"}>
            <DribbbleSVG className={"w-[24px] mx-auto group-hover:-translate-y-1 transition-all group-hover:text-red-600 duration-200"} fillColor={"#000"} />
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
        <div className="bg-red-600 h-[5px] w-full"></div>

        {/* INTRO */}
        <section className="relative pb-16 lg:pt-24 lg:pb-48 bg-brand-light flex justify-center items-center selection:bg-black/10">
          <img
            src="/img/object/box-logos.webp"
            alt="box with software logos all over it"
            className="z-30 -top-52 md:-top-[40rem] sm:-top-[26rem] w-[900px] lg:w-[1000px] absolute mx-auto drop-shadow-item transition-all duration-300 px-8"
          />
          <FadeY className="max-w-7xl lg:pt-0 pt-24" once={true}>
            <p className="text-center font-mono text-sm text-white bg-red-600 mx-auto py-2 px-3 w-80 hidden lg:block rounded-sm">
              Uh oh, we've got some obscured text. Designers should know better.
            </p>
            <h1 className="text-5xl sm:text-9xl xl:text-[200px] font-black px-12 pt-16 lg:pt-44 pb-4 lg:pb-12 text-brand-dark text-center">
              It's been a minute.
            </h1>
            <p className="text-center font-mono mx-auto w-2/3">
              😊 <span className="text-black/70">Yes, this is yet another portfolio site.</span>
            </p>
            <div className="flex justify-center">
              <ArrowDownSVG className={"w-8 mt-16 animate-bounce"} strokeColor={"#000"} />
            </div>
          </FadeY>
          <img src="/img/sticker/sticker-gray-round-thumb.png" alt="design without ego sticker" className="absolute hover:rotate-0 duration-200 transition-all -right-20 -bottom-16 lg:-right-24 lg:-bottom-24 -rotate-12 w-48 lg:w-[26rem] z-20 drop-shadow-md" />
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
          <FadeY className="z-10 text-center mx-auto px-8 lg:px-0 relative" delay={0.2}>
            <h2 className="text-5xl sm:text-9xl xl:text-[200px] font-black text-white drop-shadow-sm">
              It's been a journey.
            </h2>
            <p className="font-mono text-sm text-white/70 mt-8 leading-loose">
              A little bit about me. Also that red and white, oof.
              Retina burn much?
            </p>
          </FadeY>
          <div className="h-[.5px] bg-black mt-12"></div>
          <FadeY className="max-w-5xl mx-auto mt-16 lg:mt-24" delay={0.2}>
            <img
              className="lg:w-72 w-48 mx-auto -mb-16 transition-all duration-200"
              src="/img/sticker/tape-gray.png"
              alt="piece of duct tape stuck to a letter"
            />
            <div className="p-4 lg:py-16 py-12 lg:p-16 bg-white shadow-md rounded-sm m-4">
              <h2 className="font-mono text-2xl lg:text-3xl mb-8">a brief history</h2>
              <p className="font-mono leading-loose mb-8">
                Powder lollipop gummi bears lollipop apple pie. Dragée biscuit
                halvah carrot cake croissant sweet. Chocolate cake croissant
                pudding donut brownie sesame snaps bear claw. Pie sweet roll
                gummies soufflé croissant. Dragée dessert pie tootsie roll apple
                pie donut jelly beans chupa chups. Bear claw caramels marzipan
                carrot cake chocolate cake gummi bears lollipop powder. Toffee
                jelly-o toffee halvah tiramisu danish halvah jujubes bear claw.
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
            <RectangeDotsSVG className={"w-72 mx-auto -mt-10"} />
          </FadeY>
          <RoundScribbleSVG
            className={"w-[500px] absolute -right-24 -bottom-32 hidden lg:block"}
            strokeColor={"#dc2626"}
            strokeWidth={0.5}
          />
          <img src="/img/object/cd-ns.webp" alt="cd case with macromedia and pepsi logos" className="lg:w-[500px] p-8 lg:p-0 lg:-rotate-12 lg:-right-10 lg:-bottom-16 lg:absolute flex justify-center drop-shadow-2xl" />
        </section>

        {/* SECTION */}
        {/* <section className="relative py-12 lg:py-32 xl:py-48 bg-brand-dark selection:bg-white/10">
          <FadeY className="max-w-7xl mx-auto relative" delay={.25}>
            <h1 className="text-5xl relative sm:text-9xl xl:text-[200px] z-20 font-black p-12 text-white text-center">
              It's been busy.
            </h1>
            <CrossSVG className={"w-64 md:w-96 xl:w-[600px] absolute inset-0 m-auto z-10 p-8"} strokeColor={"#dc2626"} strokeWidth={2} />
          </FadeY>
        </section> */}

        {/* SECTION */}
        <section className="py-12 lg:py-32 xl:py-48 relative">
          <FadeY className="mb-16 px-8 selection:bg-black/10 relative" delay={.25}>
            <h1 className="text-5xl relative sm:text-9xl xl:text-[200px] z-20 font-black lg:px-12 text-center mb-8">
              It's been busy.
            </h1>
            <p className="text-center font-mono mx-auto text-black/70 lg:w-2/3">
              Halvah marzipan marshmallow apple pie shortbread croissant apple pie macaroon.
            </p>
          </FadeY>
          <div className="max-w-screen-2xl grid grid-cols-1 gap-5 lg:grid-cols-3 mx-auto z-10 relative px-8">
            <CardIcon delay={.1} description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Design"} className={"h-64"}>
              <IconDesignTechSVG className={"w-16 group-hover:-rotate-6 transition-all duration-300"} strokeColor={"#000"} />
            </CardIcon>
            <CardIcon delay={.15} description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Code"} className={"h-64"}>
              <IconCodeSVG className={"w-14 group-hover:-rotate-6 transition-all duration-300"} strokeColor={"#000"} />
            </CardIcon>
            <CardIcon delay={.2} description={"Gummi bears cotton candy powder apple pie caramels cake"} title={"Blog"} className={"h-64"}>
              <IconWriteSVG className={"w-14 group-hover:-rotate-6 transition-all duration-300"} strokeColor={"#000"} />
            </CardIcon>
          </div>
          <img src="/img/sticker/sticker-gray-round.webp" alt="" className="absolute w-[330px] drop-shadow-md -left-12 -top-16 z-0 rotate-12" />
        </section>
        {/* CLOSING CONTAINER DIV */}
      </div>
    </>
  );
}
