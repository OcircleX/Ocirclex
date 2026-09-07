import dynamic from "next/dynamic";
import Hero from "./Components/Hero";
import Approch from "./Components/Approch";
import Header from "./navbar/header";
import OurServices from "./Components/OurServices";
import WhyChoose from "./Components/WhyChoose";

const Showcase = dynamic(() => import("./Components/Showcase"));
const WorkProcess = dynamic(() => import("./Components/WorkProcess"));
const Steps = dynamic(() => import("./Components/Steps"));
const IndustryInfo = dynamic(() => import("./Components/IndustryInfo"));

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Approch />
      <OurServices />
      <WhyChoose />
      <Showcase />
      <WorkProcess />
      <Steps />
      <IndustryInfo />
    </div>
  );
}
