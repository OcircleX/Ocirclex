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
    title: "Web app",
    titlegreen: "development",
    desc: "Using top-notch technologies, we digitally transform your business by crafting tailored web solutions that are secure, scalable, and performance-driven. From concept to deployment, we focus on delivering seamless user experiences and long-term value.",

  }
]



const ourTechs = [
  {
    title: "React",
    imgSrc: "/react.png",
    descr:"React is a flexible JavaScript library used to build dynamic and responsive user interfaces. Its component-based architecture allows for fast development and seamless user experiences across devices.",
  },
  {
    title: "Next.js",
    imgSrc: "/nextjs.png",
    descr: "Next.js is a powerful React framework that enables server-side rendering and static site generation. It’s ideal for creating high-performance, SEO-optimized web applications with exceptional speed and scalability.",
  },
  {
    title: "Node Js",
    imgSrc: "/nodejjs.png",
    descr: "Node.js is a high-performance runtime environment that allows JavaScript to run on the server side. It's perfect for building fast, scalable, and real-time web applications using a single language across the stack.",
  },
  {
      title: "Angular",
      imgSrc: "/angular.png",
      descr: "Angular is a robust front-end framework developed by Google for building large-scale, single-page applications. It offers powerful tools, strong structure, and seamless integration for enterprise-grade solutions.",
    },
    {
      title: "Express Js",
      imgSrc: "/express.png",
      descr: "Express.js is a lightweight backend framework for Node.js, perfect for creating secure, scalable APIs and web servers. Its simplicity and flexibility make it ideal for fast and efficient development.",
    },
    {
      title: "Vue Js",
      imgSrc: "/vuejs.png",
      descr: "Vue.js is a progressive JavaScript framework known for its simplicity and flexibility in building interactive user interfaces. It’s lightweight, easy to integrate, and ideal for both small projects and complex applications.",
    },
];


const DevelopmentEssentials = [ 
  {
    title: "Web app",
    src: "/icon1.png",
    desc: "We build and integrate powerful APIs that enable seamless communication between your ap.....",
  },

  {
    title: "Database Design & Management",
    src: "/icon2.png",
    desc: "We use React for most front-end development due to its scalability, flexibility, and efficiency.....",
  },

  {
    title: "E-commerce Solutions",
    src: "/icon3.png",
    desc: "We use React for most front-end development due to its scalability, flexibility, and efficiency.....",
  },
]


const OurApproach = [
  {
    title: "Discovery & Requirements",
    imgSrc: "/01.png",
    descr:"We start with a deep-dive session to understand your goals, business model, and product vision. Whether you’re launching an MVP or scaling an existing app, we gather every technical and functional requirement to craft a solution that fits. Deliverables: Requirement specs, use cases, feature list",
  },
  {
    title: "UI/UX Design & Prototyping",
    imgSrc: "/02.png",
    descr:`Our design experts bring your idea to life using Figma—with low-fidelity wireframes, high-fidelity mockups, and interactive prototypes. You’ll review every screen, give feedback, and sign off on the final visuals before development begins.
Deliverables: Wireframes, mockups, interactive prototypes`,
  },
  {
    title: "Development & Integration",
    imgSrc: "/03.png",
    descr:`We translate approved designs into robust code using modern tech stacks. Whether it's a mobile app or web platform, our dev team builds with performance, security, and scalability in mind. We match exactly what’s agreed in the design phase—no surprises.
Tech Stack: React, Node.js, Flutter, Firebase, MongoDB (customizable)  Deliverables: Fully functional, tested application`,
  },
  {
      title: "Testing, Delivery & Launch",
      imgSrc: "/04.png",
      descr:`After thorough testing across all devices and scenarios, we prepare your app for launch. Whether it's App Store, Play Store, or web deployment, we ensure a smooth handover with complete documentation and support.
Deliverables: Deployed application, QA report, documentation`,
    },
    {
      title: "Post-Launch Support & Maintenance",
      imgSrc: "/05.png",
      descr:`We don’t disappear after delivery. Ocirclex offers ongoing maintenance and updates to keep your product running smoothly. Need to add features or fix an issue later? We’ve got your back.
Support: Bug fixes, feature enhancements, scalability consulting`,
    }
];



const Projects = [ 
  {
    src: "/HospitalWebsite.png",
    title: "Innovation Clinic: A Healthcare Portal "
   
  },
  {
    
    src: "/EmailWebsite.png",
    title: "Eclean: An Email Sorting App "
    
  },
  {
   
    src: "/BrandWebsite.png",
    title: "Shopclues: An E-Commerce Web App "
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


