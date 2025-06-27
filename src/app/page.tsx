
import Hero from "./Components/Hero";
import Approch from "./Components/Approch";
import Showcase from "./Components/Showcase";
import IndustryInfo from "./Components/IndustryInfo";
import Header from "./navbar/header";
import OurServices from "./Components/OurServices";
import WhyChoose from "./Components/WhyChoose";
import Steps from "./Components/Steps";
import WorkProcess from "./Components/WorkProcess";
import ImageStacker from "./Components/ImageStacker";


export default function Home() {
  return (
 <div className="w-full">
  <Header />
            <Hero />
            <Approch />
            <OurServices/>
            <WhyChoose/>
         
            <Showcase />
            <ImageStacker/>
            {/* <WorkProcess/> */}
            <Steps/>
            <IndustryInfo />

        </div>

  
  );
}
