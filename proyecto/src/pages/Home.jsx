// src/pages/Home.js
import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* NAVBAR Sticky debajo del header */}
      <div className="sticky top-[60px] z-40 bg-white shadow-sm">
        <Navbar />
      </div>
      
      <h1 className="text-center text-3xl mt-8">Página de Inicio</h1>
      <Carousel /> {/* El carrusel se mostrará aquí */}
    </div>
  );
}
