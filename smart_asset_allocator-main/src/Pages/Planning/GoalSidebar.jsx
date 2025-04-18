import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const GoalSidebar = ({ links = [], downloads = [] }) => {
  const location = useLocation();
  //   console.log(links, downloads);
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="p-4 shadow-lg rounded-2xl border border-gray-200 bg-white space-y-6">
        {/* Explore Goals Section */}
        <div>
          <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-md">
            Explore Goals
          </h3>
          <ul className="mt-2 space-y-1">
            {links.map((goal, i) => {
              //   console.log(goal);
              return (
                <motion.li
                  key={i}
                  className={`py-2 px-2 rounded-md transition-colors duration-200 ${
                    location.pathname === goal.link
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <a href={goal.link} className="font-medium block">
                    {goal.label}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Downloads Section */}
        {downloads.length > 0 && (
          <div>
            <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-md">
              Downloads
            </h3>
            <ul className="mt-2 space-y-1">
              {downloads.map((item, i) => (
                <motion.li
                  key={i}
                  className="py-2 px-2 rounded-md hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <a
                    href={item.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-medium text-blue-700 hover:underline"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GoalSidebar;
