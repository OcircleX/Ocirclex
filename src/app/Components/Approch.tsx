import Image from "next/image";
import Link from "next/link";

const logos = [
  "/01.svg",
  "/02.svg",
  "/03.svg",
  "/04.svg",
  "/05.svg",
  "/06.svg",
  "/07.svg",
  "/08.svg",
];

export default function Approch() {
  return (
    <section
      className="m-auto flex w-full flex-col items-center justify-between bg-[#04081C] pb-[2rem]"
      id="approache"
    >
      <div>
        <h1 className="w-full py-10 text-center text-xl leading-tight text-white">
          Partnered with <br className="md:hidden" /> Innovators Around the{" "}
          <br className="md:hidden" /> Globe <br className="md:hidden" />
        </h1>

        <div
          className="flex w-[30%] max-w-screen-xl overflow-hidden pb-8"
          id="infinity"
        >
          <div className="logo-marquee flex w-max shrink-0">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-x-6 px-6"
              >
                {logos.map((src) => (
                  <Image
                    key={`${copy}-${src}`}
                    unoptimized
                    src={src}
                    alt=""
                    width={75}
                    height={75}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl justify-between gap-8 bg-[#04081C] px-3 py-[4rem] md:flex">
        <div className="w-full md:w-1/2">
          <p className="mt-8 w-fit rounded-full border bg-[#04081C] px-4 py-2 text-sm font-medium text-white">
            CREATIVE STUDIO
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p
            className="w-full py-8 text-xl font-light leading-8 text-white md:text-2xl md:leading-tight"
          >
            At CircleX, we craft tailored digital solutions that drive business
            growth through exceptional user experience and seamless
            functionality. Backed by a team of 7 seasoned professionals, we
            leverage cutting-edge technologies to deliver scalable,
            high-performance applications designed around your unique goals.
          </p>
          <Link
            href="/about"
            className="mt-2 inline-block w-fit rounded-full bg-white px-4 py-2 text-left text-sm text-[#04081C] shadow-md transition hover:bg-gray-200"
          >
            MEET THE TEAM ›
          </Link>
        </div>
      </div>
    </section>
  );
}
