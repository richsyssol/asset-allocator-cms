import React from "react";
import { useParams } from "react-router-dom";
import { goalsMap } from "../../constants/goals";
import { motion } from "framer-motion";
import GoalPageLayout from "./GoalPageLayout";

function Goals() {
  const { slug } = useParams();
  const goalData = goalsMap[slug];

  if (!goalData) {
    return <div className="p-4 text-red-500">Goal not found.</div>;
  }

  return <GoalPageLayout data={goalData} />;
}

export default Goals;
