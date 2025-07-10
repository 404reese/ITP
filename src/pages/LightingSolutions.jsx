import React from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";

const lightingOptions = [
  {
    title: "LED",
    desc: "Content as in wordfile",
  },
  {
    title: "Solar",
    desc: "Content to be provided",
  },
  {
    title: "Energy Saving Solutions",
    desc: "Content to be provided",
  },
];

const LightingSolutions = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Lighting Solutions
        </h2>
        <div className="space-y-8">
          {lightingOptions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </section>
  );
};

export default LightingSolutions;
