import React from "react";
import { motion } from "framer-motion";
import turnkey1 from "../assets/turnkey1.jpg"; // Adjust path as needed
import Form from "../components/Form";

const Turnkey = () => {
  return (
    <div className="pt-0">
      {/* Banner Section */}
      <div
        className="relative h-[260px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${turnkey1})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-5xl font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] text-center"
        >
          Turnkey Automation Solutions
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            <span className="text-blue-700 font-semibold">Manufacturers</span>{" "}
            lay higher emphasis on{" "}
            <span className="text-blue-600 font-medium">automation</span> than
            ever before. They also want the automation to{" "}
            <span className="text-blue-600 font-medium">
              work seamlessly together
            </span>{" "}
            rather than operate in individual silos. The expectation is that{" "}
            <span className="text-blue-600 font-medium">
              OEM machines, customized processes, and equipment
            </span>{" "}
            all share information and allow easy access to all manner of data
            from the plant floor.
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            With experience and expertise in{" "}
            <span className="text-blue-600">
              Control, Electrical, Motion, Process Equipment Fabrication,
              Machine Building, and Automation
            </span>
            , we provide our clients with a{" "}
            <span className="text-blue-700 font-semibold">
              single shop for all their automation needs
            </span>
            . Our experts actively engage in the process,{" "}
            <span className="text-blue-600 font-medium">
              identify and collaborate with stakeholders
            </span>
            , and ensure their input directly influences the{" "}
            <span className="text-blue-700 font-semibold">
              design and development
            </span>{" "}
            of the plant.
          </p>
        </motion.div>
      </div>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </div>
  );
};

export default Turnkey;
