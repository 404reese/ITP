// import React from "react";
// import { motion } from "framer-motion";
// import industry from "../assets/industry.jpg"; // Replace with actual images
// import cybersecurity from "../assets/cybersecurity.jpg";
// import dashboard from "../assets/dashboard.jpg";
// import ml from "../assets/machine-learning.jpg";
// import alarm from "../assets/alarm.jpg";
// import building from "../assets/smart-building.jpg";
// import banner from "../assets/software-banner.jpg"; // Banner image

// const sectors = [
//   {
//     id: "industrial-it",
//     name: "Industrial IT / Industry 4.0",
//     img: industry,
//     description:
//       "Industrial IT involves integrating Information Technology into manufacturing processes to enhance automation, improve monitoring, and enable real-time data analysis. It includes technologies like SCADA systems, PLCs, sensor networks, and industrial software solutions. With Industry 4.0, India Tech Projects enables smart factories that are interconnected, data-driven, and capable of predictive maintenance, improving efficiency and reducing downtime across global operations.",
//   },
//   {
//     id: "cybersecurity",
//     name: "OT Cybersecurity & Disaster Recovery",
//     img: cybersecurity,
//     description:
//       "Operational Technology (OT) environments are increasingly exposed to cyber threats due to increased connectivity. India Tech Projects implements a layered defense approach with firewalls, intrusion detection systems, and encrypted communication to secure control systems and production lines. Our disaster recovery solutions ensure business continuity through data backups, failover systems, and rapid recovery protocols tailored to mission-critical industrial systems.",
//   },
//   {
//     id: "dashboards",
//     name: "Reporting, Dashboards & Analysis",
//     img: dashboard,
//     description:
//       "India Tech Projects provides highly customizable dashboards that convert raw industrial data into actionable insights. These platforms support real-time monitoring of KPIs, historical data trend analysis, and reporting for decision-making. Our systems are optimized for large-scale operations with multi-site visibility, customizable alerts, and mobile-friendly interfaces, enabling stakeholders to make timely, informed decisions from anywhere.",
//   },
//   {
//     id: "machine-learning",
//     name: "Industrial Machine Learning & IIOT",
//     img: ml,
//     description:
//       "Our IIoT and ML-powered solutions collect, analyze, and act on data from machines, sensors, and controllers. India Tech Projects deploys edge and cloud analytics for predictive maintenance, anomaly detection, and process optimization. By identifying inefficiencies and predicting failures before they occur, we help industries enhance productivity, reduce operational costs, and achieve greater sustainability through intelligent automation.",
//   },
//   {
//     id: "alarm-solutions",
//     name: "Alarm Solutions",
//     img: alarm,
//     description:
//       "India Tech Projects’s alarm management system ensures immediate awareness and quick response to critical events. It supports smart escalation paths, redundant delivery methods (SMS, app, email, and voice), and seamless integration with control systems. Advanced logging and analytics tools help prevent alarm fatigue, ensure compliance with safety standards, and maintain audit trails for incident reviews and root cause analysis.",
//   },
//   {
//     id: "smart-buildings",
//     name: "Smart Buildings",
//     img: building,
//     description:
//       "India Tech Projects delivers intelligent building management systems that control HVAC, lighting, access, and energy consumption through a centralized platform. With AI-driven automation and IoT integration, our solutions enable reduced operational costs, improved occupant comfort, and measurable environmental impact. Our smart buildings offer scalable architecture suitable for industrial campuses, commercial offices, and tech parks.",
//   },
// ];

// const DigitalManufacturingSolutions = () => {
//   return (
//     <div className="pt-0">
//       {/* Banner */}
//       <div
//         className="relative h-[260px] bg-cover bg-center flex items-center justify-center "
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-white text-4xl md:text-5xl font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] text-center"
//         >
//           Digital Manufacturing Solutions
//         </motion.h1>
//       </div>

//       {/* Sector Sections */}
//       <div className="px-6 md:px-16 py-12 space-y-20">
//         {sectors.map((sector, index) => (
//           <motion.div
//             key={sector.id}
//             id={sector.id}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6 }}
//             className={`flex flex-col md:flex-row items-start gap-6 group ${
//               index % 2 !== 0 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             <img
//               src={sector.img}
//               alt={sector.name}
//               className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105"
//             />
//             <div className="md:w-1/2">
//               <h2 className="text-3xl font-bold mb-4 text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
//                 {sector.name}
//               </h2>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 {sector.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalManufacturingSolutions;

import React from "react";
import { motion } from "framer-motion";
import industry from "../assets/industry.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import dashboard from "../assets/dashboard.jpg";
import ml from "../assets/machine-learning.jpg";
import alarm from "../assets/alarm.jpg";
import building from "../assets/smart-building.jpg";
import banner from "../assets/software-banner.jpg";
import Form from "../components/Form";

const sectors = [
  {
    id: "industrial-it",
    name: "Industrial IT / Industry 4.0",
    img: industry,
    description:
      "Industrial IT involves integrating Information Technology into manufacturing processes to enhance automation, improve monitoring, and enable real-time data analysis. It includes technologies like SCADA systems, PLCs, sensor networks, and industrial software solutions. With Industry 4.0, India Tech Projects enables smart factories that are interconnected, data-driven, and capable of predictive maintenance, improving efficiency and reducing downtime across global operations.",
  },
  {
    id: "cybersecurity",
    name: "OT Cybersecurity & Disaster Recovery",
    img: cybersecurity,
    description:
      "Operational Technology (OT) environments are increasingly exposed to cyber threats due to increased connectivity. India Tech Projects implements a layered defense approach with firewalls, intrusion detection systems, and encrypted communication to secure control systems and production lines. Our disaster recovery solutions ensure business continuity through data backups, failover systems, and rapid recovery protocols tailored to mission-critical industrial systems.",
  },
  {
    id: "dashboards",
    name: "Reporting, Dashboards & Analysis",
    img: dashboard,
    description:
      "India Tech Projects provides highly customizable dashboards that convert raw industrial data into actionable insights. These platforms support real-time monitoring of KPIs, historical data trend analysis, and reporting for decision-making. Our systems are optimized for large-scale operations with multi-site visibility, customizable alerts, and mobile-friendly interfaces, enabling stakeholders to make timely, informed decisions from anywhere.",
  },
  {
    id: "machine-learning",
    name: "Industrial Machine Learning & IIOT",
    img: ml,
    description:
      "Our IIoT and ML-powered solutions collect, analyze, and act on data from machines, sensors, and controllers. India Tech Projects deploys edge and cloud analytics for predictive maintenance, anomaly detection, and process optimization. By identifying inefficiencies and predicting failures before they occur, we help industries enhance productivity, reduce operational costs, and achieve greater sustainability through intelligent automation.",
  },
  {
    id: "alarm-solutions",
    name: "Alarm Solutions",
    img: alarm,
    description:
      "India Tech Projects’s alarm management system ensures immediate awareness and quick response to critical events. It supports smart escalation paths, redundant delivery methods (SMS, app, email, and voice), and seamless integration with control systems. Advanced logging and analytics tools help prevent alarm fatigue, ensure compliance with safety standards, and maintain audit trails for incident reviews and root cause analysis.",
  },
  {
    id: "smart-buildings",
    name: "Smart Buildings",
    img: building,
    description:
      "India Tech Projects delivers intelligent building management systems that control HVAC, lighting, access, and energy consumption through a centralized platform. With AI-driven automation and IoT integration, our solutions enable reduced operational costs, improved occupant comfort, and measurable environmental impact. Our smart buildings offer scalable architecture suitable for industrial campuses, commercial offices, and tech parks.",
  },
];

const DigitalManufacturingSolutions = () => {
  return (
    <div className="pt-0">
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
          Digital Manufacturing Solutions
        </motion.h1>
      </div>

      {/* Sector Sections */}
      <div className="px-6 md:px-16 py-12 space-y-20">
        {sectors.map((sector, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={sector.id}
              id={sector.id}
              initial={{ opacity: 0, x: isEven ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-start gap-6 group`}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                  {sector.name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {sector.description}
                </p>
              </div>
              <img
                src={sector.img}
                alt={sector.name}
                className="w-full md:w-1/2 h-[250px] object-cover rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105"
              />
            </motion.div>
          );
        })}
      </div>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </div>
  );
};

export default DigitalManufacturingSolutions;
