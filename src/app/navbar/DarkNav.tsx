"use client";
import { useEffect, useRef, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const dropVariants = {
  hidden: { opacity: 0, height: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    height: "auto",
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function DarkNav() {
  const [servhovered, setservhovered] = useState(false);
  const [abouthovered, setabouthovered] = useState(false);
  const [homehovered, sethomehovered] = useState(false);
  const [conthovered, setconthovered] = useState(false);
  const [bloghovered, setbloghovered] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const pathname = usePathname();

  const isToggleDropDown = () => {
    setToggleDropDown((prev) => !prev);
  };

  const [burgerOn, setburgerOn] = useState(false);

  const toggleBurger = () => {
    setburgerOn((prev) => !prev);
  };
  const [dropMob, setDropMob] = useState(false);

  const isToggleDropMob = () => {
    setDropMob((prev) => !prev);
  };

  const pr = () => {
    console.log("hello");
  };

  useEffect(() => {
    pr();
  }, []);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#04081C] w-full  shadow-md py-4  flex justify-between items-center relative  gap-4">
      {burgerOn && (
        <div className="w-full min-h-screen  bg-white bg-opacity-70 backdrop-blur-[8px] text-lg text-black absolute top-0 z-20 flex px-4 py-8 md:hidden">
          <div
            className="text-[23px] font-extrabold absolute top-8 right-8 z-50"
            onClick={toggleBurger}
          >
            {" "}
            <RxCross1 style={{ strokeWidth: 0.5 }} />
          </div>

          <ul className="flex flex-col items-center justify-center gap-5 relative  w-full text-3xl">
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>{" "}
            <li
              className={`flex justify-center items-center gap-2 ${
                dropMob && ""
              } "`}
              onClick={isToggleDropMob}
            >
              Services{" "}
              <IoMdArrowDropdown
                className={`transition-transform duration-300 ${
                  dropMob ? "rotate-180" : "rotate-0"
                }`}
              />{" "}
            </li>
            <AnimatePresence initial={false}>
              {dropMob && (
                <motion.ul
                  variants={dropVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col text-center text-gray-500 text-[20px] space-y-2 overflow-hidden"
                >
                  <Link href="/web">
                    <li>Website Development</li>
                  </Link>
                  <Link href="/mobile">
                    <li>Mobile Development</li>
                  </Link>
                  <Link href="/design">
                    <li>Branding & Design</li>
                  </Link>
                  <Link href="/ourteam">
                    <li>Team as a Service</li>
                  </Link>
                </motion.ul>
              )}
            </AnimatePresence>
            <Link href="/about">
              {" "}
              <li>About Us</li>
            </Link>
            <Link href="/contact">
              {" "}
              <li>Contact Us</li>
            </Link>
            {/* <Link href="/blog">  <li>Blog</li></Link> */}
          </ul>
        </div>
      )}
      <div
        id="hamb"
        className=" px-3 w-full  max-w-screen-xl bg-[#04081C] md:gap-0 md:px-0  flex flex-wrap items-center justify-between mx-auto "
      >
        <Link href="./">
          <svg
            width="121"
            height="49"
            viewBox="0 0 121 49"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.6838 9.87762C30.7526 10.9252 33.4136 12.9934 35.2648 15.7698L33.2149 17.278C31.6754 14.9691 29.4625 13.2491 26.9104 12.3779C24.3582 11.5067 21.6055 11.5317 19.0681 12.4489C16.5306 13.3662 14.3463 15.1259 12.8449 17.4624C11.3436 19.7989 10.6068 22.5851 10.7459 25.4002C10.885 28.2154 11.8924 30.9065 13.6159 33.0671C15.3395 35.2278 17.6855 36.7405 20.2998 37.3769C22.914 38.0133 25.6543 37.7387 28.1069 36.5947C30.5594 35.4506 32.591 33.4993 33.8946 31.0353L36.0821 32.3125C34.5145 35.2753 32.0717 37.6218 29.1226 38.9974C26.1735 40.3731 22.8783 40.7033 19.7348 39.938C16.5913 39.1728 13.7702 37.3538 11.6977 34.7557C9.62518 32.1576 8.4138 28.9216 8.24655 25.5365C8.0793 22.1514 8.96525 18.801 10.7706 15.9915C12.5759 13.182 15.2025 11.066 18.2537 9.963C21.3049 8.86003 24.615 8.83006 27.6838 9.87762ZM63.8619 18.8574H66.0266V34.962C66.0266 35.3722 66.2048 35.72 66.5614 36.0054C66.9349 36.2907 67.3763 36.4334 67.8856 36.4334V38.7073C67.3254 38.7073 66.799 38.6092 66.3067 38.413C65.8313 38.2168 65.4069 37.9493 65.0334 37.6105C64.6768 37.2716 64.3882 36.8792 64.1675 36.4334C63.9638 35.9697 63.8619 35.4792 63.8619 34.962V18.8574ZM41.655 25.0639V38.4398H39.4649V25.0639H41.655ZM39.4649 21.4208C39.4649 20.816 39.9551 20.3258 40.5599 20.3258C41.1647 20.3258 41.655 20.816 41.655 21.4208V21.7899C41.655 22.3947 41.1647 22.885 40.5599 22.885C39.9551 22.885 39.4649 22.3947 39.4649 21.7899V21.4208ZM45.9586 38.4398H43.7685V31.7518C43.7685 30.7887 43.9552 29.8792 44.3287 29.0231C44.7023 28.1671 45.2116 27.4269 45.8567 26.8027C46.5019 26.1785 47.2489 25.6881 48.0978 25.3314C48.9636 24.9568 49.8889 24.7696 50.8736 24.7696V27.0702C50.1945 27.0702 49.5579 27.1951 48.9636 27.4448C48.3694 27.6766 47.8431 28.0066 47.3847 28.4346C46.9433 28.8626 46.5953 29.362 46.3406 29.9327C46.0859 30.5034 45.9586 31.1098 45.9586 31.7518V38.4398ZM55.5527 38.092C56.3506 38.4487 57.208 38.627 58.1248 38.627C58.8379 38.627 59.5339 38.4576 60.213 38.1187C60.8922 37.7799 61.5118 37.3162 62.0721 36.7277L60.5441 35.1225C60.1706 35.5149 59.7801 35.8181 59.3727 36.0321C58.9652 36.2461 58.5492 36.3531 58.1248 36.3531C57.5136 36.3531 56.9364 36.2283 56.3931 35.9786C55.8498 35.7289 55.3744 35.399 54.967 34.9888C54.5765 34.5608 54.2624 34.0614 54.0247 33.4907C53.787 32.92 53.6682 32.3136 53.6682 31.6716C53.6682 31.0295 53.787 30.4231 54.0247 29.8524C54.2624 29.2817 54.5765 28.7824 54.967 28.3543C55.3744 27.9263 55.8498 27.5964 56.3931 27.3645C56.9364 27.1148 57.5136 26.99 58.1248 26.99C58.5492 26.99 58.9652 27.1059 59.3727 27.3378C59.7801 27.5518 60.1706 27.846 60.5441 28.2206L62.0721 26.6155C61.5118 26.0269 60.8922 25.5632 60.213 25.2244C59.5339 24.8677 58.8379 24.6893 58.1248 24.6893C57.208 24.6893 56.3506 24.8766 55.5527 25.2511C54.7547 25.6078 54.0502 26.1072 53.439 26.7492C52.8448 27.3734 52.3694 28.1136 52.0128 28.9696C51.6733 29.8078 51.5035 30.7085 51.5035 31.6716C51.5035 32.6346 51.6733 33.5442 52.0128 34.4002C52.3694 35.2385 52.8448 35.9697 53.439 36.5939C54.0502 37.2181 54.7547 37.7175 55.5527 38.092ZM77.8611 28.1403C78.2346 28.4435 78.5487 28.818 78.8034 29.2639C79.075 29.6919 79.2787 30.1556 79.4146 30.655H70.8069C70.9257 30.1556 71.121 29.6919 71.3926 29.2639C71.6643 28.818 71.9868 28.4435 72.3603 28.1403C72.7338 27.8193 73.1498 27.5696 73.6082 27.3913C74.0836 27.2129 74.5844 27.1237 75.1107 27.1237C75.637 27.1237 76.1294 27.2129 76.5878 27.3913C77.0631 27.5696 77.4876 27.8193 77.8611 28.1403ZM72.5131 38.2258C73.3281 38.5824 74.1939 38.7608 75.1107 38.7608C75.8238 38.7608 76.5114 38.5914 77.1735 38.2525C77.8526 37.8958 78.4723 37.4321 79.0326 36.8614L77.5046 35.2563C77.1311 35.6308 76.7406 35.934 76.3331 36.1659C75.9256 36.3799 75.5182 36.4869 75.1107 36.4869C74.5844 36.4869 74.0836 36.3977 73.6082 36.2194C73.1498 36.041 72.7338 35.7913 72.3603 35.4703C71.9868 35.1493 71.6643 34.7748 71.3926 34.3467C71.121 33.9187 70.9257 33.4461 70.8069 32.9289H81.6811C81.715 32.59 81.732 32.3493 81.732 32.2066V31.8053C81.732 30.8422 81.5537 29.9327 81.1972 29.0766C80.8577 28.2206 80.3908 27.4804 79.7965 26.8562C79.2023 26.232 78.4978 25.7416 77.6828 25.3849C76.8849 25.0103 76.0275 24.8231 75.1107 24.8231C74.1939 24.8231 73.3281 25.0103 72.5131 25.3849C71.7152 25.7416 71.0106 26.232 70.3994 26.8562C69.8052 27.4804 69.3298 28.2206 68.9733 29.0766C68.6338 29.9327 68.464 30.8422 68.464 31.8053C68.464 32.7684 68.6338 33.669 68.9733 34.5072C69.3298 35.3455 69.8052 36.0856 70.3994 36.7277C71.0106 37.3519 71.7152 37.8512 72.5131 38.2258Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M101.757 25.1638L98.6215 19.059H93.0503L99.8951 32.385H94.4625L89.9332 38.7434H95.5045L99.9532 32.4981L103.161 38.7434H108.732L101.773 25.1943H107.307L111.836 18.8359H106.265L101.757 25.1638Z"
              fill="#7BB668"
            />
          </svg>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <Link href="./">
              <motion.button
                className="flex gap-1 items-center text-gray-200   transition border  rounded-full px-5 py-1"
                onMouseEnter={() => sethomehovered(true)}
                onMouseLeave={() => sethomehovered(false)}
              >
                <motion.span
                  initial={{ y: 0, opacity: 1 }}
                  animate={
                    homehovered ? { y: -15, opacity: 0 } : { y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Home
                </motion.span>

                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={
                    homehovered ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 right-0 text-center"
                >
                  Home
                </motion.span>
              </motion.button>
            </Link>
          </div>

          <div
            className="relative"
            onClick={isToggleDropDown}
            ref={dropdownRef}
          >
            <motion.button
              className="flex gap-1 items-center text-gray-200   transition border rounded-full px-4 py-1 "
              onMouseEnter={() => setservhovered(true)}
              onMouseLeave={() => setservhovered(false)}
            >
              <motion.span
                initial={{ y: 0, opacity: 1 }}
                animate={
                  servhovered ? { y: -15, opacity: 0 } : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex justify-center items-center gap-1"
              >
                Services
                <IoMdArrowDropdown />
              </motion.span>

              {toggleDropDown && (
                <div className="w-[180px] text-gray-600  bg-white rounded-xl border border-black absolute z-30  top-14 left-0 animate-dropdown transition-all duration-300 ease-out shadow-md">
                  <ul className="flex flex-col  justify-between h-full py-4 text-left  font-light">
                    <li
                      className={`pl-4 py-2 transition-all delay-50 duration-300 ease-in-out ${
                        pathname === "/web"
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <Link href="/web" className="block w-full h-full">
                        Web Development
                      </Link>
                    </li>

                    <li
                      className={`pl-4 py-2 transition-all delay-50 duration-300 ease-in-out ${
                        pathname === "/mobile"
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <Link href="/mobile" className="block w-full h-full">
                        Mobile Development
                      </Link>
                    </li>

                    <li
                      className={`pl-4 py-2 transition-all delay-50 duration-300 ease-in-out ${
                        pathname === "/design"
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <Link href="/design" className="block w-full h-full">
                        Branding & Design
                      </Link>
                    </li>

                    <li
                      className={`pl-4 py-2 transition-all delay-50 duration-300 ease-in-out ${
                        pathname === "/ourteam"
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <Link href="/ourteam" className="block w-full h-full">
                        {" "}
                        Team as a Service
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={
                  servhovered ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 right-0 text-center"
              >
                Services
              </motion.span>
            </motion.button>
          </div>

          <div className="relative">
            <Link href="./about">
              <motion.button
                className="flex gap-1 items-center text-gray-200   transition border rounded-full px-5 py-1"
                onMouseEnter={() => setabouthovered(true)}
                onMouseLeave={() => setabouthovered(false)}
              >
                <motion.span
                  initial={{ y: 0, opacity: 1 }}
                  animate={
                    abouthovered ? { y: -15, opacity: 0 } : { y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  About Us
                </motion.span>

                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={
                    abouthovered ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 right-0 text-center"
                >
                  About Us
                </motion.span>
              </motion.button>
            </Link>
          </div>

          {/* <div className="relative">
            <Link href="./blog">
            <motion.button
              className="flex gap-1 items-center text-gray-200   transition border rounded-full px-5 py-1"
              onMouseEnter={() => setbloghovered(true)}
              onMouseLeave={() => setbloghovered(false)}
            >
              <motion.span
               initial={{ y: 0, opacity: 1 }}
               animate={bloghovered ? { y: -15, opacity: 0 } : { y: 0, opacity: 1 }}
               transition={{ duration: 0.3,ease: "easeInOut" }}
               >
                Blog
                </motion.span>

                <motion.span
         initial={{ y: 10, opacity: 0 }}
         animate={bloghovered ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
         transition={{ duration: 0.3,ease: "easeInOut" }}
        className="absolute left-0 right-0 text-center"
      >
        Blog
      </motion.span>
             

            </motion.button>
            </Link>
           
            
          </div> */}
        </nav>
        <div className="relative hidden md:block">
          <Link href="./contact">
            <motion.button
              className="flex  items-center bg-[#fafafa] text-gray-800 transition border border-black rounded-full px-6 py-2 overflow-hidden gap-3"
              onMouseEnter={() => setconthovered(true)}
              onMouseLeave={() => setconthovered(false)}
            >
              <motion.span
                initial={{ y: 0, opacity: 1 }}
                animate={
                  conthovered ? { y: -15, opacity: 0 } : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Contact Us
              </motion.span>

              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={
                  conthovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {">"}
              </motion.span>

              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={
                  conthovered ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 right-0 text-center"
              >
                Contact Us
              </motion.span>
            </motion.button>
          </Link>
        </div>

        <div className="md:hidden" onClick={toggleBurger}>
          {!burgerOn ? (
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_3338_133617"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="31"
              >
                <path d="M30 0.228516H0V30.2285H30V0.228516Z" fill="white" />
              </mask>
              <g mask="url(#mask0_3338_133617)">
                <path
                  d="M23.3045 21.7783H12.9844"
                  stroke="white"
                  strokeWidth="2.41425"
                  stroke-linecap="round"
                />
                <path
                  d="M7.22656 15.2061H23.1214"
                  stroke="white"
                  strokeWidth="2.50529"
                  stroke-linecap="round"
                />
                <path
                  d="M7.27344 8.8916H23.2101"
                  stroke="white"
                  strokeWidth="2.50858"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          ) : (
            <div className="text-[23px] font-extrabold text-white">
              {" "}
              <RxCross1 style={{ strokeWidth: 0.5 }} />
            </div>
          )}
        </div>
      </div>

      {/* {toggleBurger && (
  <div className="w-full h-[20%] bg-green-500 absolute top-0">

  </div>
)} */}
    </header>
  );
}
