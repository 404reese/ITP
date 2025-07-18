import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import plcScada from "../assets/plc.png";
import automationServices from "../assets/automation.jpeg";
import panelDesign from "../assets/paneld.png";
import solarSolutions from "../assets/solar.jpeg";
import detailEngineering from "../assets/detail.jpeg";
import tradeBasket1 from "../assets/trade1.jpg";
import tradeBasket2 from "../assets/trade2.jpeg";
import generators from "../assets/generators.jpeg";

// Our Solutions data (unchanged)
const offerings = [
  {
    title: "PLC/SCADA/DCS Systems",
    image: plcScada,
    points: [
      "Process Automation",
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
      "PLC, HMI, VFD, etc.",
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

// New image section data
const newBrandImages = [
  { category: "AUTOMATION", image: image1 },
  { category: "ELECTRICAL", image: image2 },
  { category: "INSTRUMENTATION", image: image3 },
  { category: "LIGHTING & SOLAR SOLUTIONS", image: image4 },
  { category: "GENERATORS", image: image5 },
];

const Offering = () => {
  return (
    <div className="font-sans bg-blue-50 min-h-screen">
      {/* Our Solutions Section */}
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

      {/* Brands We Cater Section */}
      <section className="w-full py-6 px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">Brands We Cater</h2>
        </div>

        {/* First row: 2 items */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          {newBrandImages.slice(0, 2).map((brand, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-gray-200 rounded-2xl shadow-md w-full max-w-sm text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {brand.category}
              </h3>
              <img
                src={brand.image}
                alt={brand.category}
                className="w-full h-[220px] object-contain rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Second row: 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {newBrandImages.slice(2).map((brand, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-gray-200 rounded-2xl shadow-md w-full max-w-sm text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {brand.category}
              </h3>
              <img
                src={brand.image}
                alt={brand.category}
                className="w-full h-[200px] object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offering;
