import { FadeY } from "../components/animations";

export default function Home() {
  return (
    <>
      {/* <div className="absolute z-10 max-w-xl rotate-90 top-80 -left-48 border-[.5px] border-black p-4">
        <p className="font-mono text-sm text-justify leading-relaxed">
          Please don't do vertical text. Sure it looks cool, but it's a pain in
          the butt to read and isn't very accessible.
        </p>
      </div> */}
      {/* INTRO */}
      {/* <div className="bg-red-600 h-1 -z-10"></div> */}

      <section className="relative overflow-clip h-[90vh] bg-brand-light flex justify-center items-center">
        <img src="/img/plastic-overlay-01.webp" alt="" className="h-full w-full absolute left-0 top-0" />

        <img
          src="/img/pkg-ns-01.webp"
          alt="brown paper package"
          className="left-0 right-0 bottom-0 -top-[26rem] w-[1000px] hover:-top-[28rem] hover:opacity-0 absolute mx-auto drop-shadow-item transition-all duration-300"
        />
        <div className="max-w-7xl">
          <p className="text-center">Easter egg</p>
          <h1 className="text-5xl lg:text-[200px] font-black p-12 text-brand-dark text-center mt-16">
            It's been a minute.
          </h1>
        </div>
      </section>

      {/* SECTION TWO */}
      <section className="bg-brand-light relative py-12 lg:py-32">
        <FadeY className="-mb-8 pl-16" delay={.15}>
          <p className="font-mono text-sm text-red-600">Design / Information Architecture / Development</p>
          <h2 className="text-3xl lg:text-9xl z-0 font-black">Website</h2>
        </FadeY>
        <FadeY className={""} delay={.15}>
          <img src="/img/crc-paper-01.webp" alt="" className="mx-auto max-w-7xl w-full" />
        </FadeY>
      </section>
    </>
  );
}
