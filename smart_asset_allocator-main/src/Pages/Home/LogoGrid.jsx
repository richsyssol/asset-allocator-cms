import React from "react";
import { motion } from "framer-motion";
import { MdImage } from "react-icons/md";

const logos = [
  "https://labartisan.net/demo/mukti/assets/images/sponsor/6.png",
  "https://labartisan.net/demo/mukti/assets/images/sponsor/5.png",
  "https://labartisan.net/demo/mukti/assets/images/sponsor/1.png",
  "https://labartisan.net/demo/mukti/assets/images/sponsor/2.png",
  "https://labartisan.net/demo/mukti/assets/images/sponsor/3.png",
  "https://labartisan.net/demo/mukti/assets/images/sponsor/4.png",
];

const LogoGrid = () => {
  return (
    <div className="bg-gray-50 py-20 mt-10">
      <h3 className="font-palanquin text-center text-xl md:text-3xl font-bold mb-10">
        Trusted by
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Our Partners
        </span>
        Worldwide
      </h3>
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-6 gap-2 place-items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, filter: "grayscale(100%)" }}
            transition={{ duration: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="h-16 md:h-20 object-contain"
            />
            <MdImage className="absolute text-gray-300 text-4xl hidden" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
