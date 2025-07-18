import React from "react";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap justify-between">
        {/* Left Section - Logo & Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-600">
            India Tech Projects
          </h2>
          <p className="mt-2">
            Are you looking for the right automation solution for your
            organization?
          </p>
          <p className="mt-1">Contact Us!</p>
          <div className="mt-3 flex space-x-3 items-center">
            <a
              href="https://www.linkedin.com/company/i-tech-pro/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a
              href="https://wa.me/919326886352"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/industrial-automation" className="hover:underline">
                Solutions & Services
              </a>
            </li>
            {/* <li><a href="/careers" className="hover:underline">Work With Us</a></li>
            <li><a href="/resources" className="hover:underline">Resources</a></li> */}
            <li>
              <a href="/offerings" className="hover:underline">
                Our Offerings
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Details */}
        <div className="w-full md:w-1/4">
          {/* <h3 className="text-lg font-semibold text-blue-900">Corporate Inquiry:</h3>
          <p>(+91) 22 22 70 2018</p> */}

          <h3 className="text-lg font-semibold text-blue-600">
            Sales Inquiry:
          </h3>
          <p>(+91) 9326 8863 52</p>
          <p>
            <a
              href="mailto:sales@masterintegrators.co.in"
              className="text-blue-600 hover:underline"
            >
              sales@itechpro.in
            </a>
          </p>

          <h3 className="text-lg font-semibold text-blue-600 mt-3">
            Technical Support:
          </h3>
          <p>(+91) 9326 8863 52</p>
          <p>
            <a
              href="mailto:support@masterintegrators.co.in"
              className="text-blue-600 hover:underline"
            >
              info@itechpro.in
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center">
        <p>
          © Copyright 2025 India Tech Projects – All Rights Reserved | <br /> <span className="font-mono">
            Developed
          by{" "}
          <a href="https://mastical.com" className="font-bold text-blue-600" target="_blank" rel="noopener noreferrer">
            Mastical
          </a>
          </span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆
      </button>
    </footer>
  );
};

export default Footer;
