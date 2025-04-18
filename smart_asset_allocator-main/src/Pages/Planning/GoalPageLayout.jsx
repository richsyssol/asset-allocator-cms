import React from "react";
import { motion } from "framer-motion";
import { goalsMap } from "../../constants/goals";
import GoalSidebar from "./GoalSidebar";

function GoalPageLayout({ data }) {
  console.log(data);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
      className="mt-30 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4"
    >
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        <GoalHeader
          title={data.title}
          subtitle={data.subtitle}
          tagline={data.tagline}
        />
        <GoalAbout aboutContent={data.aboutContent} />
        <GoalFeatures features={data.features} />
        <GoalWhyUs points={data.whyUsPoints} />
      </div>

      {/* Sidebar */}
      <div>
        <GoalSidebar
          links={data.sidebarLinks.goals}
          downloads={data.sidebarLinks.downloads}
        />
      </div>
    </motion.div>
  );
}

export default GoalPageLayout;

export const GoalHeader = ({ title, subtitle, tagline }) => (
  <div className="text-center py-12">
    <motion.h1
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {title}
    </motion.h1>
    <motion.h2
      className="text-xl text-gray-600 mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {subtitle}
    </motion.h2>
    <motion.p
      className="text-md text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {tagline}
    </motion.p>
  </div>
);

export const GoalAbout = ({ aboutContent }) => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <motion.h3
      className="text-2xl font-semibold mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      About This Goal
    </motion.h3>
    <motion.p
      className="text-gray-700 text-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      {aboutContent}
    </motion.p>
  </div>
);

export const GoalFeatures = ({ features }) => (
  <div className="bg-gray-100 py-10">
    <div className="max-w-5xl mx-auto px-4">
      <motion.h3
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Key Features
      </motion.h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="bg-white p-4 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
);

export const GoalWhyUs = ({ points }) => (
  <div className="max-w-5xl mx-auto px-4 py-12">
    <motion.h3
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Why Choose Us
    </motion.h3>
    <ul className="space-y-4">
      {points.map((point, index) => (
        <motion.li
          key={index}
          className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 rounded"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {point}
        </motion.li>
      ))}
    </ul>
  </div>
);
