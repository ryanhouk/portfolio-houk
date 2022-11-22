export default function Home() {
  return (
    <>
      <div className="flex justify-center h-screen bg-brand-light relative overflow-clip">
        <img
          src="/img/pkg-01.webp"
          alt=""
          className="left-0 right-0 bottom-0 -top-56 w-[1300px] absolute "
        />
        <h1 className="text-2xl lg:text-9xl font-clash font-black pl-16 p-12 text-brand-dark">
          It's been a minute.
        </h1>
      </div>
    </>
  );
}
