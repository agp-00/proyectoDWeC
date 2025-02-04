import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Contenedor del Header y Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="sticky top-[60px] z-40 bg-white shadow-sm">
        <Navbar />
      </div>

      {/* Contenedor principal que ocupa el espacio restante */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl mt-8 h-16">Bienvenido a BaleArt</h1>
        <Carousel /> {/* Carrusel */}
      </div>
    </div>
  );
}

