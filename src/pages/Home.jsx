import React from "react";
import { useState } from "react";
// import "./App.css";
import Navbar from "../components/Navbar"
import MainContainer from "../components/MainContainer"
import CreateContainer from "../components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-slate-50">
        <Navbar />

        <main className="mt-24 p-8 w-full bg-slate-200">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default Home;
