import { FadeY } from "../components/animations";
import {
  LineVerticalSVG,
  RectangeDotsSVG,
  RoundScribbleSVG,
} from "../components/svg";

export default function Home() {
  return (
    <>
      <div className="absolute z-10 w-[28.5rem] rotate-90 top-[28rem] -left-32 hidden p-4 xl:flex selection:bg-black/10">
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

      <LineVerticalSVG
        className={
          "h-full absolute right-36 top-0 z-10 hidden xl:flex opacity-25"
        }
        strokeColor={"#000"}
        strokeWidth={0.1}
      />

      {/* INTRO */}
      <section className="relative overflow-clip h-[60vh] xl:h-[90vh] bg-brand-light flex justify-center items-center selection:bg-black/10">
        <img
          className="w-64 -rotate-12 absolute -left-12 drop-shadow-sm -top-12 z-20 hidden lg:block"
          src="/img/sticker/sticker-gray-round.png"
          alt="gray erroded sticker with website layout icon"
        />

        {/* <img
          src="/img/object/plastic-overlay-01.webp"
          alt=""
          className="h-full w-full absolute left-0 top-0"
        /> */}

        <img
          src="/img/object/pkg-ns-01.webp"
          alt="brown paper package"
          className="left-0 right-0 bottom-0 z-30 -top-40 md:-top-[26rem] w-[900px] lg:w-[1000px] lg:hover:-top-[28rem] hover:opacity-0 absolute mx-auto drop-shadow-item transition-all duration-300"
        />
        <FadeY className="max-w-7xl" once={true}>
          <p className="text-center font-mono text-sm text-white bg-red-600 mx-auto py-2 px-1 w-80 rounded-sm">
            Uh oh, did someone obscure text? Designers should know better.
          </p>
          <h1 className="text-5xl sm:text-9xl xl:text-[200px] font-black p-12 text-brand-dark text-center mt-16">
            It's been a minute.
          </h1>
          <p className="text-black/70 text-center font-mono mx-auto w-2/3">
            😊 Yes, this is yet another portfolio site.
          </p>
        </FadeY>
      </section>

      {/* SKILLS */}
      <section></section>

      {/* SECTION TWO */}
      <section className="relative py-12 lg:py-32 xl:py-48 bg-red-600 selection:bg-black/10">
        <RoundScribbleSVG
          className={"w-[400px] absolute left-8 top-8 hidden lg:block"}
          strokeColor={"#000"}
          strokeWidth={0.5}
        />
        <img
          className="absolute -left-24 top-0 z-0 w-[400px] rotate-12 hidden lg:block drop-shadow-lg"
          src="/img/photo/self-bw-car.png"
          alt="photo of ryan with beard and beanie"
        />
        <FadeY className="lg:ml-96 z-10 max-w-xl" delay={0.15}>
          <h2 className="text-3xl lg:text-9xl font-black text-white drop-shadow-sm">
            It's been a journey
          </h2>
          <p className="font-mono text-sm text-white/70 mt-8 leading-loose">
            A little bit about me, myself and I. Also that red and white, oof.
            Retina burn much?
          </p>
        </FadeY>
        <div className="h-[1px] bg-black mt-12"></div>
        <FadeY className="max-w-5xl mx-auto mt-16 lg:mt-24" delay={0.15}>
          <img
            className="lg:w-72 w-48 mx-auto -mb-16"
            src="/img/sticker/tape-gray.png"
            alt="piece of duct tape stuck to a letter"
          />
          <div className="p-4 lg:py-16 py-12 lg:p-16 bg-white shadow-md m-4">
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
