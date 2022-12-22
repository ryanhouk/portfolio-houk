import { FadeY } from "../components/animations";


export default function Home() {
    return (
        <>
            {/* CONTAINER DIV */}
            <div className="overflow-clip bg-brand-dark h-screen">

                {/* HERO START */}
                <section className="py-12 lg:py-32 xl:py-48 flex items-center">
                    <FadeY className="px-8">
                        <h1 className="text-5xl sm:text-9xl xl:text-[100px] text-white mb-12 text-center font-clash">
                            Is this font Display Clash yet?
                        </h1>
                    </FadeY>
                </section>
                {/* HERO END */}

                {/* CLOSING CONTAINER DIV */}
            </div>
        </>
    );
}
