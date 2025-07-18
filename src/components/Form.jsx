import emailjs from "emailjs-com";
import React, { useRef } from "react";

const Form = () => {
  const formRef = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvhkz2r",
        "template_6z42bzp",
        formRef.current,
        "vY6lamZKbUh-GVdJv"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset(); // 🔄 Clear form after success
        },
        () => alert("An error occurred. Try again.")
      );
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-gray-50 p-4 rounded-md shadow w-full"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Send Us a Message
        </h2>
        <div className="grid gap-3">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              pattern="^[A-Za-z\s]{2,}$"
              title="Name should contain only letters and spaces (min 2 characters)"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="org"
            >
              Organisation Name
            </label>
            <input
              type="text"
              id="org"
              name="user_organisation"
              pattern="^[\w\s\-.]{2,}$"
              title="Organisation name can include letters, numbers, spaces, hyphens, and periods"
              placeholder="Organisation or Company"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              required
              pattern="^\d{10}$"
              maxLength={10}
              title="Enter a 10-digit phone number"
              placeholder="Enter 10-digit phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
              }}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="user_message"
              required
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mt-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

