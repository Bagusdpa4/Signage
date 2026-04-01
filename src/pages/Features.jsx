import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiRocketLaunch,
  HiFingerPrint,
  HiShieldCheck,
  HiUserGroup,
  HiPresentationChartLine,
  HiServerStack,
} from "react-icons/hi2";

export const Features = () => {
  const navigate = useNavigate();
  const products = [
    {
      name: "Sellgo",
      desc: "Sales Management System",
      icon: <HiRocketLaunch />,
    },
    { name: "Shelia", desc: "Digital Assistant AI", icon: <HiFingerPrint /> },
    {
      name: "Shelter +",
      desc: "Premium Security & Facility",
      icon: <HiShieldCheck />,
    },
    { name: "Casual Work", desc: "On-Demand Workforce", icon: <HiUserGroup /> },
    {
      name: "Guard",
      desc: "Advanced Patrolling App",
      icon: <HiPresentationChartLine />,
    },
    { name: "HRIS", desc: "Integrated HR Solution", icon: <HiServerStack /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="text-slate-900 absolute inset-0 flex h-screen w-screen flex-col justify-between overflow-hidden bg-white px-16 py-16"
    >
      <header>
        <button
          onClick={() => navigate("/")}
          className="text-sky-500 mb-8 flex cursor-pointer items-center gap-4 text-2xl font-black uppercase tracking-tighter transition-all hover:gap-6"
        >
          <span className="text-4xl">←</span>
        </button>
        <h1 className="text-7xl font-black uppercase tracking-tighter">
          Product <span className="text-sky-500 italic">Ecosystem.</span>
        </h1>
      </header>

      <div className="grid w-full flex-1 grid-cols-3 items-center gap-6 py-10">
        {products.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="bg-slate-50 border-slate-100 hover:border-sky-300 rounded-4xl border p-8 transition-all hover:shadow-2xl"
          >
            <div className="text-sky-500 mb-6 text-6xl">{item.icon}</div>
            <h3 className="text-slate-900 mb-2 text-3xl font-[1000] uppercase">
              {item.name}
            </h3>
            <p className="text-slate-400 text-lg font-bold uppercase italic tracking-tight">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
