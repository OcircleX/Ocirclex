"use client";
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

const ReviewCounter: React.FC = () => {
  // const targetNumber = 987; // Target number for the counter
  // const [digits, setDigits] = useState<number[]>([0, 0, 0]);

  // useEffect(() => {
  //   const digitsArray = String(targetNumber).padStart(3, '0').split('').map(Number);
  //   setDigits(digitsArray);
  // }, [targetNumber]);

  // const renderCounter = (digit: number, index: number) => (
  //   <motion.div
  //     key={index}
  //     className="review-counter-number-wrap"
  //     style={{ transform: `translateY(-${digit * 100}%)` }}
  //     transition={{ duration: 0.5 }}
  //   >
  //     {[...Array(10).keys()].map((num) => (
  //       <h2 className="review-counter-number" key={num}>{num}</h2>
  //     ))}
  //   </motion.div>
  // );

  return (
    <div
      className="review-contents-wrapper w-2/3 bg-red-300"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="review-title">
        Years of the
        <br />
        experiences
      </div>

      <div className="review-counter-wrapper">
        <div
          className="review-counter-number-wrap _01"
          style={{
            transform:
              "translate3d(0px, -89%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {[0, 9, 8, 7, 6, 5, 4, 3, 8].map((num, index) => (
            <h2 key={index} className="review-counter-number">
              {num}
            </h2>
          ))}
        </div>
        <h2 className="icon">+</h2>
      </div>
    </div>
  );
};

export default ReviewCounter;
