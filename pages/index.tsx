import { FadeY } from "../components/animations";

export default function Home() {
  return (
    <>
      <div className="absolute z-10 max-w-lg rotate-90 top-80 -left-48 border-t border-black pt-4">
        <p className="font-mono text-sm">
          Please don't do vertical text. Sure it looks cool, but it's a pain in
          the butt to read and isn't very accessible.
        </p>
      </div>
      <div className="flex justify-center h-screen bg-gradient-to-b from-white to-zinc-200 relative overflow-clip">
        <img
          src="/img/pkg-ns-01.webp"
          alt=""
          className="left-0 right-0 bottom-0 -top-96 w-[1000px] absolute mx-auto drop-shadow-item hover:-top-[28rem] transition-all duration-300"
        />
        <div className="flex items-center max-w-7xl">
          <h1 className="text-5xl lg:text-[200px] font-clash font-black pl-16 p-12 text-brand-dark text-center mt-16">
            It's been a minute.
          </h1>
        </div>
      </div>
    </>
  );
}
