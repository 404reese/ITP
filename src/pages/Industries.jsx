// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import water from "../assets/industries-water.jpg";
// import banner from "../assets/industries-banner.jpg";
// import food from "../assets/industries-food.jpg";
// import life from "../assets/industries-life.jpg";
// import marine from "../assets/industries-marine.jpg";
// import oil from "../assets/industries-oil.jpg";
// import metals from "../assets/industries-metals.jpg";

// const sectors = [
//   {
//     id: "water-power-utilities",
//     name: "Water & Power Utilities",
//     img: water,
//     description:
//       "Water and power have emerged as critical global challenges, largely driven by rapid industrialization and a surging population. This escalating demand is expected to surpass supply in the coming decade, urging scientists and governments to explore robust and effective resource management strategies. A comprehensive technological revamp of water and power management—covering collection, storage, and distribution—is now essential. In response, modern power, water, and wastewater infrastructures demand highly efficient operational technologies. Various advanced solutions are being adopted to ensure operational excellence in these sectors. Key strategies include condition-based monitoring and predictive maintenance of assets, advanced SCADA systems for visualization, and remote monitoring. Enterprise dashboards enhance oversight of remote facilities, while centralized version control, automatic backups, and strict OT security standards (ISA 62443) boost system reliability and compliance. Furthermore, alarm management follows industry protocols such as ISA 18.1, 18.2, and EEMUA, ensuring timely escalation and issue resolution.",
//   },
//   {
//     id: "energy",
//     name: "Energy",
//     img: oil,
//     description:
//       "The energy sector is undergoing a major transformation through the adoption of advanced digital technologies, which are enhancing connectivity, simplifying operations, and prioritizing safety across the oil and gas value chain. In particular, digitalization of upstream drilling processes is emerging as a high-growth area that can substantially boost production. Advanced operational technology (OT) solutions are being deployed across the upstream, midstream, and downstream sectors, addressing critical areas such as tank farms, refining, and pipelines. By enabling condition-based monitoring, predictive maintenance, and advanced SCADA for visualization, these solutions act as catalysts for business transformation—enhancing automation, efficiency, and sustainability. Remote monitoring and enterprise dashboards allow real-time oversight of remote assets and treatment plants, while centralized version control, automated backups, and compliance with ISA 62443 ensure robust OT security and operational continuity. Additionally, alarm management and escalation practices conforming to ISA 18.1, 18.2, and EEMUA standards further strengthen the reliability and responsiveness of oil and gas operations",
//   },
//   {
//     id: "life-sciences",
//     name: "Life-sciences",
//     img: life,
//     description:
//       "The pharmaceutical sector is undergoing a major digital transformation, leveraging technologies such as autonomous systems, robotics, and advanced computing to modernize manufacturing and logistics operations. This shift is reshaping production processes, distribution networks, inventory management, and the overall pharmaceutical supply chain. As smart, self-regulating factories become more common, manufacturers are gaining greater flexibility and agility in their operations. Facing increased pressure to maximize capacity utilization, reduce cycle times, and comply with stringent regulatory requirements, life sciences organizations are adopting cutting-edge operational technologies to meet these demands. Key solutions include manufacturing operations management (MOM/MES), production planning and scheduling, automated data analysis and reporting, and advanced SCADA systems for real-time visualization. Enterprise dashboards offer centralized insights into operations, while features like version control, automatic backups, and OT security (aligned with ISA 62443 standards) enhance reliability and compliance. Additionally, alarm management and escalation protocols based on ISA and EEMUA standards help improve responsiveness and overall manufacturing efficiency.",
//   },
//   {
//     id: "food-beverage",
//     name: "Food & Beverage",
//     img: food,
//     description:
//       "The food and beverage sector is rapidly embracing digital advancements to drive productivity, ensure quality, and reduce waste throughout the production lifecycle—from source to shelf. To remain competitive and meet growing efficiency demands, businesses in this space are re-evaluating their operations and adopting smarter technologies. Modern solutions are enabling manufacturers to streamline processes, improve product consistency, and enhance food safety standards while optimizing both cost and output. Among the most impactful tools are manufacturing operations management (MOM/MES), automated data analysis and reporting, and intelligent planning and scheduling systems for production lines. Advanced SCADA solutions offer real-time visualization and monitoring, while enterprise dashboards provide centralized insights across facilities. Operational reliability is further reinforced through centralized version control, automated system backups, and OT security aligned with ISA 62443 standards. Alarm management and escalation frameworks, following ISA and EEMUA protocols, ensure timely interventions and minimize operational disruptions—ultimately supporting sustainable growth and better overall performance.",
//   },
//   {
//     id: "metals-mining",
//     name: "Metals & Mining",
//     img: metals,
//     description:
//       "As global demand continues to rise, the metals and mining industry is being pushed to modernize in order to improve efficiency, reduce costs, and support sustainable growth. In response, the sector is rapidly adopting advanced technologies that promote automation, minimize on-site workforce requirements, and enable smarter planning and forecasting. Through the integration of automated quality checks and operator rounds, AI-driven predictive maintenance, and intelligent data analysis and reporting, mining and metal operations are becoming more streamlined and resilient. Advanced SCADA systems offer enhanced visualization and control, while enterprise dashboards ensure real-time monitoring and centralized operational insight. Furthermore, structured alarm management and escalation processes, aligned with ISA 18.1, 18.2, and EEMUA standards, strengthen system responsiveness and reliability, paving the way for safer and more productive industrial environments.",
//   },
//   {
//     id: "maritime-shipping",
//     name: "Maritime & Shipping",
//     img: marine,
//     description:
//       "The maritime and shipping industry is undergoing rapid digital transformation, with vessels across the globe being outfitted with cutting-edge technologies, sensors, and intelligent software systems. The primary focus is on enhancing efficiency, reducing costs, and ensuring reliable operations with minimal human intervention. With the integration of AI-driven predictive maintenance and automated data analysis, ship operators can proactively address issues before they escalate, thus minimizing downtime and optimizing vessel performance. Advanced SCADA systems provide real-time visualization and control, while enterprise interactive dashboards offer centralized operational insights across fleets. Additionally, HMI display panels certified for marine environments (including DNV certifications) ensure robust and compliant onboard monitoring—supporting smarter, safer, and more autonomous maritime operations.",
//   },
// ];

// const Industries = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const hash = location.pathname.split("/industries/")[1];
//     if (hash) {
//       const element = document.getElementById(hash);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   return (
//     <div className="pt-0">
//       {/* Banner */}
//       <div
//         className="relative h-[320px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl"
//         >
//           Industries We Serve
//         </motion.h1>
//       </div>

//       {/* Sector Sections */}
//       <div className="px-6 md:px-16 py-12 space-y-20">
//         {sectors.map((sector, index) => (
//           <motion.div
//             key={sector.id}
//             id={sector.id}
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col md:flex-row items-start gap-6"
//           >
//             <div className="md:w-1/2 text-left self-stretch flex flex-col justify-center">
//               <h2 className="text-3xl font-bold mb-4 text-blue-800">
//                 {sector.name}
//               </h2>
//               <p className="text-gray-700 text-lg leading-relaxed text-justify">
//                 {sector.description}
//               </p>
//             </div>
//             <img
//               src={sector.img}
//               alt={sector.name}
//               className="w-full md:w-1/2 h-90 object-cover rounded-xl shadow-lg self-stretch mt-12"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import water from "../assets/industries-water.jpg";
import banner from "../assets/industries-banner.jpg";
import food from "../assets/industries-food.jpg";
import life from "../assets/industries-life.jpg";
import marine from "../assets/industries-marine.jpg";
import oil from "../assets/industries-oil.jpg";
import metals from "../assets/industries-metals.jpg";

const sectors = [
  {
    id: "water-power-utilities",
    name: "Water & Power Utilities",
    img: water,
    hardware: `As global demand for water and power surges due to industrial growth and population rise, supply is under pressure. To bridge this gap, modern infrastructure must adopt advanced technologies for efficient resource management.

Key innovations include:

• Predictive maintenance and condition-based monitoring
• Advanced SCADA and remote monitoring systems
• Enterprise dashboards for centralized oversight
• Robust OT security (ISA 62443), version control, and automated backups
• Standards-based alarm management (ISA 18.1, 18.2, EEMUA)

These solutions drive operational excellence and ensure long-term sustainability.`,
    software: `Rising global demand for water and power—driven by industrialization and population growth—is outpacing supply. To meet this challenge, a complete technological upgrade in how we manage these resources is essential.

ITP empowers modern water, power, and wastewater systems with advanced operational technologies that ensure efficiency, safety, and compliance:

• Condition-based monitoring & predictive maintenance
• Advanced SCADA & remote asset monitoring
• Interactive dashboards for centralized control
• Version control, automated backups & OT change management
• OT security aligned with ISA 62443
• Alarm management per ISA 18.1, 18.2 & EEMUA standards

These solutions help utilities and industries achieve operational excellence and long-term sustainability.`,
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    img: food,
    hardware: `The food and beverage sector demands stringent hygiene, quality, and safety standards. Hardware systems must deliver precise process control and uninterrupted production while complying with regulations.

Key innovations include:

• Automated CIP (Clean-in-Place) systems for hygiene assurance
• Process analyzers for quality monitoring
• High-accuracy flow, temperature, and pressure instrumentation
• Robust PLC and SCADA systems for process automation
• Integrated safety systems to protect personnel and equipment

These solutions ensure consistent product quality and production efficiency.`,
    software: `Food and beverage manufacturing requires advanced software systems to manage recipe control, traceability, and compliance with food safety standards.

Key software solutions include:

• Batch management and recipe control systems
• MES integration for production tracking and performance analysis
• Traceability systems for raw materials and finished products
• Alarm management for process safety and quality assurance
• Data historians for compliance and audit readiness

These solutions help manufacturers achieve operational efficiency, product consistency, and regulatory compliance.`,
  },
  {
    id: "life-science",
    name: "Life Science",
    img: life,
    hardware: `Life sciences industries require the highest standards of precision, sterility, and compliance. Hardware solutions ensure process integrity and safety in manufacturing pharmaceuticals and biotech products.

Key innovations include:

• GAMP-compliant PLC and SCADA systems
• Environmental monitoring sensors (temperature, humidity, particulate)
• Precision dosing and flow measurement instrumentation
• Cleanroom automation hardware
• Integrated safety systems for personnel and process protection

These solutions guarantee product quality, patient safety, and regulatory adherence.`,
    software: `Life sciences manufacturing demands validated software systems that ensure product quality, batch consistency, and compliance with strict regulatory requirements.

Key software solutions include:

• Electronic Batch Records (EBR) and MES integration
• SCADA systems with CFR 21 Part 11 compliance
• Data historians for audit trails and regulatory reporting
• Recipe management for batch consistency
• Alarm management systems to ensure process safety

These solutions help life sciences companies maintain quality, compliance, and operational efficiency.`,
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    img: oil,
    hardware: `The oil and gas sector operates in hazardous environments requiring reliable, intrinsically safe hardware systems for continuous production and safety assurance.

Key innovations include:

• Intrinsically safe instrumentation for hazardous areas
• Pipeline monitoring and leak detection sensors
• Remote terminal units (RTUs) for field data acquisition
• High-integrity pressure protection systems (HIPPS)
• Advanced PLC and SCADA systems for process automation

These solutions ensure safe, efficient, and compliant oil & gas operations.`,
    software: `Oil & gas operations rely on advanced software for asset optimization, safety, and regulatory compliance.

Key software solutions include:

• SCADA systems for real-time monitoring and control
• Pipeline management and leak detection applications
• Asset performance management and predictive maintenance
• Alarm management and safety lifecycle software
• Data historians for compliance reporting and analysis

These solutions enhance operational visibility, safety, and profitability.`,
  },
  {
    id: "marine-ports",
    name: "Marine & Ports",
    img: marine,
    hardware: `Marine and port operations require robust and reliable hardware systems that withstand harsh environments while ensuring operational safety and efficiency.

Key innovations include:

• Ruggedized PLCs and SCADA systems for harsh marine conditions
• Advanced radar and vessel traffic management sensors
• Automated mooring and berth monitoring systems
• Shore power management hardware for sustainability
• Integrated safety and emergency shutdown systems

These solutions improve safety, efficiency, and sustainability in marine operations.`,
    software: `Marine and port facilities benefit from advanced software systems for traffic management, asset monitoring, and operational control.

Key software solutions include:

• Vessel Traffic Management Systems (VTMS)
• Terminal Operating Systems (TOS) integration
• SCADA systems for port facility monitoring
• Energy management and shore power control software
• Asset performance and predictive maintenance applications

These solutions optimize port operations, safety, and environmental compliance.`,
  },
  {
    id: "metals-mining",
    name: "Metals & Mining",
    img: metals,
    hardware: `Metals and mining operations involve heavy-duty processes requiring robust hardware for safe, reliable, and efficient production.

Key innovations include:

• Heavy-duty instrumentation for flow, level, and pressure monitoring
• Rugged PLC and SCADA systems for harsh environments
• Conveyor and material handling automation systems
• Condition monitoring sensors for equipment health
• Integrated safety systems for personnel protection

These solutions ensure operational safety, productivity, and equipment longevity.`,
    software: `The metals and mining sector requires software solutions for process optimization, safety, and asset management.

Key software solutions include:

• SCADA systems for plant-wide monitoring and control
• Asset performance management and predictive maintenance
• Production management and MES integration
• Alarm management for operational safety
• Data historians for process analysis and optimization

These solutions enhance productivity, safety, and operational excellence in mining operations.`,
  },
];

const Industries = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.pathname.split("/industries/")[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-0">
      {/* Banner */}
      <div
        className="relative h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl"
        >
          Industries We Serve
        </motion.h1>
      </div>

      <div className="px-6 md:px-16 py-12 space-y-16">
        {sectors.map((sector) => (
          <motion.div
            key={sector.id}
            id={sector.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md space-y-10"
          >
            {/* Sector Title */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
                {sector.name}
              </h1>
              <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Hardware Content */}
              <div className="text-left space-y-2">
                <h2 className="text-2xl font-bold mb-2 text-blue-600 border-b-2 border-blue-300 pb-2">
                  Hardware
                </h2>
                <p className="text-gray-800 whitespace-pre-line text-justify text-base leading-relaxed">
                  {sector.hardware.split("\n").map((line, i) => (
                    <span key={i}>
                      {line.includes("•") ? (
                        <span className="text-blue-600 font-medium">
                          {line}
                        </span>
                      ) : line.includes("Key innovations") ||
                        line.includes("These solutions") ? (
                        <span>{line}</span>
                      ) : (
                        line
                      )}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={sector.img}
                  alt={sector.name}
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Software Content */}
              <div className="text-left space-y-2">
                <h2 className="text-2xl font-bold mb-2 text-blue-600 border-b-2 border-blue-300 pb-2">
                  Software
                </h2>
                <p className="text-gray-800 whitespace-pre-line text-justify text-base leading-relaxed">
                  {sector.software.split("\n").map((line, i) => (
                    <span key={i}>
                      {line.includes("•") ? (
                        <span className="text-blue-600 font-medium">
                          {line}
                        </span>
                      ) : line.includes("ITP empowers") ||
                        line.includes("These solutions") ? (
                        <span>{line}</span>
                      ) : (
                        line
                      )}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
