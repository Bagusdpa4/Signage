import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiLightningBolt,
  HiShieldCheck,
  HiAcademicCap,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export const Dashboard = () => {
  const [isIdle, setIsIdle] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPOI, setSelectedPOI] = useState(null);
  const navigate = useNavigate();
  let timer;

  const resetTimer = () => {
    setIsIdle(false);
    clearTimeout(timer);
    timer = setTimeout(() => setIsIdle(true), 5000);
  };

  useEffect(() => {
    let slideTimer;
    if (isIdle) {
      slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5000);
    } else {
      setCurrentSlide(0);
    }
    return () => clearInterval(slideTimer);
  }, [isIdle]);

  useEffect(() => {
    const events = ["mousedown", "touchstart", "mousemove", "keydown"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      clearTimeout(timer);
    };
  }, []);

  const menuItems = [
    {
      title: "Our Ecosystem",
      subtitle: "Explore Products",
      path: "/features",
      icon: <HiLightningBolt />,
      color: "bg-white",
      textColor: "text-slate-800",
      borderColor: "border-sky-100 hover:border-sky-400",
      iconBox: "bg-sky-50 group-hover:bg-sky-500",
      iconColor: "text-sky-500 group-hover:text-white",
      desc: "Ekosistem digital terintegrasi untuk solusi bisnis yang efisien.",
      pos: "-top-45 -left-20",
      bubblePos: "bottom-[-20px] right-10 flex-row-reverse",
    },
    {
      title: "Core Services",
      subtitle: "Security & Facility",
      path: "/services",
      icon: <HiShieldCheck />,
      color: "bg-sky-500 hover:bg-sky-600",
      textColor: "text-white",
      borderColor: "border-transparent",
      iconBox: "bg-white/20",
      iconColor: "text-white",
      desc: "Layanan keamanan terbaik dengan standar operasional tinggi.",
      pos: "-top-45 -right-20",
      bubblePos: "bottom-[-20px] left-10 flex-row",
    },
    {
      title: "Training Center",
      subtitle: "Gada Pratama - Utama",
      path: "/training",
      icon: <HiAcademicCap />,
      color: "bg-white",
      textColor: "text-slate-800",
      borderColor: "border-sky-100 hover:border-sky-400",
      iconBox: "bg-sky-50 group-hover:bg-sky-500",
      iconColor: "text-sky-500 group-hover:text-white",
      desc: "Pusat pelatihan satpam profesional kualifikasi nasional.",
      pos: "-bottom-48 -left-20",
      bubblePos:
        "top-[-20px] right-10 flex-row-reverse items-end flex-col-reverse",
    },
    {
      title: "Vision & Mission",
      subtitle: "Our STRIVE Values",
      path: "/vision-mission",
      icon: <HiOutlineLightBulb />,
      color: "bg-sky-500 hover:bg-sky-600",
      textColor: "text-white",
      borderColor: "border-transparent",
      iconBox: "bg-white/20",
      iconColor: "text-white",
      desc: "Memberikan nilai tambah melalui filosofi kerja STRIVE.",
      pos: "-bottom-48 -right-20",
      bubblePos: "top-[-20px] left-10 flex-row items-end flex-col-reverse",
    },
  ];

  return (
    <div className="bg-slate-50 relative min-h-screen w-screen overflow-hidden text-left font-sans">
      <AnimatePresence mode="wait">
        {isIdle ? (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex cursor-pointer items-center justify-center bg-white p-10"
            onClick={() => setIsIdle(false)}
          >
            <div className="bg-sky-50 absolute inset-0 animate-pulse opacity-40"></div>
            <AnimatePresence mode="wait">
              {currentSlide === 0 && (
                <motion.div
                  key="branding"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 text-center"
                >
                  <h1 className="text-sky-500 text-9xl text-[10vw] font-black uppercase italic leading-none tracking-tighter lg:text-[16vw] xl:text-[12vw]">
                    SHELTER <br /> INDONESIA
                  </h1>
                  <p className="text-slate-400 mt-10 animate-bounce text-xl font-bold uppercase tracking-[0.5em] lg:text-4xl xl:text-3xl">
                    Tap to Start
                  </p>
                </motion.div>
              )}
              {currentSlide === 1 && (
                <motion.div
                  key="values"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 px-6 text-center"
                >
                  <span className="text-slate-500 mb-4 block text-lg font-black uppercase italic tracking-[0.6em] lg:text-4xl xl:text-4xl">
                    Corporate Values
                  </span>
                  <h2 className="text-slate-900 mb-8 text-[5rem] font-black uppercase italic leading-none tracking-tighter lg:text-[18rem] xl:text-[15rem]">
                    ST<span className="text-sky-500">RIVE</span>
                  </h2>
                  <div className="flex justify-center gap-6">
                    {[
                      "Speed",
                      "Trustworthiness",
                      "Reliable",
                      "Innovative - Creative",
                      "Value Added",
                      "Excellence",
                    ].map((val, i) => (
                      <div
                        key={i}
                        className="hidden text-center lg:block xl:block"
                      >
                        <span className="text-sky-500 font-black lg:text-5xl xl:text-5xl">
                          {val[0]}
                        </span>
                        <span className="text-slate-400 font-bold uppercase lg:text-base xl:text-2xl">
                          {val.substring(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentSlide === 2 && (
                <motion.div
                  key="visionmission"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 px-20 text-center"
                >
                  <div className="mb-16">
                    <h3 className="text-slate-500 mb-2 text-2xl font-black uppercase italic tracking-widest">
                      Vision
                    </h3>
                    <p className="text-slate-900 text-4xl font-extrabold uppercase leading-tight tracking-tighter lg:text-6xl xl:text-6xl">
                      Helping customer to run their business{" "}
                      <span className="text-sky-500">peacefully.</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-slate-500 mb-4 text-2xl font-black uppercase italic tracking-widest">
                      Mission
                    </h3>
                    <p className="text-sky-500 text-4xl font-extrabold uppercase leading-tight tracking-tighter lg:text-6xl xl:text-6xl">
                      Excellence{" "}
                      <span className="text-slate-900">
                        in everything we do.
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-16 flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-700 ${currentSlide === i ? "bg-sky-500 w-16" : "bg-sky-100 w-6"}`}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-page"
            className="absolute inset-0 flex min-h-full w-full flex-col justify-between px-4 py-12 lg:px-20 lg:py-24 xl:px-16 xl:py-12"
          >
            <AnimatePresence>
              {selectedPOI && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedPOI(null)}
                  className="absolute inset-0 z-20 cursor-default"
                />
              )}
            </AnimatePresence>

            <header
              className="transition-all duration-500"
              style={{ opacity: selectedPOI ? 0.2 : 1 }}
            >
              <h2 className="text-sky-500 mb-1 text-lg font-bold uppercase italic tracking-[0.4em] lg:text-4xl xl:text-3xl">
                Shelter Indonesia
              </h2>
              <h1 className="text-slate-900 text-[6vw] font-extrabold uppercase leading-[0.85] tracking-tighter lg:text-[7vw] xl:text-[3vw]">
                Partner You can Trust <br />{" "}
                <span className="text-sky-500 text-[5vw] lg:text-[5vw] xl:text-[2vw]">
                  Powered With Technology.
                </span>
              </h1>
            </header>

            <div className="flex flex-1 items-center justify-center">
              <motion.div
                animate={{
                  scale: selectedPOI ? 0.9 : 1,
                  rotateX: selectedPOI ? 5 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="grid w-full max-w-lg grid-cols-1 gap-12 p-8 md:grid-cols-1 lg:max-w-7xl lg:grid-cols-1 xl:max-w-5xl xl:grid-cols-2"
              >
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <button
                      onClick={() => navigate(item.path)}
                      className={`${item.color} ${item.borderColor} group relative flex w-full cursor-pointer items-center justify-between rounded-[2.5rem] border-2 p-10 text-center shadow-xl transition-all active:scale-95 lg:p-10 lg:text-left xl:p-8 xl:text-left`}
                    >
                      <div className="flex items-center gap-10">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPOI(
                              selectedPOI?.title === item.title ? null : item,
                            );
                          }}
                          className={`${item.iconBox} z-30 hidden rounded-3xl p-5 transition-colors lg:flex xl:flex`}
                        >
                          <span
                            className={`${item.iconColor} hidden lg:block lg:text-7xl xl:block xl:text-3xl`}
                          >
                            {item.icon}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span
                            className={`${item.textColor} text-xl font-[1000] uppercase lg:text-6xl xl:text-3xl`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`${item.textColor === "text-white" ? "text-sky-100" : "text-slate-400"} lg:text-4xl xl:text-2xl text-lg font-medium italic`}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* AWAN PUTIH + TITIK-TITIK MIMPI */}
                    <AnimatePresence>
                      {selectedPOI?.title === item.title && (
                        <div className={`absolute ${item.pos} z-40`}>
                          {/* Main Cloud Body (Putih) */}
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0,
                              x: index % 2 === 0 ? 50 : -50,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              x: index % 2 === 0 ? -120 : 120,
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="border-sky-400 text-slate-800 relative w-80 overflow-hidden rounded-[3rem] border-4 bg-white p-8 shadow-[0_20px_50px_rgba(14,165,233,0.15)]"
                          >
                            <p className="relative z-10 text-center text-xl font-bold italic leading-tight">
                              "{item.desc}"
                            </p>
                          </motion.div>

                          {/* Trail of Bubbles (Titik-titik Mimpi) */}
                          <div
                            className={`absolute ${item.bubblePos} flex gap-2`}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.1 }}
                              className="border-sky-400 h-7 w-7 rounded-full border-2 bg-white shadow-md"
                            />
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                              className="border-sky-400 h-4 w-4 rounded-full border-2 bg-white shadow-md"
                            />
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3 }}
                              className="bg-sky-400 h-2 w-2 rounded-full shadow-sm"
                            />
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>

            <footer
              className="border-slate-200 flex w-full items-end justify-between border-t pt-6"
              style={{ opacity: selectedPOI ? 0.2 : 1 }}
            >
              <p className="text-slate-400 decoration-sky-400 text-base xl:text-2xl lg:text-xl font-black uppercase italic tracking-[0.3em] underline decoration-4 underline-offset-8">
                Shelter Solution Ecosystem 2026
              </p>
              <div className="text-right">
                <p className="text-sky-500 lg:text-2xl xl:text-3xl text-lg font-black italic">
                  STRIVE
                </p>
                <p className="text-slate-400 lg:text-lg xl:text-sm text-lg font-bold uppercase leading-none tracking-widest">
                  Speed • Trustworthiness • Reliable • Innovative Creative • Excellence
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};