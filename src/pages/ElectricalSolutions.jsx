// import React from "react";
// import { motion } from "framer-motion";
// import banner from "../assets/electrical-banner.jpg"; // Add a suitable image for this

// const ElectricalSolutions = () => {
//   return (
//     <div className="text-gray-800 font-sans">
//       {/* Hero Banner */}
//       <div
//         className="relative h-[50vh] w-full overflow-hidden"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-4xl">
//             Customized Electrical Solutions
//           </h1>
//         </div>
//       </div>

//       {/* Introduction */}
//       <section className="max-w-6xl mx-auto px-6 py-16 text-justify text-lg leading-relaxed">
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-gray-700"
//         >
//           We specialize in delivering high-quality, customized{" "}
//           <span className="text-blue-700 font-semibold">
//             electrical panel solutions
//           </span>
//           to meet diverse customer requirements. Our product range includes{" "}
//           <span className="text-blue-700 font-semibold">Automation Panels</span>
//           , <span className="text-blue-700 font-semibold">Power Panels</span>,{" "}
//           <span className="text-blue-700 font-semibold">Drive Panels</span>,{" "}
//           <span className="text-blue-700 font-semibold">PCC</span>, and{" "}
//           <span className="text-blue-700 font-semibold">MCC Panels</span>
//           —engineered with precision for both indoor and outdoor applications.
//           Designed in line with{" "}
//           <span className="text-blue-700 font-semibold">
//             global best practices
//           </span>
//           , our panels offer ingress protection up to{" "}
//           <span className="text-blue-700 font-semibold">IP66/NEMA 4X</span> and
//           fully comply with{" "}
//           <span className="text-blue-700 font-semibold">IEC</span> and{" "}
//           <span className="text-blue-700 font-semibold">NEMA standards</span>.
//         </motion.p>
//       </section>

//       {/* Solution Categories */}
//       <section className="bg-gray-100 py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-12 text-blue-600">
//             Our Electrical Offerings
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
//             {[
//               {
//                 title: "Panels",
//                 desc: "Includes Automation, Drive, Power, PCC, and MCC Panels built for efficiency, safety, and long-term reliability.",
//               },
//               {
//                 title: "Special Purpose Machines",
//                 desc: "Custom-built electrical systems integrated with control logic to power specialized machinery. (See page 11)",
//               },
//               {
//                 title: "HV/LT Power Distribution Systems",
//                 desc: "High-voltage and low-tension systems designed for optimized power flow and load safety. (See page 13)",
//               },
//               {
//                 title: "Fire Alarm Systems",
//                 desc: "Integrated electrical systems for early fire detection and alerting. Compliant with modern safety standards. (See page 13)",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed text-justify">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ElectricalSolutions;

import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/electrical-banner.jpg";
import panelImg from "../assets/panel.jpg";
import specialImg from "../assets/electrical.jpg";
import powerImg from "../assets/power.jpeg";
import fireImg from "../assets/fire.webp";
import Form from "../components/Form";

const offerings = [
  {
    title: "Panels",
    image: panelImg,
    desc: `We specialize in delivering high-quality, customized electrical panel solutions to meet diverse customer requirements. Our product range includes **Automation Panels**, **Power Panels**, **Drive Panels**, **PCC**, and **MCC Panels**—engineered with precision for both indoor and outdoor applications. Designed in line with global best practices, our panels offer ingress protection up to **IP66/NEMA 4X** and fully comply with **IEC and NEMA standards**.`,
  },
  {
    title: "Special Purpose Machines",
    image: specialImg,
    desc: `At India Tech Projects, our engineers are experts in **motion control solutions** and **component integration**. With **20+ years** of mechatronics experience, our team guides you to the best motion system solutions—from hardware to turnkey automation systems.

Our expertise includes:
• Application Engineering
• Application Software Development
• Electrical Design
• Custom Servo Motor Cables
• System Commissioning
• Panel Fabrication
• On-Site and Online Support`,
  },
  {
    title: "HV/LT Power Distribution Systems",
    image: powerImg,
    desc: `ITP offers transformer solutions for **utility, industrial, commercial, and residential** markets—known for robust designs and high performance in demanding environments.

We provide:
• Generator Transformers
• Power Transformers
• Shunt Reactors
• HVDC & Special Transformers
• Traction Transformers

With **lifecycle support** including repair, overhaul, and modernization—risk is minimized through **oil quality control**, **moisture management**, and **fault detection**.`,
  },
  {
    title: "Fire Alarm Systems",
    image: fireImg,
    desc: `Ensuring safety through quick and reliable fire detection, our systems (**smoke, gas, heat detectors, control panels, sirens**) protect lives and assets in homes, offices, medical centers, and public facilities.

Features:
• **Early fire/gas leak detection**
• **Siren/lighting alerts**
• **Evacuation assistance**
• **Scalable** for both small and multi-building sites`,
  },
];

const ElectricalSolutions = () => {
  return (
    <div className="pt-0 text-gray-800 font-sans">
      {/* Banner */}
      <div
        className="relative h-[260px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-5xl font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] text-center"
        >
          Electrical Engineering Solutions
        </motion.h1>
      </div>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-14">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700 text-justify leading-relaxed"
        >
          We provide{" "}
          <span className="text-blue-600 font-medium">
            robust and tailored electrical engineering solutions
          </span>{" "}
          backed by decades of hands-on experience, global standards, and
          best-in-class technology to power your business and protect your
          assets.
        </motion.p>
      </section>

      {/* Offerings */}
      <section className="bg-gray-100 px-6 md:px-16 py-16 space-y-16">
        {[0, 2].map((startIndex) => (
          <div
            key={startIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {offerings.slice(startIndex, startIndex + 2).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-0 overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p
                    className="text-gray-700 text-justify whitespace-pre-line leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.desc.replace(
                        /\*\*(.*?)\*\*/g,
                        '<span class="text-blue-600 font-medium">$1</span>'
                      ),
                    }}
                  ></p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </section>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </div>
  );
};

export default ElectricalSolutions;
