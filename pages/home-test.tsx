import { FadeY } from "../components/animations";


export default function Home() {
    return (
        <>
            <div className="overflow-clip w-screen">
                {/* INTRO */}
                <section className="py-12 relative">
                    <div className="max-w-screen-2xl py-12 lg:py-32">
                        <FadeY className="px-8 lg:pl-24 lg:pr-[500px]">
                            <h1 className="text-5xl sm:text-9xl xl:text-[200px] font-black text-brand-dark mb-12">
                                It's been a journey.
                            </h1>
                            <p className="font-mono">
                                <span className="text-black/70">This is another portfolio site. It might look a little messy. Design and development is often a little messy. </span>😊
                            </p>
                        </FadeY>
                        <img
                            src="/img/object/box-logos-rick.webp"
                            alt="old box with software logos all over it"
                            className="z-20 rotate-45 mx-auto w-[1000px] hover:-rotate-[180] -right-[28rem] -top-96 absolute drop-shadow-4xl transition-all duration-300"
                        />
                    </div>
                </section>
                {/* CLOSING CONTAINER DIV */}
            </div>
        </>
    );
}
