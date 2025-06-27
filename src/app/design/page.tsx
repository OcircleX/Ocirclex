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
    title: "BRANDING",
    titlegreen: "& design",
    desc: `We help you define a strong visual identity that resonates with your audience. From logos to UI/UX, every design element is purposeful and brand-aligned. The result: a consistent, memorable presence across all digital touchpoints.`,

  }
]



const ourTechs = [
  {
    title: "Figma",
    imgSrc: "/figma.png",
    descr:"Figma is a collaborative interface design tool that streamlines UI/UX workflows. It allows real-time design sharing, feedback, and version control. Perfect for designing modern, responsive, and user-focused interfaces.",
  },
  {
    title: "Micro",
    imgSrc: "/micro.png",
    descr: "Miro is an online whiteboard platform for brainstorming, mapping, and team collaboration. It helps structure ideas visually and align teams early in the process. Ideal for workshops, user flows, and design thinking sessions.",
  },
  {
    title: "Protopie",
    imgSrc: "/protopye.png",
    descr: "We use React for most front-end development due to its scalability, flexibility, and efficiency. Its component-based structure enables reusable code, faster development, and lower costs, while the virtual DOM ensures a smooth, responsive user experience.",
  },
  {
      title: "Adobe Photoshop",
      imgSrc: "/photoshop.png",
      descr: "Adobe Photoshop is our go-to tool for detailed image editing and high-impact visuals. It enhances product mock-ups, marketing assets, and brand imagery. Great for pixel-perfect creative work and visual storytelling.",
    },
    {
      title: "Adobe Illustrator",
      imgSrc: "/illustrator.png",
      descr: "Illustrator is our primary tool for creating clean, scalable vector graphics and custom illustrations.  It’s perfect for designing logos, icons, and brand elements with pixel-perfect precision.  We use it to ensure visual consistency across all your digital and print assets.",
    },
    {
      title: "Adobe After Effects",
      imgSrc: "/aftereffects.svg",
      descr: "After thorough testing across all devices and scenarios, we prepare your app for launch. Whether it's App Store, Play Store, or web deployment, we ensure a smooth handover with complete documentation and support. Deliverables: Deployed application, QA report, documentation",
    },
];


const DevelopmentEssentials = [ 
  {
    title: "Branding Identity",
    src: "/brandingindentity.png",
    desc: "We develop cohesive brand identities that communicate your values and leave a lasting impression.",
  },

  {
    title: "Social media marketing",
    src: "/mediamarketing.png",
    desc: "We create targeted social media strategies that boost engagement, grow your audience, and drive real results.",
  },

  {
    title: "Graphic design",
    src: "/graphicsdesign.png",
    desc: "We design eye-catching visuals that capture attention and communicate your message with clarity and impact.",
  },
]


const OurApproach = [
  {
    title: "Research & Discovery",
    imgSrc: "/01.png",
    descr:`We start with a deep-dive session to understand your goals, business model, and product vision. Whether you’re launching an MVP or scaling an existing app, we gather every technical and functional requirement to craft a solution that fits.
Deliverables: Requirement specs, use cases, feature list`,
  },
  {
    title: "Problem Framing",
    imgSrc: "/02.png",
    descr:`Our design experts bring your idea to life using Figma—with low-fidelity wireframes, high-fidelity mockups, and interactive prototypes. You’ll review every screen, give feedback, and sign off on the final visuals before development begins.
Deliverables: Wireframes, mockups, interactive prototypes`,
  },
  {
    title: "Brainstorm & Concept",
    imgSrc: "/03.png",
    descr:`We translate approved designs into robust code using modern tech stacks. Whether it's a mobile app or web platform, our dev team builds with performance, security, and scalability in mind. We match exactly what’s agreed in the design phase—no surprises.
Tech Stack: React, Node.js, Flutter, Firebase, MongoDB (customizable)
 Deliverables: Fully functional, tested application`,
  },
  {
      title: "Visual & Interaction Design",
      imgSrc: "/04.png",
      descr:`After thorough testing across all devices and scenarios, we prepare your app for launch. Whether it's App Store, Play Store, or web deployment, we ensure a smooth handover with complete documentation and support.
Deliverables: Deployed application, QA report, documentation`,
    },
    {
      title: "Validation",
      imgSrc: "/05.png",
      descr:`We don’t disappear after delivery. Ocirclex offers ongoing maintenance and updates to keep your product running smoothly. Need to add features or fix an issue later? We’ve got your back.
Support: Bug fixes, feature enhancements, scalability consulting`,
    }
];



const Projects = [ 
  {
    src: "/designa.png",
    title: "SHAvTAR: (Brand Identity) "
   
  },
  {
    
    src: "/designb.png",
    title: "InShape: A Mobile Fitness App "
    
  },
  {
   
    src: "/designc.png",
    title: "ConTop: Transport Agency Website "
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


