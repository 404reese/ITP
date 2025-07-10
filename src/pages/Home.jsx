import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import Solutions from "../components/Solutions";
import BrandCarousel from "./../components/BrandCarousel";
import plcScada from "../assets/plc.png";
import automationServices from "../assets/automation.jpeg";
import panelDesign from "../assets/paneld.png";
import solarSolutions from "../assets/solar.jpeg";
import detailEngineering from "../assets/detail.jpeg";
import tradeBasket1 from "../assets/trade1.jpg";
import tradeBasket2 from "../assets/trade2.jpeg";
import generators from "../assets/generators.jpeg";

const offerings = [
  {
    title: "PLC/SCADA/DCS Systems",
    image: plcScada,
    points: [
      "Process Automation",
      "Sewage & Water Treatment",
      "Machine Automation",
      "Automobile",
      "Conveyor Systems",
    ],
  },
  {
    title: "Automation Services",
    image: automationServices,
    points: [
      "System Commissioning",
      "Annual Maintenance",
      "Electrical Works",
      "Site Erection Activity",
    ],
  },
  {
    title: "Panel Designing",
    image: panelDesign,
    points: [
      "PLC Control Panel",
      "Power Distribution Panel",
      "Motor Control Centre",
    ],
  },
  {
    title: "Solar Solutions",
    image: solarSolutions,
    points: ["Solar Roof Top Solutions", "Solar Street Lights", "Solar Panels"],
  },
  {
    title: "Detail Engineering",
    image: detailEngineering,
    points: [
      "System Designing & Documentation",
      "Updating Documents for Existing Systems",
    ],
  },
  {
    title: "Trade Basket (I)",
    image: tradeBasket1,
    points: [
      "PLC, HMI, SCADA, etc.",
      "Switchgears",
      "Sensors & Field Instruments",
    ],
  },
  {
    title: "Trade Basket (II)",
    image: tradeBasket2,
    points: [
      "Control Valves, Manual Valves, PRV",
      "PRS Station",
      "Transmitters",
    ],
  },
  {
    title: "Generators",
    image: generators,
    points: ["Sales, Service & Spares for All Types of Diesel Generating Sets"],
  },
];

const Home = () => {
  return (
    <>
      <CarouselComponent />
      <section className="w-full py-16 px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">Our Offerings</h2>
          <p className="text-gray-800 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            We strive to offer a comprehensive range of automation services,
            product expertise, and reliable technical support to help industries
            optimize performance and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-start hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-4 text-center">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-contain rounded-md mb-4"
              />
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1.5">
                {item.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Solutions />
      <BrandCarousel />
    </>
  );
};

export default Home;
