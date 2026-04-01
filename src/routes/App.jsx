import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Dashboard } from "../pages/Dashboard";
import { Features } from "../pages/Features";
import { CoreServices } from "../pages/CoreServices";
import { TrainingCenter } from "../pages/TrainingCenter";
import { VisionMission } from "../pages/VisionMission";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    /* mode="wait" sangat krusial untuk mencegah glitch tumpang tindih */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<CoreServices />} />
        <Route path="/training" element={<TrainingCenter />} />
        <Route path="/vision-mission" element={<VisionMission />} />
      </Routes>
    </AnimatePresence>
  );
};

export const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};