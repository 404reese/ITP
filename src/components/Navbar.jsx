import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import brandlogo from "../assets/brandlogo.jpg";

const Navbar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const isSolutionActive = [
    "/industrial-automation",
    "/electrical-solutions",
    "/trading-solutions",
    "/digital-manufacturing-solutions",
    "/software-solutions",
    "/lightning-solutions",
    "/house-office-solutions",
    "/turnkey-solutions",
  ].includes(location.pathname);

  const navItemClass = (active) =>
    `px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
      active ? "text-blue-700 font-bold" : "text-gray-800 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-300 shadow-md relative">
      <div className="flex items-center justify-between p-5">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src={brandlogo}
            alt="INDIA TECH PROJECT"
            className="h-14 w-auto rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              INDIA TECH PROJECTS
            </h1>
            <p className="text-sm text-gray-600">
              Automation beyond Imagination
            </p>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <Link to="/">
            <li className={navItemClass(isActive("/"))}>Home</li>
          </Link>
          <Link to="/about-us">
            <li className={navItemClass(isActive("/about-us"))}>About Us</li>
          </Link>
          <Link to="/offerings">
            <li className={navItemClass(isActive("/offerings"))}>Offerings</li>
          </Link>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setDropdownOpen((prev) => !prev);
                setIndustriesOpen(false);
              }}
              className={navItemClass(isSolutionActive)}
            >
              Solutions ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-64 z-50 border border-gray-200">
                {[
                  ["/industrial-automation", "Industrial Automation"],
                  ["/electrical-solutions", "Electrical Solutions"],
                  ["/trading-solutions", "Trading Solutions"],
                  [
                    "/digital-manufacturing-solutions",
                    "Digital Manufacturing Solutions",
                  ],
                  ["/software-solutions", "Software Solutions"],
                  ["/lightning-solutions", "Lighting Solutions"],
                  ["/house-office-solutions", "Home & Office Automation"],
                  ["/turnkey-solutions", "Turnkey Projects"],
                ].map(([path, label]) => (
                  <Link key={path} to={path}>
                    <li
                      onClick={() => setDropdownOpen(false)}
                      className={`px-5 py-3 hover:bg-blue-100 cursor-pointer transition-all duration-300 ${
                        isActive(path)
                          ? "text-blue-600 font-bold"
                          : "text-gray-800"
                      }`}
                    >
                      {label}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>

          {/* Industries Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setIndustriesOpen((prev) => !prev);
                setDropdownOpen(false);
              }}
              className={navItemClass(
                location.pathname.includes("/industries")
              )}
            >
              Industries ▾
            </button>
            {industriesOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-72 z-50 border border-gray-200">
                {[
                  "Water & Power Utilities",
                  "Food & Beverage",
                  "Life Science",
                  "Oil & Gas",
                  "Marine & Ports",
                  "Metals & Mining",
                ].map((industry, idx) => (
                  <Link
                    key={idx}
                    to={`/industries/${industry
                      .toLowerCase()
                      .replace(/ & | /g, "-")}`}
                  >
                    <li
                      onClick={() => setIndustriesOpen(false)}
                      className="px-5 py-3 hover:bg-blue-100 cursor-pointer transition-all duration-300 text-gray-800"
                    >
                      {industry}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>

          <Link to="/contact-us">
            <li className={navItemClass(isActive("/contact-us"))}>
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <ul className="md:hidden px-6 pb-4 text-gray-800 font-medium">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
            <li>About Us</li>
          </Link>
          <Link to="/offerings" onClick={() => setMobileMenuOpen(false)}>
            <li>Offerings</li>
          </Link>

          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left"
            >
              Solutions ▾
            </button>
            {dropdownOpen && (
              <ul className="pl-4 space-y-1">
                {[
                  "/Industrial Automation",
                  "/Electrical Solutions",
                  "/Trading Solutions",
                  "/Digital Manufacturing Solutions",
                  "/Software Solutions",
                  "/Lighting Solutions",
                  "/Home & Office Automation",
                  "/Turnkey Projects",
                ].map((path, idx) => (
                  <Link
                    key={idx}
                    to={path}
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <li>
                      {path.split("/").join(" ").replace(/-/g, " ").trim()}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="w-full text-left"
            >
              Industries ▾
            </button>
            {industriesOpen && (
              <ul className="pl-4 space-y-1">
                {[
                  "Water & Power Utilities",
                  "Food & Beverage",
                  "Life Science",
                  "Oil & Gas",
                  "Marine & Ports",
                  "Metals & Mining",
                ].map((industry, idx) => (
                  <Link
                    key={idx}
                    to={`/industries/${industry
                      .toLowerCase()
                      .replace(/ & | /g, "-")}`}
                    onClick={() => {
                      setIndustriesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <li>{industry}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>

          <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            <li>Contact Us</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
