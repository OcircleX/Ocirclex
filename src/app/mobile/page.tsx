import React from 'react'
import DarkNav from '../navbar/DarkNav'
import HeroRoute from '../Components/HeroRoute'
import ServiceRoute from '../Components/ServiceRoute'
import EssentialRoutes from '../Components/EssentialRoutes'
import ApproachRoute from '../Components/ApproachRoute'
import EmailFooter from '../Components/EmailFooter'

const Page = () => {

const PageIntro = [ 
  {
    title: "Mobile App",
    titlegreen: "development",
    desc: "We craft mobile applications that are purpose-built for your audience—designed to feel natural, function reliably, and align with your business objectives. From first tap to long-term growth, we focus on creating apps that people love to use and businesses love to grow with.",

  }
]



const ourTechs = [
  {
    title: "React Native",
    imgSrc: "/react.png",
    descr:"React Native allows us to build cross-platform mobile apps using a single codebase. It delivers native-like performance while accelerating development and reducing costs.",
  },
  {
    title: "Flutter",
    imgSrc: "/flutter.png",
    descr: "Its rich UI toolkit and fast performance make it ideal for building visually engaging, consistent user experiences across different platforms.",
  },
  {
    title: "Swift",
    imgSrc: "/swift.png",
    descr: "We use React for most front-end development due to its scalability, flexibility, and efficiency. Its component-based structure enables reusable code, faster development, and lower costs, while the virtual DOM ensures a smooth, responsive user experience.",
  },
  {
      title: "Kotlin",
      imgSrc: "/kotlin.png",
      descr: "We use React for most front-end development due to its scalability, flexibility, and efficiency. Its component-based structure enables reusable code, faster development, and lower costs, while the virtual DOM ensures a smooth, responsive user experience.",
    },
    {
      title: "Java Spring Boot",
      imgSrc: "/java.png",
      descr: "Spring Boot simplifies back-end development by offering a robust, production-ready framework out of the box. It’s ideal for building reliable, modular, and enterprise-grade applications with minimal setup.",
    },
    {
      title: ".Net",
      imgSrc: "/dotnet.png",
      descr: ".NET empowers mobile app development through a unified framework that supports native experiences across platforms. It enables efficient code sharing, strong performance, and deep integration with Microsoft’s ecosystem.",
    },
];


const DevelopmentEssentials = [ 
  {
    title: "API Development & Integration",
    src: "/icon1.png",
    desc: "We build secure, scalable APIs and seamlessly integrate third-party services to ensure smooth, connected, and efficient digital experiences.",
  },

  {
    title: "Database Design & Management",
    src: "/icon2.png",
    desc: "We design structured, scalable databases and ensure efficient data management across your applications.",
  },

  {
    title: "E-commerce Solutions",
    src: "/icon3.png",
    desc: "We create user-friendly, conversion-focused e-commerce solutions designed to streamline shopping experiences and grow your online business.",
  },
]


const OurApproach = [
  {
    title: "Discovery & Requirements",
    imgSrc: "/01.png",
    descr:`We start with an in-depth discovery session to understand your goals, business model, and product vision. Whether you're building an MVP or scaling an existing platform, we gather all technical and functional requirements to shape a solution that aligns perfectly with your needs.
    Deliverables: Requirement specifications, use cases, prioritized feature list`,
  },
  {
    title: "UI/UX Design & Prototyping",
    imgSrc: "/02.png",
    descr: `Our design experts bring your idea to life using Figma—with low-fidelity wireframes, high-fidelity mockups, and interactive prototypes. You’ll review every screen, give feedback, and sign off on the final visuals before development begins.
Deliverables: Wireframes, mockups, interactive prototypes`,
  },
  {
    title: "Development & Integration",
    imgSrc: "/03.png",
    descr: `We translate approved designs into robust code using modern tech stacks. Whether it's a mobile app or web platform, our dev team builds with performance, security, and scalability in mind. We match exactly what’s agreed in the design phase—no surprises.
Tech Stack: React, Node.js, Flutter, Firebase, MongoDB (customizable)
Deliverables: Fully functional, tested application`,
  },
  {
      title: "Testing, Delivery & Launch",
      imgSrc: "/04.png",
      descr: `After thorough testing across all devices and scenarios, we prepare your app for launch. Whether it's App Store, Play Store, or web deployment, we ensure a smooth handover with complete documentation and support.
Deliverables: Deployed application, QA report, documentation`,
    },
    {
      title: "Post-Launch Support & Maintenance",
      imgSrc: "/05.png",
      descr: `We don’t disappear after delivery. Ocirclex offers ongoing maintenance and updates to keep your product running smoothly. Need to add features or fix an issue later? We’ve got your back.
Support: Bug fixes, feature enhancements, scalability consulting`,
    }
];



const Projects = [ 
  {
    src: "/inshape.png",
    title: "InShape: A Mobile Fitness App "
   
  },
  {
    
    src: "/datingapp.png",
    title: "Muslim Dating: A Dating App "
    
  },
  {
   
    src: "/vpn.png",
    title: "Quick Defance: A VPN For Mobile "
  }
];

  return (
    <div className='w-full ' >
        <DarkNav/>

  

  <HeroRoute pageIntro = {PageIntro}/>
            <ServiceRoute ourTechs={ourTechs}/>

<EssentialRoutes developmentEssentials={DevelopmentEssentials}/>

      <ApproachRoute ourApproach={OurApproach} Projects={Projects}/>
      <EmailFooter/>
    </div>
  )
}

export default Page


