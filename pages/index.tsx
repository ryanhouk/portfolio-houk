
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
      <div className="bg-brand-primary h-1 -z-10"></div>

      <section className="relative overflow-clip h-[90vh] bg-brand-light flex justify-center items-center">
        <img
          src="/img/pkg-ns-01.webp"
          alt="brown paper package"
          className="left-0 right-0 bottom-0 -top-96 w-[1000px] absolute mx-auto drop-shadow-item hover:-top-[28rem] hover:opacity-0 transition-all duration-300"
        />
        <div className="max-w-7xl transition-all">
          <p className="text-center font-mono text-black/50">Easter Egg</p>
          <h1 className="text-5xl lg:text-[200px] font-clash font-black pl-16 p-12 text-brand-dark text-center mt-16">
            It's been a minute.
          </h1>
        </div>
      </section>

      {/* SECTION TWO */}
      <section className="bg-brand-light">
        <div className="flex justify-center">
          <div className="w-[2px] h-64 bg-black">
          </div>
        </div>
      </section>
    </>
  );
}
