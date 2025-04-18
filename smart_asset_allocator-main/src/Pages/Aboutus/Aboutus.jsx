import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChartPie, FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdInsights } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Make sure lucide-react is installed
import VisionaryLeaders from "./VisionaryLeaders";
import Location from "./Location";
import { aboutData } from "../../constants/aboutUs";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { useLocation } from "react-router-dom";

const Aboutus = () => {
  const visionRef = useRef(null);
  const teamRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Scroll to section based on hash
    if (location.hash === "#vision" && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#team" && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  const [current, setCurrent] = useState(0);

  const iconComponents = {
    FaChartPie: <FaChartPie />,
    GiReceiveMoney: <GiReceiveMoney />,
    FaRegMoneyBillAlt: <FaRegMoneyBillAlt />,
    MdInsights: <MdInsights />,
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  ];
  const next = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000); // Auto slide every 5s
    return () => clearInterval(interval);
  }, [current]);

  return (
    <ContentWrapper>
      {/* About Us Section */}
      <div ref={visionRef} className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 rounded-2xl"
        >
          <div className="max-w-[1440px] flex flex-col justify-center items-center mt-10">
            <motion.div className="m-2 px-5 py-5">
              <h2 className="text-2xl text-center sm:text-4xl font-bold text-blue-800">
                About Us
              </h2>
            </motion.div>

            <motion.div className="max-w-[1440px] flex flex-col lg:flex-row justify-center items-center gap-10">
              {/* Carousel */}
              <motion.div className="m-2 px-5 py-10 w-full lg:w-[50%]">
                <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-xl shadow-md">
                  {galleryImages.map((img, index) => (
                    <motion.img
                      key={index}
                      src={`${img}?auto=format&fit=crop&w=800&q=80`}
                      alt={`Gallery ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === current ? 1 : 0 }}
                    />
                  ))}

                  <button
                    onClick={prev}
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-yellow-500/70 hover:bg-yellow-500 text-white p-2 rounded-full shadow"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-yellow-500/70 hover:bg-yellow-500 text-white p-2 rounded-full shadow"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full flex flex-col gap-5"
              >
                {aboutData.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-lg p-2 text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Strengths */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mx-8">
          {aboutData.icons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shadow-md py-6 px-4 rounded-lg flex items-center bg-white"
            >
              <div className="text-[#00afe9] text-2xl sm:text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-3 sm:p-4 mr-3 transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                {iconComponents[item.icon]}
              </div>
              <div className="text-xs sm:text-lg text-gray-700">
                {item.text}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center px-4 mb-20"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-800">
            Our Expertise
          </h2>
          <p className="text-md sm:text-lg max-w-3xl mx-auto mt-3 text-gray-700">
            Empowering your financial future through strategic asset allocation,
            diversification, and disciplined wealth-building.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 px-4 sm:px-8">
            {aboutData.expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white w-[500px] text-blue-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-md sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-md text-gray-600 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Location />
      {/* Our Team */}
      <div ref={teamRef} className="mt-24">
        <VisionaryLeaders />{" "}
      </div>
    </ContentWrapper>
  );
};

export default Aboutus;
