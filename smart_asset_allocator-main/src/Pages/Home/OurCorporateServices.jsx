import React from "react";
import { motion } from "framer-motion";
import { corporateData } from "../../constants/constants";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const OurCorporateServices = () => {
  return (
    <ContentWrapper>
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold leading-snug">
            Comprehensive Coverage,
            <span className="ml-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Trusted Protection
            </span>
            for Every Corporate Risk
          </h3>
          <p className="mt-3 text-xl md:text-3xl text-gray-700 font-semibold">
            Corporate Risk Management
          </p>
          <p className="italic text-gray-500 mt-2 text-lg">
            “Our business is our most valuable asset, a vital pillar to ensure
            our overall well-being.”
          </p>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-base md:text-lg">
            And to safeguard your business, we provide you all the tools under
            one roof. So may it be workmen compensation, group health, fire,
            transit, indemnity, or any other business risk; we have it all. Our
            aim is to provide full-proof business solutions at reasonable costs.
            <br />
            <strong className="text-orange-700">
              Consult us and get benefited.
            </strong>
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {corporateData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.service}
                  className="w-full h-56 object-cover transition duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-xl font-semibold">
                    {item.service}
                  </h3>
                </div>
              </div>
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

export default OurCorporateServices;
