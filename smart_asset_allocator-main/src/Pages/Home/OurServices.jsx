import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "../../constants/constants";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
const OurServices = () => {
  return (
    <ContentWrapper>
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="font-palanquin text-center text-xl md:text-3xl font-bold">
            Insurance
            <span className="m-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Provides You a Better
            </span>
            Future
          </h3>

          <p className="mt-4 text-2xl md:text-4xl text-gray-600">
            Pure Insurance Solutions
          </p>
          <p className="italic text-gray-500 mt-2">
            “The best time to buy Insurance was yesterday. The next best time is
            today.”
          </p>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            When it comes to our family, we never compromise. That’s why we
            offer a bouquet of pure insurance plans in every important category
            – term insurance, health insurance, critical illness insurance,
            personal accident insurance, home insurance, vehicle insurance, and
            much more. Our strength lies in in-depth knowledge, genuine
            guidance, and effortless claim support! Consult us and get
            benefited!
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {serviceData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={item.image}
                alt={item.service}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.service}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ContentWrapper>
  );
};

export default OurServices;
