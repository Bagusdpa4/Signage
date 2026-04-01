import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiShieldCheck, HiSparkles, HiUserGroup } from "react-icons/hi";

export const CoreServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Petugas Keamanan",
      desc: "Personel terlatih dengan standar prosedur ketat untuk perlindungan maksimal.",
      icon: <HiShieldCheck />,
    },
    {
      title: "Layanan Kebersihan",
      desc: "Petugas terampil dan cekatan untuk kebersihan menyeluruh di berbagai bidang.",
      icon: <HiSparkles />,
    },
    {
      title: "Pasokan Tenaga Kerja",
      desc: "Outsourcing tenaga kerja kompeten untuk mendukung efisiensi bisnis Anda.",
      icon: <HiUserGroup />,
    },
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
        <h1 className="text-7xl font-black uppercase italic tracking-tighter">
          Core <span className="text-sky-500">Services.</span>
        </h1>
      </header>

      <div className="grid flex-1 grid-cols-3 items-center gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-50 hover:border-sky-500 h-100 flex flex-col justify-center rounded-[3rem] border-2 border-transparent p-10 transition-all"
          >
            <div className="text-sky-500 mb-8 text-7xl">{item.icon}</div>
            <h2 className="text-slate-900 mb-4 text-4xl font-black uppercase leading-tight">
              {item.title}
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
