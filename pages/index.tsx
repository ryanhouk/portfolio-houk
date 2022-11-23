import { FadeY } from "../components/animations";
import { LineVerticalSVG } from "../components/svg";

export default function Home() {
  return (
    <>
      <div className="absolute z-10 w-[28.5rem] rotate-90 top-[28rem] -left-32 hidden p-4 xl:flex">
        <p className="font-mono text-[.75rem] text-justify leading-relaxed">
          Please don't do vertical text. Sure it looks cool, but it's a pain in
          the butt to read and isn't very accessible.
        </p>
      </div>

      <LineVerticalSVG
        className={
          "h-full absolute left-36 top-0 z-10 hidden xl:flex opacity-25"
        }
        strokeColor={"#000"}
        strokeWidth={0.1}
      />

      {/* INTRO */}
      <section className="relative overflow-clip h-[90vh] bg-brand-light flex justify-center items-center">
        <img
          className="w-64 -rotate-12 absolute -left-12 drop-shadow-sm -top-12 z-20"
          src="/img/sticker/sticker-gray-round.png"
          alt="yellow erroded sticker with crying emoji bec i don't have a logo"
        />

        {/* <img
          src="/img/object/plastic-overlay-01.webp"
          alt=""
          className="h-full w-full absolute left-0 top-0"
        /> */}

        <img
          src="/img/object/pkg-ns-01.webp"
          alt="brown paper package"
          className="left-0 right-0 bottom-0 z-30 -top-[26rem] w-[1000px] hover:-top-[28rem] hover:opacity-0 absolute mx-auto drop-shadow-item transition-all duration-300"
        />
        <div className="max-w-7xl">
          <p className="text-center font-mono text-sm text-white bg-red-600 mx-auto py-2 px-1 w-80 rounded-sm">
            Uh oh, did someone obscure text. Designers should know better.
          </p>
          <h1 className="text-5xl md:text-9xl lg:text-[200px] font-black p-12 text-brand-dark text-center mt-16">
            It's been a minute.
          </h1>
          <p className="text-black/70 text-center font-mono mx-auto w-2/3">
            😊 Yes, this is yet another portfolio site.
          </p>
        </div>
      </section>

      {/* SECTION TWO */}
      <section className="relative py-12 lg:py-32 bg-red-600">
        <FadeY className="pl-16 max-w-2xl" delay={0.15}>
          <p>Add some kind of black shape or texture behind this text</p>
          <h2 className="text-3xl lg:text-9xl z-0 font-black text-white drop-shadow-sm">
            It's been a journey
          </h2>
          <p className="font-mono text-sm text-white/70 w-2/3 mt-12 leading-loose">
            A little bit about me, myself and I. Also that red and white, oof.
            Retina burn much?
          </p>
        </FadeY>
        {/* <FadeY className={""} delay={0.15}>
          <img
            src="/img/mockup/crc-paper-01.webp"
            alt=""
            className="mx-auto max-w-7xl w-full"
          />
        </FadeY> */}
      </section>
    </>
  );
}
