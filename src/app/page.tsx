
import Hero from "./Components/Hero";
import Approch from "./Components/Approch";
import Showcase from "./Components/Showcase";
import IndustryInfo from "./Components/IndustryInfo";
import Header from "./navbar/header";


export default function Home() {
  return (
 <div className="w-full">
  <Header />
            <Hero />
            <Approch />
            <Showcase />
            <IndustryInfo />

        </div>

  
  );
}
