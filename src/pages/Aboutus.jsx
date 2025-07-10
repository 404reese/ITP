import React from "react";
import aboutus from "../assets/about-us1.jpg";
import ish from "../assets/ish.jpg";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/offerings");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-10 space-y-16">
      {/* Main Section */}
      <section className="w-full bg-gray-100 py-12 px-4 md:px-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="h-80 w-full md:w-1/2 flex justify-center">
          <img
            src={aboutus}
            alt="Digital Manufacturing Solutions"
            className="rounded-lg shadow-lg w-full h-full md:w-4/5 object-cover max-h-[800px]"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-4 text-base text-justify">
          <h2 className="text-2xl font-bold text-blue-600">About Us</h2>

          <p>
            <span className="font-semibold text-blue-600">
              India Tech Projects
            </span>{" "}
            provides cutting-edge
            <span className="font-semibold text-blue-600">
              {" "}
              Digital Manufacturing solutions{" "}
            </span>
            that optimize manufacturing operations, boost productivity, and
            enable data-driven decision-making.
          </p>

          <p>
            Leveraging our expertise in Automation, our Digital Manufacturing
            team specializes in
            <span className="font-semibold text-blue-600">
              {" "}
              MES, IIoT, Data Analytics, Cloud Computing, Artificial
              Intelligence (AI){" "}
            </span>
            and{" "}
            <span className="font-semibold text-blue-600">
              Industrial Cybersecurity
            </span>{" "}
            to transform your manufacturing plants into smart, digital
            factories.
          </p>

          <p>
            Our solutions capture critical real-time data directly from control
            systems, presenting actionable insights through detailed reports and
            charts. This empowers plant operators and business managers to make
            accurate, timely decisions, ultimately increasing
            <span className="font-semibold text-blue-600">
              {" "}
              asset efficiency
            </span>{" "}
            and reducing
            <span className="font-semibold text-blue-600">
              {" "}
              operational costs, utility consumption
            </span>{" "}
            and
            <span className="font-semibold text-blue-600"> wastage</span>.
          </p>

          <button
            onClick={handleNavigate}
            className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Learn More
          </button>
        </div>
      </section>
      {/* Additional Info */}
      <div className="space-y-6 text-gray-800 text-base max-w-5xl mx-auto text-justify">
        <h3 className="text-2xl font-bold text-blue-600">Who are we</h3>
        <p>
          Founded in 2013,{" "}
          <span className="font-semibold text-blue-600">
            M/s India Tech Projects
          </span>{" "}
          has now become a friendly brand in the Oil & Gas, Steel, FMCG, Pharma
          & Chemical Automation space in India.
        </p>
        <p>
          Taking ownership and being critical of our actions is ingrained in
          India Tech Project's culture. We never get comfortable with success!
          Our team consists of great individuals with the freedom to be awesome,
          who continuously refine their skills and knowledge to be the change
          makers!
        </p>
        <p className="font-semibold text-blue-600">
          One stop solution for your Industrial Automation needs.
        </p>
        <p>
          Our business philosophy is{" "}
          <span className="font-semibold text-blue-600">
            “Concept to Reality”
          </span>{" "}
          – we strive to be the best consultants to our customers by showcasing
          value benefits for their investments, by turning their “Ideas into
          Profits”. Through our engagement with our supplier partners, we create
          a win-win partnership by utilizing their value propositions to fulfill
          our customer’s expectations.
        </p>
      </div>

      {/* Director Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto text-gray-800">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={ish}
            alt="Ishwar Gohil"
            className="rounded-lg shadow-lg w-60 h-73 object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-3 text-justify">
          <h3 className="text-2xl font-bold text-blue-600">
            Director / Founder
          </h3>
          <p>
            <span className="font-semibold text-blue-600">Name:</span> Mr.
            Ishwar Vijay Gohil
          </p>
          <p>
            <span className="font-semibold text-blue-600">Designation:</span>{" "}
            DIRECTOR
          </p>
          <p>
            Mr. Ishwar Vijay Gohil has done MBA in Project Management and has 16
            years of vast experience in Industrial Automation and Process
            Control Application. He currently heads the sales and business
            management of the Automation Business Unit that provides solutions
            around Factory Floor Automation, IoT, Digital Transformation, Smart
            Manufacturing, and Energy Saving Solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="space-y-6 max-w-5xl mx-auto text-gray-800 text-base text-justify">
        <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
        <p>
          Our mission is to sustain our growth, profitability and customer
          confidence, by continually advancing the performance of our operations
          and the quality of our service delivery.
        </p>

        <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
        <p>
          To be the leading Automation Company with a Global reach, sustained
          growth and a worldwide reputation for engineering excellence.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
