import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";

import ia from "../assets/ia.jpg";
import df from "../assets/df.jpg";
import ts from "../assets/ts.jpg";
import software from "../assets/software.jpg";
import electrical1 from "../assets/electrical1.jpg";
import lighting from "../assets/lighting.jpg";
import automation from "../assets/automation.jpg";
import turnkey from "../assets/turnkey.jpg";

const services = [
  {
    title: "Industrial Automation",
    description:
      "Industry automation solutions streamline manufacturing and business processes by integrating advanced technologies like AI, IoT, and robotics, enhancing efficiency, precision, and productivity.",
    image: ia,
    link: "/industrial-automation",
  },
  {
    title: "Electrical Solutions",
    description:
      "Comprehensive electrical engineering and installation services ensuring safe, efficient, and code-compliant power systems.",
    image: electrical1,
    link: "/electrical-solutions",
  },
  {
    title: "Trading & Solutions",
    description:
      "Solar solutions harness renewable energy through photovoltaic technology, offering cost-effective and eco-friendly power for various applications.",
    image: ts,
    link: "/trading-solutions",
  },
  {
    title: "Digital Manufacturing Solutions",
    description:
      "Digital manufacturing solutions transform traditional production processes by integrating smart technologies, enabling seamless connectivity, predictive analytics, and agile operations.",
    image: df,
    link: "/digital-manufacturing-solutions",
  },
  {
    title: "Software Solutions",
    description:
      "Custom software development services to build scalable, secure, and user-friendly applications tailored to your business needs.",
    image: software,
    link: "/software-solutions",
  },
  {
    title: "Lighting Solutions",
    description:
      "Advanced lighting systems designed for energy efficiency, aesthetic appeal, and smart control across residential and commercial spaces.",
    image: lighting,
    link: "/lighting-solutions",
  },
  {
    title: "House & Office Automation",
    description:
      "Smart automation for homes and offices enabling remote control, energy savings, and enhanced comfort through IoT and AI.",
    image: automation,
    link: "/house-office-solutions",
  },
  {
    title: "Turnkey Projects",
    description:
      "End-to-end project execution services from design to deployment, delivering complete industrial and infrastructure solutions.",
    image: turnkey,
    link: "/turnkey-solutions",
  },
];

const Solutions = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-600 mb-10 text-center">
        Solutions
      </h2>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div
            key={index}
            className="px-2"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="relative group overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 transform hover:-translate-y-3"
              onClick={() => {
                navigate(service.link);
                setTimeout(() => window.scrollTo(0, 0), 0);
              }}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 sm:h-80 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold transition-transform duration-300 group-hover:scale-105">
                  {service.title}
                </h3>
                {hovered === index && (
                  <p className="mt-2 text-sm sm:text-base opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Solutions;
