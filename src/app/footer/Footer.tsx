"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useGSAP(
    () => {
      gsap.from("#date", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#date",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#lets", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#lets",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#startproject", {
        x: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#startproject",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#linkss", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#linkss",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#copyr", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#copyr",
        },
      });
    },
    { scope: "" }
  );

  return (
    <div className="bg-[#04081C] border-gray-200 pt-10  text-gray-700 w-[100%] relative  ">
      <footer className="relative  text-white   w-full">
        {/* Top content */}
        <div className="max-w-screen-xl  mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
            {/* Left side */}
            <div>
              <p className="text-sm mb-1" id="date">
                ©2024
              </p>
              <h3
                className="text-xl md:text-3xl font-semibold uppercase leading-tight"
                id="lets"
              >
                LET’S START <br />
                WORK TOGETHER
              </h3>

              <div className="md:hidden py-3 flex flex-col gap-3">
                <p className="text-lg">• Islamabad, Pakistan</p>
                <p className="text-lg">• support@ocirclex.com</p>
                <p className="text-lg">• +92 344 9622270</p>

                <Link
                  href="https://www.linkedin.com/company/circlex/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-lg">• LinkedIn</p>
                </Link>
                <Link
                  href="https://www.behance.net/Circle_Xproject"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-lg ">• Behance</p>
              
                </Link>
              </div>
            </div>

            <Link href="contact">
              <button
                className="flex  justify-center items-center  gap-4 mt-6 px-4 md:px-6 py-3 bg-white text-[#04081C] text-lg font-medium rounded-full  transition"
                id="startproject"
              >
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3338_133548)">
                    <g clipPath="url(#clip1_3338_133548)">
                      <path
                        d="M0.554688 5.50987C0.554688 7.96447 2.54453 9.95432 4.99913 9.95432C7.45373 9.95432 9.44358 7.96447 9.44358 5.50987C9.44358 3.05528 7.45373 1.06543 4.99913 1.06543C2.54453 1.06543 0.554688 3.05528 0.554688 5.50987Z"
                        fill="black"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_3338_133548">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(0 0.732422)"
                      />
                    </clipPath>
                    <clipPath id="clip1_3338_133548">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(0 0.732422)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                START A PROJECT
              </button>
            </Link>
          </div>
        </div>

        <div
          className=" hidden md:flex mb-4 space-y-2  md:space-y-0 justify-between items-center text-sm text-gray-200 md:gap-x-12 md:mx-auto md:w-full max-w-screen-xl px-4"
          id="linkss"
        >
          {/* <p className="text-lg">• ISLAMABAD, PAKISTAN</p> */}
          {/* <p className=" text-lg">• support@ocirclex.com</p> */}

          <div
    className="text-md relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] flex items-start gap-2">
    
    
    <span>• </span>
    <span>2501 CHATHAM RD STE R <br />
    SPRINGFIELD IL 62704</span>
  </div>  
          <div
    className=" relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
    <span>• support@ocirclex.com</span>
  </div>  


{/* 
  <div
    className="relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
    <span>• +92 344 9622270</span>
  </div>   */}
          {/* <p className=" text-lg">• +92 344 9622270</p> */}
          <div
    className=" relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
    <span>• +92 344 9622270</span>
  </div>  
          <Link
            href="https://www.linkedin.com/company/circlex/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <div
    className=" relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
    <span>• LinkedIn</span>
  </div>  
          </Link>
          <Link
            href="https://www.behance.net/Circle_Xproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <div
    className=" relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
    <span>• Behance</span>
  </div>          </Link>
          <Link href=""></Link>
        </div>

        {/* Bottom text */}
        <div className="  w-full flex flex-col-reverse md:flex-row  gap-8 pt-4 items-center">
          <div className="block md:hidden w-full">
            <svg
              width="360"
              height="93"
              viewBox="0 0 360 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M335.042 91.3587L321.937 68.769L316.945 65.7737L292.857 30.3291H317.943L330.798 52.2948L335.541 55.0405L360.003 91.3587H335.042ZM291.609 91.3587L316.695 55.2901L329.051 68.6442L314.823 91.3587H291.609ZM334.792 65.7737L322.436 52.4196L335.541 30.3291H358.754L334.792 65.7737Z"
                fill="url(#paint0_linear_3338_133592)"
              />
              <path
                d="M237.656 92.7322C230.834 92.7322 224.801 91.4009 219.56 88.7384C214.318 85.9927 210.199 82.207 207.204 77.3812C204.209 72.5554 202.711 67.0224 202.711 60.7821C202.711 54.6251 204.167 49.1752 207.079 44.4327C209.991 39.6069 213.943 35.8211 218.936 33.0754C224.011 30.2465 229.71 28.832 236.034 28.832C242.191 28.832 247.641 30.1633 252.383 32.8258C257.209 35.4051 260.953 39.0244 263.616 43.6838C266.361 48.26 267.734 53.5018 267.734 59.4093C267.734 60.6573 267.651 61.947 267.485 63.2782C267.402 64.5263 267.152 65.9823 266.736 67.6464L212.945 67.896V53.9178L258.124 53.5434L248.39 59.6589C248.306 56.2475 247.807 53.4602 246.892 51.2969C245.977 49.0504 244.645 47.3448 242.898 46.1799C241.151 45.0151 238.946 44.4327 236.283 44.4327C233.538 44.4327 231.166 45.0983 229.17 46.4295C227.173 47.7608 225.633 49.6329 224.552 52.0458C223.47 54.4587 222.929 57.3708 222.929 60.7821C222.929 64.2766 223.512 67.272 224.677 69.7681C225.841 72.181 227.506 74.0114 229.669 75.2595C231.832 76.5075 234.495 77.1316 237.656 77.1316C240.652 77.1316 243.273 76.6323 245.519 75.6339C247.849 74.6355 249.929 73.0962 251.759 71.0161L263.117 82.3734C260.121 85.7847 256.46 88.364 252.134 90.1113C247.89 91.8585 243.065 92.7322 237.656 92.7322Z"
                fill="url(#paint1_linear_3338_133592)"
              />
              <path
                d="M172.898 91.3588V0.375977H194.614V91.3588H172.898Z"
                fill="url(#paint2_linear_3338_133592)"
              />
              <path
                d="M141.142 92.7322C134.652 92.7322 128.786 91.3593 123.544 88.6136C118.386 85.8679 114.309 82.0822 111.313 77.2564C108.318 72.4306 106.82 66.9808 106.82 60.9069C106.82 54.7499 108.318 49.2584 111.313 44.4327C114.392 39.6069 118.51 35.8211 123.669 33.0754C128.911 30.2465 134.818 28.832 141.391 28.832C146.134 28.832 150.46 29.6225 154.371 31.2033C158.282 32.7842 161.859 35.1555 165.104 38.3172L151.376 52.0458C150.128 50.7977 148.672 49.8825 147.008 49.3C145.427 48.6344 143.555 48.3016 141.391 48.3016C139.062 48.3016 136.94 48.8424 135.026 49.9241C133.196 50.9225 131.698 52.337 130.533 54.1674C129.452 55.9979 128.911 58.2028 128.911 60.7821C128.911 63.2782 129.452 65.4831 130.533 67.3968C131.698 69.2272 133.196 70.6833 135.026 71.7649C136.94 72.8466 139.062 73.3874 141.391 73.3874C143.721 73.3874 145.718 73.013 147.382 72.2642C149.046 71.5153 150.502 70.4337 151.75 69.0192L165.603 82.7478C162.192 86.0759 158.49 88.572 154.496 90.2361C150.585 91.9001 146.134 92.7322 141.142 92.7322Z"
                fill="url(#paint3_linear_3338_133592)"
              />
              <path
                d="M58.7266 91.3587V30.3291H80.4426V34.2146C84.4197 30.7922 89.5783 29.0811 95.9184 29.0811C98.2802 29.0811 101.735 29.6089 103.223 30.3942C104.71 31.1796 107.298 33.5385 107.298 33.5385L96.2929 50.5475C95.6272 49.7987 94.6704 49.2163 93.4223 48.8002C92.2575 48.301 90.9262 48.0514 89.4286 48.0514C86.5997 48.0514 84.3948 48.925 82.8139 50.6723C81.233 52.3364 80.4426 54.8325 80.4426 58.1606V91.3587H58.7266Z"
                fill="url(#paint4_linear_3338_133592)"
              />
              <path
                d="M24.7961 91.3592V30.3296H46.637V91.3592H24.7961ZM35.6541 23.2157C32.4092 23.2157 29.7051 22.134 27.5418 19.9708C25.3785 17.7243 24.2969 14.9369 24.2969 11.6088C24.2969 8.36389 25.3785 5.61818 27.5418 3.37169C29.7051 1.1252 32.4092 0.00195312 35.6541 0.00195312C39.0655 0.00195312 41.8112 1.1252 43.8912 3.37169C46.0545 5.61818 47.1362 8.36389 47.1362 11.6088C47.1362 14.9369 46.0545 17.7243 43.8912 19.9708C41.8112 22.134 39.0655 23.2157 35.6541 23.2157Z"
                fill="url(#paint5_linear_3338_133592)"
              />
              <path
                d="M-16.5036 92.7313C-23.2431 92.7313 -29.4833 91.608 -35.2244 89.3615C-40.9654 87.0318 -45.9992 83.8285 -50.3258 79.7515C-54.5691 75.5914 -57.8973 70.724 -60.3101 65.1494C-62.6398 59.5747 -63.8047 53.5425 -63.8047 47.0526C-63.8047 40.4796 -62.6398 34.4473 -60.3101 28.9559C-57.8973 23.3813 -54.5691 18.5555 -50.3258 14.4785C-45.9992 10.4016 -41.007 7.19826 -35.3492 4.86856C-29.6081 2.53887 -23.4095 1.37402 -16.7532 1.37402C-9.76413 1.37402 -3.48228 2.49727 2.09234 4.74376C7.66696 6.90704 12.576 9.94396 16.8193 13.8545L1.84273 28.8311C-0.237354 26.5014 -2.81666 24.671 -5.89518 23.3397C-8.97371 22.0084 -12.593 21.3428 -16.7532 21.3428C-20.331 21.3428 -23.6175 21.9252 -26.6128 23.0901C-29.5249 24.2549 -32.0626 26.0022 -34.2259 28.3319C-36.3892 30.5784 -38.0949 33.2825 -39.3429 36.4442C-40.5078 39.6059 -41.0902 43.1421 -41.0902 47.0526C-41.0902 50.9632 -40.5078 54.4993 -39.3429 57.6611C-38.0949 60.8228 -36.3892 63.5685 -34.2259 65.8982C-32.0626 68.1447 -29.5249 69.892 -26.6128 71.14C-23.6175 72.3048 -20.331 72.8873 -16.7532 72.8873C-12.593 72.8873 -8.9321 72.2633 -5.77037 71.0152C-2.60865 69.6839 0.095459 67.8119 2.34195 65.399L17.3185 80.3756C12.992 84.2861 8.08298 87.3231 2.59155 89.4863C-2.81666 91.6496 -9.18171 92.7313 -16.5036 92.7313Z"
                fill="url(#paint6_linear_3338_133592)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3338_133592"
                  x1="305.071"
                  y1="-8.98613"
                  x2="305.071"
                  y2="95.9476"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3338_133592"
                  x1="215.509"
                  y1="-12.3324"
                  x2="215.509"
                  y2="97.5369"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3338_133592"
                  x1="177.173"
                  y1="-58.2351"
                  x2="177.173"
                  y2="98.1999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3338_133592"
                  x1="118.39"
                  y1="-12.3324"
                  x2="118.39"
                  y2="97.5369"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_3338_133592"
                  x1="68.2864"
                  y1="-11.0382"
                  x2="68.2864"
                  y2="96.0414"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_3338_133592"
                  x1="28.7922"
                  y1="-58.8503"
                  x2="28.7922"
                  y2="98.2284"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_3338_133592"
                  x1="-47.8378"
                  y1="-57.4782"
                  x2="-47.8378"
                  y2="99.6005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hidden md:block w-2/3">
            <svg
              width="800"
              height="200"
              viewBox="0 0 1014 225"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M947.624 240.738L913.204 181.405L900.092 173.538L836.825 80.4404H902.714L936.478 138.134L948.935 145.346L1013.18 240.738H947.624ZM833.547 240.738L899.436 146.002L931.889 181.077L894.519 240.738H833.547ZM946.968 173.538L914.515 138.462L948.935 80.4404H1009.91L946.968 173.538Z"
                fill="url(#paint0_linear_3338_131842)"
              />
              <path
                d="M691.841 244.344C673.92 244.344 658.076 240.847 644.309 233.854C630.541 226.642 619.723 216.699 611.856 204.024C603.988 191.348 600.055 176.816 600.055 160.425C600.055 144.254 603.879 129.939 611.528 117.483C619.177 104.807 629.557 94.864 642.67 87.6523C656 80.222 670.97 76.5068 687.579 76.5068C703.751 76.5068 718.065 80.0034 730.522 86.9967C743.197 93.7713 753.031 103.278 760.024 115.516C767.236 127.535 770.842 141.303 770.842 156.819C770.842 160.098 770.623 163.485 770.186 166.981C769.968 170.26 769.312 174.084 768.219 178.455L626.935 179.11V142.396L745.601 141.413L720.032 157.475C719.813 148.515 718.502 141.194 716.098 135.512C713.694 129.612 710.198 125.131 705.608 122.072C701.019 119.012 695.228 117.483 688.235 117.483C681.023 117.483 674.795 119.231 669.55 122.728C664.305 126.224 660.262 131.141 657.421 137.479C654.58 143.816 653.159 151.465 653.159 160.425C653.159 169.604 654.689 177.471 657.749 184.027C660.808 190.365 665.179 195.173 670.861 198.451C676.543 201.729 683.536 203.368 691.841 203.368C699.708 203.368 706.592 202.057 712.492 199.434C718.611 196.812 724.075 192.769 728.883 187.305L758.713 217.136C750.846 226.096 741.23 232.871 729.866 237.46C718.721 242.049 706.046 244.344 691.841 244.344Z"
                fill="url(#paint1_linear_3338_131842)"
              />
              <path
                d="M521.75 240.738V1.7666H578.788V240.738H521.75Z"
                fill="url(#paint2_linear_3338_131842)"
              />
              <path
                d="M438.334 244.344C421.288 244.344 405.881 240.738 392.114 233.526C378.564 226.314 367.856 216.371 359.989 203.696C352.121 191.021 348.188 176.706 348.188 160.753C348.188 144.581 352.121 130.158 359.989 117.483C368.074 104.807 378.892 94.864 392.441 87.6523C406.209 80.222 421.725 76.5068 438.99 76.5068C451.447 76.5068 462.811 78.5829 473.082 82.7352C483.353 86.8874 492.75 93.1157 501.273 101.42L465.214 137.479C461.936 134.201 458.112 131.797 453.741 130.267C449.589 128.519 444.672 127.645 438.99 127.645C432.871 127.645 427.298 129.065 422.272 131.906C417.464 134.529 413.53 138.244 410.471 143.052C407.63 147.859 406.209 153.651 406.209 160.425C406.209 166.981 407.63 172.773 410.471 177.799C413.53 182.607 417.464 186.431 422.272 189.272C427.298 192.113 432.871 193.534 438.99 193.534C445.109 193.534 450.354 192.55 454.725 190.584C459.095 188.617 462.92 185.776 466.198 182.061L502.584 218.119C493.624 226.861 483.899 233.417 473.41 237.788C463.138 242.158 451.447 244.344 438.334 244.344Z"
                fill="url(#paint3_linear_3338_131842)"
              />
              <path
                d="M221.859 240.738V80.4402H278.898V90.6455C289.344 81.6566 302.893 77.1621 319.546 77.1621C325.749 77.1621 334.823 78.5484 338.731 80.6112C342.638 82.674 349.434 88.8699 349.434 88.8699L320.529 133.545C318.781 131.578 316.268 130.048 312.99 128.956C309.93 127.644 306.433 126.989 302.5 126.989C295.07 126.989 289.278 129.283 285.126 133.873C280.974 138.243 278.898 144.8 278.898 153.541V240.738H221.859Z"
                fill="url(#paint4_linear_3338_131842)"
              />
              <path
                d="M132.733 240.738V80.4402H190.099V240.738H132.733ZM161.252 61.7553C152.729 61.7553 145.627 58.9143 139.945 53.2323C134.263 47.3318 131.422 40.0107 131.422 31.2692C131.422 22.7463 134.263 15.5345 139.945 9.63399C145.627 3.73346 152.729 0.783203 161.252 0.783203C170.212 0.783203 177.424 3.73346 182.887 9.63399C188.569 15.5345 191.41 22.7463 191.41 31.2692C191.41 40.0107 188.569 47.3318 182.887 53.2323C177.424 58.9143 170.212 61.7553 161.252 61.7553Z"
                fill="url(#paint5_linear_3338_131842)"
              />
              <path
                d="M24.27 244.343C6.56842 244.343 -9.82191 241.393 -24.901 235.492C-39.9801 229.373 -53.2017 220.96 -64.5656 210.251C-75.7111 199.324 -84.4526 186.54 -90.7902 171.898C-96.9092 157.256 -99.9688 141.412 -99.9688 124.366C-99.9688 107.101 -96.9092 91.2574 -90.7902 76.8339C-84.4526 62.1919 -75.7111 49.5167 -64.5656 38.8084C-53.2017 28.1 -40.0894 19.6863 -25.2288 13.5673C-10.1497 7.4482 6.13136 4.38867 23.6144 4.38867C41.9716 4.38867 58.4711 7.33893 73.1132 13.2395C87.7552 18.9214 100.649 26.8981 111.794 37.1693L72.4576 76.5061C66.9941 70.3871 60.2195 65.5792 52.1335 62.0826C44.0477 58.586 34.5413 56.8377 23.6144 56.8377C14.2173 56.8377 5.585 58.3675 -2.28236 61.427C-9.93118 64.4865 -16.5966 69.0758 -22.2786 75.1949C-27.9605 81.0954 -32.4406 88.1979 -35.7186 96.5023C-38.7782 104.807 -40.3079 114.095 -40.3079 124.366C-40.3079 134.637 -38.7782 143.925 -35.7186 152.229C-32.4406 160.534 -27.9605 167.746 -22.2786 173.865C-16.5966 179.765 -9.93118 184.355 -2.28236 187.633C5.585 190.692 14.2173 192.222 23.6144 192.222C34.5413 192.222 44.1569 190.583 52.4614 187.305C60.7658 183.808 67.8683 178.891 73.7688 172.553L113.106 211.89C101.742 222.162 88.8479 230.138 74.4244 235.82C60.2195 241.502 43.5013 244.343 24.27 244.343Z"
                fill="url(#paint6_linear_3338_131842)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3338_131842"
                  x1="868.904"
                  y1="-22.823"
                  x2="868.904"
                  y2="252.791"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3338_131842"
                  x1="633.669"
                  y1="-31.6136"
                  x2="633.669"
                  y2="256.964"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3338_131842"
                  x1="532.976"
                  y1="-152.178"
                  x2="532.976"
                  y2="258.706"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3338_131842"
                  x1="378.576"
                  y1="-31.6136"
                  x2="378.576"
                  y2="256.964"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_3338_131842"
                  x1="246.969"
                  y1="-28.2131"
                  x2="246.969"
                  y2="253.037"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_3338_131842"
                  x1="143.229"
                  y1="-153.795"
                  x2="143.229"
                  y2="258.78"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_3338_131842"
                  x1="-58.031"
                  y1="-150.19"
                  x2="-58.031"
                  y2="262.385"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-[65%] md:w-1/3 sm:flex-1">
            <p className="text-center text-sm text-gray-400 " id="copyr">
              © Copyright 2024
              <span className="mx-1">| Designed & Developed By Circle X</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
