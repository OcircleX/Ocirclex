"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full relative bg-white to-gray-100 py-20  flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-screen-xl md:flex justify-between w-full m-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            INNOVATIVE{" "}
          </h1>
          <span className="text-4xl md:text-6xl text-green-500 italic font-serif font-thin">creative solutions</span>
          <p className="mt-4 text-gray-700 text-lg">
            A future-focused digital studio crafting engaging experiences.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#171D3F] text-white text-lg font-medium rounded-md hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0 md:ml-12 bg-[#171D3F] text-white p-6 rounded-xl shadow-lg w-72"
        >
          <h3 className="text-lg font-semibold text-gray-300">AGENCY INSIGHTS</h3>
          <p className="text-gray-300 text-xs">A FUTURE FOCUSED DIGITAL STUDIO</p>

          <p className="mt-12 text-3xl font-bold">94+ </p>
          <p className="text-gray-300">Projects Completed</p>
          <p className="mt-6 text-2xl font-bold">85%</p>
          <p className="text-gray-300">Happy Clients</p>
        </motion.div>
      </div>
    </section>
  );
}
