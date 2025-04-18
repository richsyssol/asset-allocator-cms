import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from "./ServiceHero";
import ServiceDataGrid from "./ServiceDataGrid";
import Sidebar from "./Sidebar";
import AboutSection from "./AboutSection";
import { servicesMap } from "../../constants/service";

export default function Services() {
  const { slug } = useParams();
  const service = servicesMap[slug];

  if (!service)
    return (
      <div className="text-center text-red-500 mt-10">Service Not Found</div>
    );

  return (
    <motion.div
      className="container mx-auto mt-25 flex flex-col md:flex-row gap-10 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex-1 space-y-10">
        <ServiceHero {...service} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ServiceDataGrid data={service.data} />
        </motion.div>

        <AboutSection content={service.aboutContent} />

        {service?.features.length > 0 && (
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-sm "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {service?.whyUsPoints.length > 0 && (
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-sm "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Why Choose Us
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service?.whyUsPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <motion.div
        className="w-full md:w-80"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Sidebar links={service.sidebarLinks} />
      </motion.div>
    </motion.div>
  );
}
