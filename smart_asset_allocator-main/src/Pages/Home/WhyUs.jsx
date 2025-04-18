import React from "react";
import { motion } from "framer-motion";
import { whyImage } from "../../assets";
import { Button } from "antd";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const WhyUs = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-8  shadow-lg space-y-8 lg:space-y-0">
        {/* Left Content Section */}
        <motion.div
          className="lg:w-1/2 space-y-6 my-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl text-center  font-extrabold mb-2 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Better Options, Best Deals
          </motion.h1>

          <motion.h3
            className="font-palanquin text-center text-xl md:text-3xl font-bold mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why
            <span className="m-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Sanjay Jadhav
            </span>
            & Associates?
          </motion.h3>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>✓ More than 16 years of rich experience</li>
            <li>
              ✓ Access to all the top brands in Insurance and Investment domain
            </li>
            <li>✓ Legacy of countless delighted clients</li>
            <li>✓ Deep technical know-how & unbiased consulting</li>
            <li>✓ Cent percent support in claim handling</li>
            <li>✓ Services throughout the country</li>
            <li>
              ✓ Free of cost support for stuck-up genuine claims (even if you
              are not our client)
            </li>
          </ul>
          <p className="text-gray-700">
            With over 16 years of rich experience, Sanjay Jadhav and Associates
            stands as a beacon of excellence and trust in financial planning. We
            offer access to top brands in the insurance and investment domain,
            backed by a legacy of countless delighted clients.
          </p>
          <p className="text-gray-700">
            Our deep technical know-how and unbiased consulting ensure every
            financial decision is made with confidence. We provide full claim
            handling support and even assist with genuine stuck claims,
            regardless of whether you are our client.
          </p>

          <motion.a
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-orange-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📅 Book Your Consultation Today!
          </motion.a>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-gray-700 w-full"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-blue-900">
              Investment cum Insurance
            </h3>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                Wealth generation planning to wisely invest the earned money
              </li>
              <li>
                Specific goal-based planning to meet the expenses of major life
                events
              </li>
              <li>Retirement planning for an astonishing second inning</li>
            </ul>
            <motion.a
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ℹ️ More Information
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image & Investment Section */}
        <motion.div
          className="mx-5 lg:w-1/2 flex flex-col items-center lg:items-start space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={whyImage}
            alt="Financial Planning"
            className="rounded-2xl shadow-md w-full object-cover "
          />
        </motion.div>
      </div>
    </ContentWrapper>
  );
};

export default WhyUs;
