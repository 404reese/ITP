import React, { useRef } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import contactImage from "../assets/contact-us.jpg"; // Replace with your actual image path
import Form from "../components/Form";

const ContactUs = () => {
  return (
    <div className="bg-white shadow-lg p-8 flex flex-col gap-12">
      {/* Top Section: Image + Contact Info + Form */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover rounded-md max-h-[700px]"
          />
        </div>

        {/* Right: Info + Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-4">Contact us to get more info</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a
                  href="mailto:sales@itechpro.in"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  sales@itechpro.in
                </a>
                <span className="text-gray-600">/</span>
                <a
                  href="mailto:info@itechpro.in"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  info@itechpro.in
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
                <p className="text-gray-700">
                  Shop No.4, Ashwini Building, Akashganga Complex, Vijay Garden
                  Road, Kavesar, Thane(W)
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <p className="text-gray-700">+91 93268 86352</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaGlobe className="text-blue-500 text-xl" />
                <a
                  href="https://www.itechpro.in"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  www.itechpro.in
                </a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
      {/* Map Embed */}
      <div className="mt-2 rounded-md overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.507620976926!2d72.97014247337441!3d19.260279046165138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8ee8baac8b1%3A0x56b7f34de884a33f!2sINDIA%20TECH%20PROJECTS!5e0!3m2!1sen!2sin!4v1750693753096!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
