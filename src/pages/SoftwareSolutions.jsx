// import React from "react";
// import bannerImg from "../assets/image.png";

// const SoftwareSolutions = () => {
//   return (
//     <div className="text-gray-800">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] w-full overflow-hidden">
//         <img
//           src={bannerImg}
//           alt="Cybersecurity in OT"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
//             Securing OT Infrastructure with Our Expert Team
//           </h1>
//         </div>
//       </div>

//       {/* Introduction */}
//       <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
//         <p>
//           ITP is proud to be working with some of the best minds in the field of
//           OT cyber security. We provide best-in-class services that foster safe,
//           secure, and resilient operations across all industries.
//         </p>
//         <p>
//           We specialize in tailored OT cybersecurity solutions for industrial
//           and critical infrastructure clients. Our experienced team works to
//           protect systems, operations, and data from evolving cyber threats.
//         </p>
//         <p>
//           From identifying vulnerabilities to implementing effective and
//           cost-efficient solutions, our experts ensure you meet your security
//           and regulatory goals with confidence.
//         </p>
//       </section>

//       {/* Our Services */}
//       <section className="bg-gray-100 py-12 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
//           <div className="space-y-6">
//             {[
//               {
//                 title: "Risk Assessment",
//                 desc: "Thorough assessment of your OT/IOT/110T environment to identify vulnerabilities and provide actionable, risk-reducing recommendations.",
//               },
//               {
//                 title: "Asset Inventory",
//                 desc: "Complete asset listing via efficient, non-intrusive discovery techniques tailored to your production operations.",
//               },
//               {
//                 title: "Vulnerability Assessment",
//                 desc: "Risk-based snapshot of your OT security posture, with prioritized tactical and strategic improvement suggestions.",
//               },
//               {
//                 title: "Incident Response",
//                 desc: "Tailored response plans, tabletop exercises (TTX), and hands-on support to help you respond swiftly and effectively.",
//               },
//               {
//                 title: "Regulatory Compliance",
//                 desc: "Detailed compliance/non-compliance mapping to help you focus remediation efforts where they matter most.",
//               },
//               {
//                 title: "OT Penetration Testing",
//                 desc: "Non-intrusive/intrusive testing to uncover software, hardware, or network vulnerabilities before attackers do.",
//               },
//               {
//                 title: "Digital Forensics Incident Response (DAR)",
//                 desc: "Rapid expert response to threats, ensuring confident recovery and investigation.",
//               },
//             ].map((item, idx) => (
//               <div key={idx}>
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="py-12 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-8">What We Do</h2>
//           <p className="mb-6">
//             We offer a comprehensive range of best-in-class solutions to protect
//             your critical infrastructure and OT environments from cyber threats.
//             Our capabilities include:
//           </p>
//           <div className="space-y-6">
//             {[
//               {
//                 title: "ICS / OT Firewall",
//                 desc: "Monitors and controls traffic across OT networks, blocking malicious traffic and ensuring safe operation.",
//               },
//               {
//                 title: "Endpoint Security / Malware Protection",
//                 desc: "Secures servers, workstations, and mobile devices using cutting-edge protection.",
//               },
//               {
//                 title: "Intrusion & Anomaly Detection",
//                 desc: "Provides real-time visibility into devices and networks to detect and react to threats fast.",
//               },
//               {
//                 title: "Privileged Access Management (PAM)",
//                 desc: "Monitors and prevents unauthorized access to critical resources.",
//               },
//               {
//                 title: "Secure Remote Access",
//                 desc: "Delivers safe, streamlined remote access to industrial environments without risk.",
//               },
//               {
//                 title: "Unidirectional Gateway",
//                 desc: "One-way data flow using data diodes prevents inbound communication and ensures absolute separation.",
//               },
//               {
//                 title: "Back-up and Restore",
//                 desc: "Reliable backup and recovery for OT/ICS systems to prepare you for post-incident recovery.",
//               },
//             ].map((item, idx) => (
//               <div key={idx}>
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SoftwareSolutions;

import React from "react";
import bannerImg from "../assets/image.png";

// Imported icons as .jpg files
import risk from "../assets/risk.jpg";
import asset from "../assets/asset.jpg";
import vulnerability from "../assets/vulnerability.jpg";
import incident from "../assets/incident.jpg";
import regulatory from "../assets/regulatory.jpg";
import ot from "../assets/ot.jpg";
import digital from "../assets/digital.jpg";
import Form from "../components/Form";

const services = [
  {
    title: "Risk Assessment",
    desc: "Thorough assessment of your OT/IOT/110T environment to identify vulnerabilities and provide actionable, risk-reducing recommendations.",
    icon: risk,
  },
  {
    title: "Asset Inventory",
    desc: "Complete asset listing via efficient, non-intrusive discovery techniques tailored to your production operations.",
    icon: asset,
  },
  {
    title: "Vulnerability Assessment",
    desc: "Risk-based snapshot of your OT security posture, with prioritized tactical and strategic improvement suggestions.",
    icon: vulnerability,
  },
  {
    title: "Incident Response",
    desc: "Tailored response plans, tabletop exercises (TTX), and hands-on support to help you respond swiftly and effectively.",
    icon: incident,
  },
  {
    title: "Regulatory Compliance",
    desc: "Detailed compliance/non-compliance mapping to help you focus remediation efforts where they matter most.",
    icon: regulatory,
  },
  {
    title: "OT Penetration Testing",
    desc: "Non-intrusive/intrusive testing to uncover software, hardware, or network vulnerabilities before attackers do.",
    icon: ot,
  },
  {
    title: "Digital Forensics Incident Response (DAR)",
    desc: "Rapid expert response to threats, ensuring confident recovery and investigation.",
    icon: digital,
  },
];

const whatWeDo = [
  {
    title: "ICS / OT Firewall",
    desc: "Monitors and controls traffic across OT networks, blocking malicious traffic and ensuring safe operation.",
  },
  {
    title: "Endpoint Security / Malware Protection",
    desc: "Secures servers, workstations, and mobile devices using cutting-edge protection.",
  },
  {
    title: "Intrusion & Anomaly Detection",
    desc: "Provides real-time visibility into devices and networks to detect and react to threats fast.",
  },
  {
    title: "Privileged Access Management (PAM)",
    desc: "Monitors and prevents unauthorized access to critical resources.",
  },
  {
    title: "Secure Remote Access",
    desc: "Delivers safe, streamlined remote access to industrial environments without risk.",
  },
  {
    title: "Unidirectional Gateway",
    desc: "One-way data flow using data diodes prevents inbound communication and ensures absolute separation.",
  },
  {
    title: "Back-up and Restore",
    desc: "Reliable backup and recovery for OT/ICS systems to prepare you for post-incident recovery.",
  },
];

const SoftwareSolutions = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={bannerImg}
          alt="Cybersecurity in OT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-4xl leading-snug">
            Software Solutions
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-justify text-lg leading-relaxed">
        <h3 className="text-2xl font-bold text-blue-600 py-6">
          OT Cybersecurity
        </h3>
        <p className="mx-auto text-center">
          <span className="text-justify block">
            <span className="font-semibold text-blue-600">
              India Tech Projects (ITP)
            </span>{" "}
            is proud to be working with some of the best minds in the field of{" "}
            <span className="font-semibold text-blue-600">
              OT Cybersecurity
            </span>
            . We provide{" "}
            <span className="font-semibold text-blue-600">
              best-in-class services
            </span>{" "}
            that foster safe, secure, and resilient operations across all
            industries. We specialize in{" "}
            <span className="font-semibold text-blue-600">
              tailored cybersecurity solutions
            </span>{" "}
            for industrial and critical infrastructure clients. Our experienced
            team works to protect systems, operations, and data from evolving{" "}
            <span className="font-semibold text-blue-600">cyber threats</span>.
            From identifying{" "}
            <span className="font-semibold text-blue-600">vulnerabilities</span>{" "}
            to implementing{" "}
            <span className="font-semibold text-blue-600">
              effective and cost-efficient solutions
            </span>
            , our experts ensure you meet your{" "}
            <span className="font-semibold text-blue-600">security</span> and{" "}
            <span className="font-semibold text-blue-600">
              regulatory goals
            </span>{" "}
            with confidence.
          </span>
        </p>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-blue-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx, arr) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-lg shadow hover:shadow-md transition ${
                  idx === arr.length - 1 ? "lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-6 h-6"
                  />
                  <h3 className="text-xl font-bold text-blue-600">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-blue-600">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, idx, arr) => (
              <div
                key={idx}
                className={`bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition ${
                  idx === arr.length - 1 ? "lg:col-start-2" : ""
                }`}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </div>
  );
};

export default SoftwareSolutions;
