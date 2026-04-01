import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiIdentification, HiAcademicCap } from "react-icons/hi";
import { HiCheckBadge } from "react-icons/hi2";

export const TrainingCenter = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      /* Ganti bg-slate-900 jadi bg-slate-50 dan hapus text-white */
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
          Training <span className="text-sky-500">Academy.</span>
        </h1>
      </header>

      <div className="grid grid-cols-3 gap-8 py-10">
        {[
          {
            name: "Gada Pratama",
            label: "Dasar",
            icon: <HiIdentification />,
            desc: "Pelatihan dasar wajib bagi satuan pengamanan pemula.",
          },
          {
            name: "Gada Madya",
            label: "Pengawas",
            icon: <HiCheckBadge />,
            desc: "Mempersiapkan personel untuk jabatan setingkat supervisor.",
          },
          {
            name: "Gada Utama",
            label: "Manajer",
            icon: <HiAcademicCap />,
            desc: "Kualifikasi tertinggi untuk level manajerial keamanan.",
          },
        ].map((item, i) => (
          <div
            key={i}
            /* Ubah bg-white/5 jadi bg-white dan border lebih soft */
            className="border-sky-100 hover:border-sky-400 rounded-[3rem] border bg-white p-10 shadow-xl transition-all"
          >
            <div className="text-sky-500 mb-6 text-7xl">{item.icon}</div>
            <h2 className="text-slate-800 mb-2 text-4xl font-black uppercase">
              {item.name}
            </h2>
            <p className="text-sky-500 mb-6 font-bold uppercase italic tracking-widest">
              {item.label}
            </p>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <footer className="text-slate-400 border-slate-200 border-t pt-8 text-center font-black uppercase tracking-[0.5em]">
        Since 2002 • Building Excellence Personel
      </footer>
    </motion.div>
  );
};
