// components/BrandCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported logos
import abb from "../assets/ABB.png";
import bajaj from "../assets/Bajaj.png";
import belden from "../assets/Belden.png";
import cg from "../assets/CG.png";
import delta from "../assets/Delta.png";
import emerson from "../assets/Emerson.png";
import enH from "../assets/EnH.jpg";
import honeywell from "../assets/HOneywell.png";
import mitsubishi from "../assets/Mitsubishi.png";
import nessa from "../assets/Nessa.png";
import philips from "../assets/Philips.png";
import prosoft from "../assets/Prosoft.png";
import rittal from "../assets/Rittal.png";
import samson from "../assets/Samson.png";
import schaffner from "../assets/Schaffner.jpg";
import schneider from "../assets/Schneider.png";
import siemens from "../assets/Siemens.png";
import weidmuller from "../assets/Weidmuller.png";
import rockwell from "../assets/rockwell.png";

const brandImages = [
  abb,
  bajaj,
  belden,
  cg,
  delta,
  emerson,
  enH,
  honeywell,
  mitsubishi,
  nessa,
  philips,
  prosoft,
  rittal,
  samson,
  schaffner,
  schneider,
  siemens,
  weidmuller,
  rockwell,
];

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="w-full px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Our Partner Brands
      </h2>
      <Slider {...settings}>
        {brandImages.map((logo, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-md rounded-lg p-4 h-32 flex items-center justify-center">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="max-h-20 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BrandCarousel;
