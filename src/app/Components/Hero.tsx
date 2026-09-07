import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url(/Background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute -left-16 top-8 h-56 w-56 rounded-full bg-[#7BB668]/20 blur-3xl" />
        <div className="hero-orb-slow absolute -right-10 top-24 h-72 w-72 rounded-full bg-[#7BB668]/12 blur-3xl" />
      </div>

      <div className="relative z-10 m-auto w-full max-w-screen-xl px-4 pb-12 pt-4 md:mt-8 md:flex md:flex-wrap md:justify-between md:pb-24">
        <div className="mt-4 flex w-full items-center justify-between md:mt-8 md:pt-2">
          <div className="ml-0 flex flex-col md:ml-6 md:max-w-2xl">
            <h1 className="text-start text-[2rem] font-medium uppercase leading-[1.12] text-gray-900 sm:text-5xl md:text-6xl">
              Branding <br /> Web & <br /> mobile{" "}
            </h1>
            <span className="font-instrument text-[2rem] font-extralight italic leading-[1.12] text-[#7BB668] sm:text-5xl md:text-6xl">
              all in one Circle
            </span>
          </div>

          <div className="hidden md:block">
            <Image
              src="/struct.png"
              width={300}
              height={300}
              alt=""
              className="mr-24"
              priority
            />
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-12 flex w-fit items-center justify-center gap-1 rounded-full border border-gray-400 px-4 py-3 text-xs text-black md:hidden"
        >
          GET STARTED
          <MdOutlineKeyboardArrowRight className="text-lg" />
        </Link>
      </div>
    </section>
  );
}
