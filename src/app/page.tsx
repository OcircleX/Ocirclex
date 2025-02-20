import Image from "next/image";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="grid ">
      <main className="flex flex-col">
        <Hero/>
      </main>
    </div>
  );
}
