import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineSparkles } from "react-icons/hi2";

export const VisionMission = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="bg-slate-50 text-slate-900 absolute inset-0 flex h-screen w-screen flex-col justify-between overflow-hidden px-16 py-16"
    >
      <header>
        <button
          onClick={() => navigate("/")}
          className="text-sky-500 mb-8 flex cursor-pointer items-center gap-4 text-2xl font-black uppercase tracking-tighter transition-all hover:gap-6"
        >
          <span className="text-4xl">←</span>
        </button>
        <h1 className="text-7xl font-black uppercase italic tracking-tighter">
          Our <span className="text-sky-500">Direction.</span>
        </h1>
      </header>

      {/* Layout Atas-Bawah */}
      <div className="flex flex-1 flex-col gap-6 py-8">
        {/* VISION (ATAS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-sky-100 hover:border-sky-400 cursor-pointer group flex flex-1 items-center gap-12 rounded-[3.5rem] border-2 bg-white px-16 shadow-xl transition-all"
        >
          <div className="bg-sky-50 flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl">
            <HiOutlineLightBulb className="text-sky-500 text-6xl" />
          </div>
          <div>
            <h2 className="text-sky-500 mb-2 text-2xl font-black uppercase italic tracking-[0.4em]">
              Vision
            </h2>
            <p className="text-slate-900 text-5xl font-[1000] uppercase leading-tight tracking-tighter">
              Helping customer to run their business{" "}
              <span className="text-sky-500 decoration-sky-100 underline decoration-8 underline-offset-4">
                peacefully.
              </span>
            </p>
          </div>
        </motion.div>

        {/* MISSION (BAWAH) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-sky-500 hover:bg-sky-600 group flex flex-1 items-center gap-12 rounded-[3.5rem] px-16 shadow-2xl transition-all"
        >
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-white/20">
            <HiOutlineSparkles className="text-6xl text-white" />
          </div>
          <div>
            <h2 className="text-sky-100 mb-2 text-2xl font-black uppercase italic tracking-[0.4em]">
              Mission
            </h2>
            <p className="text-5xl font-[1000] uppercase leading-tight tracking-tighter text-white">
              Excellence in{" "}
              <span className="text-sky-200">everything we do.</span>
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="border-slate-200 flex w-full items-center justify-between border-t pt-8">
        <p className="text-slate-400 text-lg font-black uppercase italic tracking-[0.4em]">
          Shelter Indonesia • Vision Mision
        </p>
      </footer>
    </motion.div>
  );
};
