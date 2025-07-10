import { motion } from "framer-motion";
import {
  Lightbulb,
  Lock,
  Video,
  Building2,
  Camera,
  DollarSign,
  Thermometer,
  AlertTriangle,
} from "lucide-react";
import Form from "../components/Form";

const conceptItems = [
  { name: "Smart Lighting", icon: <Lightbulb className="w-6 h-6" /> },
  { name: "Access Control", icon: <Lock className="w-6 h-6" /> },
  { name: "Intelligent Scenes", icon: <Video className="w-6 h-6" /> },
  { name: "Water Management", icon: <Building2 className="w-6 h-6" /> },
  { name: "Proactive Surveillance", icon: <Camera className="w-6 h-6" /> },
  { name: "Energy-Efficiency", icon: <DollarSign className="w-6 h-6" /> },
  { name: "Climate Control", icon: <Thermometer className="w-6 h-6" /> },
  {
    name: "Fire/Flood Protection",
    icon: <AlertTriangle className="w-6 h-6" />,
  },
];

export default function ConceptsGrid() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Concepts of Automation
        </h2>
        <p className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-12 text-justify">
          <span className="text-blue-700 font-semibold">Office automation</span>{" "}
          is about connecting all the functional elements in your workplace —
          <span className="text-blue-600">
            {" "}
            lights, fans, AC, projector screens
          </span>
          , and more — to a centralized network and putting them to work for
          you. For example, you can automatically dim the lights when no one’s
          around or configure intelligent scenarios for events like
          <span className="text-blue-600">
            {" "}
            meetings, presentations, birthday celebrations, or client visits
          </span>
          .
          <br />
          <br />
          The best part? Our{" "}
          <span className="text-blue-700 font-semibold">
            retrofit, wireless automation infrastructure
          </span>{" "}
          requires
          <span className="text-blue-600">
            {" "}
            no internal wiring or demolition
          </span>{" "}
          and can be easily set up in any existing office — with minimal hassle.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {conceptItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-blue-200 shadow hover:shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-gray-800 font-medium text-sm">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </section>
  );
}
