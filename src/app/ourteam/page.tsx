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
    title: "Meet ",
    titlegreen: "Our Team",
    desc: "From strategy to design and development, our multidisciplinary team delivers powerful solutions that help startups, SMEs, and enterprises thrive. We offer end-to-end support tailored to your unique digital goals.",

  }
]



const ourTechs = [
  {
    title: "Figma",
    imgSrc: "/figma.png",
    descr:"Figma is a collaborative interface design tool that streamlines UI/UX workflows. It allows real-time design sharing, feedback, and version control. Perfect for designing modern, responsive, and user-focused interfaces.",
  },
  {
    title: "Adobe Creative Suite",
    imgSrc: "/Suite.png",
    descr: "From branding to social media assets, our skilled design team creates pixel-perfect, high-quality visuals that align with your brand identity. Using industry-standard tools and modern techniques, we deliver creative solutions that are both visually stunning and strategically effective across platforms.",
  },
  {
    title: "React / Next.js / Node.js",
    imgSrc: ["/react.png", "/nextjs.png", "/Node.png"],
    descr: "Our developers rely on modern frameworks and runtimes to build fast, scalable, and reliable digital products. These technologies enable efficient development, seamless integration, and high performance—ensuring each solution we deliver meets the demands of today’s users and tomorrow’s growth.",
  },
  {
      title: "Flutter / React Native",
      imgSrc: ["/react.png", "/flutter.png"],
      descr: "We build cross-platform mobile solutions that ensure consistent performance and user experience across both iOS and Android devices. By using powerful frameworks and efficient coding practices, we reduce development time while maintaining quality, speed, and platform-specific functionality.",
    },
    {
      title: "MongoDB / Firebase",
      imgSrc: ["/mongo.png", "/firebase.png"],
      descr: "We design and manage secure, scalable databases that serve as the backbone of high-performance applications. Our solutions ensure data integrity, fast access, and seamless scalability to support growing user demands and complex business operations.",
    },
    {
      title: "Shopify / Wordpress",
      imgSrc: ["/shopify.png", "/wordpress.png"],
      descr: "We develop flexible, user-friendly CMS and eCommerce platforms tailored for rapid deployment and easy content management. These solutions empower businesses to launch, scale, and manage their digital presence efficiently without compromising on performance, design, or functionality. ",
    },
];


const DevelopmentEssentials = [ 
  {
    title: "UI/UX & Branding",
    src: "/uiuxbranding.png",
    desc: "Designs that capture attention, communicate value, and create seamless user journeys — from logos to complete brand systems.",
  },

  {
    title: "Web & Mobile Development",
    src: "/webnmobiledev.png",
    desc: "Responsive websites, PWAs, and mobile apps built using modern stacks and solid coding standards.",
  },

  {
    title: "Maintenance & Growth Support",
    src: "/maintngrowth.png",
    desc: "After launch, we offer ongoing support, performance monitoring, and feature enhancements.",
  },
]


const OurApproach = [
  {
    title: "Discovery & Strategy",
    imgSrc: "/01.png",
    descr:`We closely collaborate with you to understand your business needs, identify key challenges, define clear project goals, and outline a practical, step-by-step execution plan. This strategic approach ensures alignment, clarity, and efficiency from day one.
Deliverables: Detailed roadmap, prioritised feature list, recommended tech stack.`,
  },
  {
    title: "Design & Identity",
    imgSrc: "/02.png",
    descr:`From in-depth user research and journey mapping to detailed wireframes and complete UI kits, we focus on creating visuals that are not only beautiful but also highly functional. Every design decision is driven by user needs, ensuring a seamless and engaging user experience.`,
  },
  {
    title: "Agile Development",
    imgSrc: "/03.png",
    descr:`Our developers bring your vision to life through clean, maintainable code, regular development iterations, and full transparency throughout the process. We keep you in the loop with consistent updates and progress demos, ensuring alignment at every stage.
Deliverables: Source code, GitHub repository access, weekly demo sessions.`,
  },
  {
      title: "Testing & Deployment",
      imgSrc: "/04.png",
      descr:`Every project we handle goes through rigorous quality assurance, detailed documentation, and comprehensive launch support to ensure a seamless release. From testing to deployment, we prepare everything needed for a successful handoff.
      Deliverables: Final production build, staging or live deployment, user training and documentation.`,
    },
    {
      title: "Long-Term Partenership",
      imgSrc: "/05.png",
      descr:`We don’t disappear after launch. Our team stays engaged to help your product evolve through regular updates, security monitoring, performance optimization, and feature enhancements—ensuring it continues to meet user needs and business goals.
       Deliverables: Monthly support, new feature integration, detailed growth and performance reports.`,
    }
];



const Projects = [ 
  {
    src: "/datingapp.png",
    title: "Muslim Dating: A Dating App"
   
  },
  {
    
    src: "/shopclues.png",
    title: "Shopclues: An E-Commerce Web App "
    
  },
  {
   
    src: "/contop.png",
    title: "ConTop: Transport Agency Website"
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


