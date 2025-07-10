// import React from "react";
// import { motion } from "framer-motion";
// import industrialImg1 from "../assets/industrial1.jpg";
// import industrialImg2 from "../assets/industrial2.jpg";
// import industrialImg3 from "../assets/industrial3.jpg";
// import industrialImg4 from "../assets/industrial4.jpg";
// import industrialImg5 from "../assets/industrial5.jpg";
// import banner from "../assets/banner.jpg";

// const industries = [
//   {
//     title: "Chemicals & Fertilizers",
//     image: industrialImg1,
//     description:
//       "A challenging sector like the Chemical and Fertilizer industry with all its hazardous and toxic chemicals requires customized solutions, tailor-made to suit the needs of the process controls while maintaining the highest standards of safety. Using robust technology of Rockwell Automation batch and process control systems like PlantPAx DCS and other PLCs, India Tech Projects provides best solutions for complete automation packages for various applications like Chemical Conversion Reactors, Distillations, Filtrations, Crystallizers and many more. Customized recipe management while maintaining various standards such as ISA–S88, ISA-18.2, ISA-101, and ISA-61511 has led to high paybacks as well as Risk Reduction within the chemical industries.",
//   },
//   {
//     title: "Life Science / Pharma",
//     image: industrialImg2,
//     description:
//       "With the growing and stringent regulatory requirements, it is the need of the hour to implement complete automation and technology-driven processes to mitigate the risks, thus achieving cost efficiency. India Tech Projects ensures that its customers have a competitive edge using Rockwell Automation with flexibility, cost and time efficiency, minimal lead time to market for their products, and complying with all regulatory compliance. India Tech Projects solutions are an integral part of the execution of projects within life sciences industries where compliance with FDA/EMEA/Schedule M/WHO GMP regulations, including the implementation of 21 CFR Part 11 for various applications including solvent charging, reactor controls, solvent recovery, Phase separations, ATFD, sterilization is essential, making it the most suitable partner for your automation needs.",
//   },
//   {
//     title: "Oil & Gas",
//     image: industrialImg3,
//     description:
//       "Oil and Gas, a vital part of the international economy, is a comprehensive sector with a wide range of operations. India Tech Projects has been extensively working on offshore platforms for various automation applications, including water injection systems sub-units like chlorination, filters, deoxygenation tower & main ejection pumps. India Tech Projects, with its technology partner Rockwell Automation provides industrial control products and remote monitoring solutions designed especially for hazardous areas to ensure safe, reliable, and efficient operation both offshore and onshore.",
//   },
//   {
//     title: "Food & Beverages",
//     image: industrialImg4,
//     description:
//       "Maintain the taste and nutritional value of your food with Rockwell’s smart manufacturing systems that also enhance productivity, consistency, and overall quality at your facility. Take advantage of this revolutionary technology that improves machine efficiency, helps you plan downtime, and maintain FSSAI standards. India Tech Projects has a proven record of working with ultrafiltration, evaporators (single & multistage), pasteurization, sterilizer, homogenization, dryers, distillations, filling, and packaging systems.",
//   },
//   {
//     title: "Water & Wastewater Management",
//     image: industrialImg5,
//     description:
//       "The rise in the need for sustainable development has increased the pressure on the existing infrastructure of fresh and wastewater management operations. Maximize productivity while maintaining strict government norms and rigorous water quality standards of water management operations with Rockwell’s cutting-edge systems. Intelligent motor control and remote monitoring systems make your plant energy efficient and secure.",
//   },
// ];

// const IndustrialAutomation = () => {
//   return (
//     <div className="bg-gray-50">
//       {/* Banner Section */}
//       <div
//         className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <div className="absolute inset-0"></div>
//         <h1 className="relative text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-lg">
//           Industrial Automation Solutions
//         </h1>
//       </div>

//       {/* Description Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto text-center py-12 px-6"
//       >
//         <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
//           India Tech Projects specializes in industrial automation, offering
//           comprehensive control system integration services. Their expertise
//           includes{" "}
//           <span className="font-semibold text-blue-600">
//             {" "}
//             Control System Design
//           </span>
//           ,{" "}
//           <span className="font-semibold text-blue-600">
//             {" "}
//             PLC/DCS/SCADA Programming
//           </span>
//           ,{" "}
//           <span className="font-semibold text-blue-600">
//             {" "}
//             Control Panel Engineering
//           </span>
//           , <span className="font-semibold text-blue-600"> Validation</span>,
//           and{" "}
//           <span className="font-semibold text-blue-600">
//             {" "}
//             Commissioning & Training
//           </span>
//           . They provide tailored engineering and management solutions, covering{" "}
//           <span className="font-semibold text-blue-600">
//             {" "}
//             software development
//           </span>{" "}
//           (PLC, DCS, SCADA, Historian, and Custom Software), control panel
//           wiring, system start-up, testing, validation, and documentation. With
//           a focus on detail, India Tech Projects ensures a seamless,{" "}
//           <span className="font-semibold text-blue-600">
//             {" "}
//             turnkey automation experience
//           </span>{" "}
//           from start to finish.
//         </p>
//       </motion.div>

//       {/* Industries Section */}
//       <div className="max-w-6xl mx-auto py-16 px-6 space-y-20">
//         {industries.map((industry, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 gap-10 items-center"
//           >
//             <motion.img
//               whileHover={{ scale: 1.05 }}
//               src={industry.image}
//               alt={industry.title}
//               className={`w-full h-72 sm:h-80 object-cover rounded-lg shadow-xl transition-transform duration-300 ${
//                 index % 2 === 0 ? "md:order-last" : ""
//               }`}
//             />

//             <div
//               className={`text-gray-800 text-base sm:text-lg leading-relaxed space-y-4 ${
//                 index % 2 === 0 ? "text-left" : "md:text-right"
//               }`}
//             >
//               <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
//                 {industry.title}
//               </h2>
//               <p>{industry.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndustrialAutomation;

import React from "react";
import { motion } from "framer-motion";
import industrialImg1 from "../assets/industrial1.jpg";
import industrialImg2 from "../assets/industrial2.jpg";
import industrialImg3 from "../assets/industrial3.jpg";
import industrialImg4 from "../assets/industrial4.jpg";
import industrialImg5 from "../assets/industrial5.jpg";
import banner from "../assets/banner.jpg";
import Form from "./../components/Form";

const industries = [
  {
    title: "Chemicals & Fertilizers",
    image: industrialImg1,
    description:
      "A challenging sector like the Chemical and Fertilizer industry with all its hazardous and toxic chemicals requires customized solutions, tailor-made to suit the needs of the process controls while maintaining the highest standards of safety. Using robust technology of Rockwell Automation batch and process control systems like PlantPAx DCS and other PLCs, India Tech Projects provides best solutions for complete automation packages for various applications like Chemical Conversion Reactors, Distillations, Filtrations, Crystallizers and many more. Customized recipe management while maintaining various standards such as ISA–S88, ISA-18.2, ISA-101, and ISA-61511 has led to high paybacks as well as Risk Reduction within the chemical industries.",
  },
  {
    title: "Life Science / Pharma",
    image: industrialImg2,
    description:
      "With the growing and stringent regulatory requirements, it is the need of the hour to implement complete automation and technology-driven processes to mitigate the risks, thus achieving cost efficiency. India Tech Projects ensures that its customers have a competitive edge using Rockwell Automation with flexibility, cost and time efficiency, minimal lead time to market for their products, and complying with all regulatory compliance. India Tech Projects solutions are an integral part of the execution of projects within life sciences industries where compliance with FDA/EMEA/Schedule M/WHO GMP regulations, including the implementation of 21 CFR Part 11 for various applications including solvent charging, reactor controls, solvent recovery, Phase separations, ATFD, sterilization is essential, making it the most suitable partner for your automation needs.",
  },
  {
    title: "Oil & Gas",
    image: industrialImg3,
    description:
      "Oil and Gas, a vital part of the international economy, is a comprehensive sector with a wide range of operations. India Tech Projects has been extensively working on offshore platforms for various automation applications, including water injection systems sub-units like chlorination, filters, deoxygenation tower & main ejection pumps. India Tech Projects, with its technology partner Rockwell Automation provides industrial control products and remote monitoring solutions designed especially for hazardous areas to ensure safe, reliable, and efficient operation both offshore and onshore.",
  },
  {
    title: "Food & Beverages",
    image: industrialImg4,
    description:
      "Maintain the taste and nutritional value of your food with Rockwell’s smart manufacturing systems that also enhance productivity, consistency, and overall quality at your facility. Take advantage of this revolutionary technology that improves machine efficiency, helps you plan downtime, and maintain FSSAI standards. India Tech Projects has a proven record of working with ultrafiltration, evaporators (single & multistage), pasteurization, sterilizer, homogenization, dryers, distillations, filling, and packaging systems.",
  },
  {
    title: "Water & Wastewater Management",
    image: industrialImg5,
    description:
      "The rise in the need for sustainable development has increased the pressure on the existing infrastructure of fresh and wastewater management operations. Maximize productivity while maintaining strict government norms and rigorous water quality standards of water management operations with Rockwell’s cutting-edge systems. Intelligent motor control and remote monitoring systems make your plant energy efficient and secure.",
  },
];

const IndustrialAutomation = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0"></div>
        <h1 className="relative text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-lg">
          Industrial Automation Solutions
        </h1>
      </div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center py-12 px-6"
      >
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
          India Tech Projects specializes in industrial automation, offering
          comprehensive control system integration services. Their expertise
          includes{" "}
          <span className="font-semibold text-blue-600">
            Control System Design
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600">
            PLC/DCS/SCADA Programming
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600">
            Control Panel Engineering
          </span>
          , <span className="font-semibold text-blue-600">Validation</span>, and{" "}
          <span className="font-semibold text-blue-600">
            Commissioning & Training
          </span>
          . They provide tailored engineering and management solutions, covering{" "}
          <span className="font-semibold text-blue-600">
            software development
          </span>{" "}
          (PLC, DCS, SCADA, Historian, and Custom Software), control panel
          wiring, system start-up, testing, validation, and documentation. With
          a focus on detail, India Tech Projects ensures a seamless,{" "}
          <span className="font-semibold text-blue-600">
            turnkey automation experience
          </span>{" "}
          from start to finish.
        </p>
      </motion.div>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </div>
  );
};

export default IndustrialAutomation;
