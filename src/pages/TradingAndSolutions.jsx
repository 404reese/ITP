import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import ball_valve from "../assets/ball-valve.jpg";
import butterfly_valve from "../assets/butterfly-valve.jpg";
import check_valve from "../assets/check-valve.jpg";
import gate_valve from "../assets/gate-valve.jpg";
import globe_valve from "../assets/globe-valve.jpg";
import needle_valve from "../assets/needle-valve.jpg";
import plug_valve from "../assets/plug-valve.jpg";
import pinch_valve from "../assets/pinch-valve.jpg";
import pressure_relief_valve from "../assets/pressure-relief-valve.jpg";
import knife_gate_valve from "../assets/knife-gate-valve.jpg";
import pressure_transmitter from "../assets/pressure-transmitter.jpg";
import level_transmitter from "../assets/level-transmitter.jpg";
import temperature_transmitter from "../assets/temperature-transmitter.jpg";
import flow_transmitter from "../assets/flow-transmitter.jpg";
import tsbanner from "../assets/tsbanner.jpg";
import Form from "../components/Form";

const valves = [
  {
    name: "Ball Valve",
    image: ball_valve,
    description:
      "Equipped with quick-acting 90-degree turn handles, these valves use a ball to control flow for easy on-off control.",
  },
  {
    name: "Butterfly Valve",
    image: butterfly_valve,
    description:
      "A compact, quick-acting rotary motion valve ideal for tight spaces thanks to its wafer-type design.",
  },
  {
    name: "Check Valve",
    image: check_valve,
    description:
      "Used to prevent backflow, these valves automatically open when media flows in the intended direction.",
  },
  {
    name: "Gate Valve",
    image: gate_valve,
    description:
      "Commonly used for start-stop control. These valves use linear motion and are not for flow regulation.",
  },
  {
    name: "Knife Gate Valve",
    image: knife_gate_valve,
    description:
      "Ideal for media with solids, featuring a thin gate that cuts through material to create a seal.",
  },
  {
    name: "Globe Valve",
    image: globe_valve,
    description:
      "Typically applied in modulating control operations, available in T-body, Y-Pattern, and Angle body types.",
  },
  {
    name: "Needle Valve",
    image: needle_valve,
    description:
      "Used in small diameter piping systems for fine, accurate flow control, named after its conical disc.",
  },
  {
    name: "Pinch Valve",
    image: pinch_valve,
    description:
      "Handles solid materials, slurries, and liquids with suspended solids using a linear motion.",
  },
  {
    name: "Plug Valve",
    image: plug_valve,
    description:
      "Provides excellent shutoff in high-pressure or high-temperature environments using a quarter-turn plug.",
  },
  {
    name: "Pressure Relief Valve",
    image: pressure_relief_valve,
    description:
      "Spring-automated valve that helps return a system to normal pressure during overpressure events.",
  },
];

const transmitters = [
  {
    name: "Pressure Transmitter",
    image: pressure_transmitter,
    description:
      "Used to measure fluid or gas pressure in industrial applications, converting pressure into an electrical signal.",
  },
  {
    name: "Flow Transmitter",
    image: flow_transmitter,
    description:
      "Monitors and transmits real-time data on fluid flow rates, essential for industrial process control.",
  },
  {
    name: "Temperature Transmitter",
    image: temperature_transmitter,
    description:
      "Converts temperature readings into standardized electrical signals for remote monitoring.",
  },
  {
    name: "Level Transmitter",
    image: level_transmitter,
    description:
      "Measures the level of liquids or solids in tanks and sends real-time data for automated control.",
  },
];

const TradingAndSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(valves.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleValves = valves.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex flex-col justify-center items-center text-white shadow-lg"
        style={{ backgroundImage: `url(${tsbanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        <h1 className="relative z-10 text-4xl font-bold drop-shadow-lg">
          Trading and Solutions
        </h1>
      </div>

      <section className="max-w-5xl mx-auto px-6 md:px-16 py-14 text-lg">
        Discover our{" "}
        <span className="text-blue-600 font-medium">Trading Solutions</span> -
        offering ready stock of products, seamless delivery, and unmatched
        technical support for a hassle-free experience.
      </section>

      {/* Valves Section with Slide Effect */}
      <section className="mt-12 relative">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-8">
          Instrumentation Valves
        </h2>
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4"
              >
                {valves
                  .slice(
                    pageIndex * itemsPerPage,
                    pageIndex * itemsPerPage + itemsPerPage
                  )
                  .map((valve, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
                    >
                      <img
                        className="w-full h-56 object-cover rounded-md"
                        src={valve.image}
                        alt={valve.name}
                      />
                      <h3 className="text-2xl font-bold text-blue-600 mt-4">
                        {valve.name}
                      </h3>
                      <p className="text-gray-700 mt-3">{valve.description}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-full shadow transition"
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-full shadow transition"
          >
            <SlArrowRight />
          </button>
        </div>
      </section>

      {/* Transmitters Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-semibold text-blue-600 text-center">
          Transmitters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-4">
          {transmitters.map((transmitter, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-56 object-cover rounded-md"
                src={transmitter.image}
                alt={transmitter.name}
              />
              <h3 className="text-2xl font-bold text-blue-600 mt-4">
                {transmitter.name}
              </h3>
              <p className="text-gray-700 mt-3">{transmitter.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </div>
  );
};

export default TradingAndSolutions;
