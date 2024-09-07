"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faFacebook, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  // State for form data and feedback messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdknpeez", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("There was an issue sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {/* Success and Error Messages */}
          {successMessage && <p className="mt-4 text-green-500 text-center">{successMessage}</p>}
          {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}
        </div>

        {/* Contact Details and Social Icons */}
        <div className="flex flex-col items-start justify-center space-y-6 p-8">
          <h2 className="text-4xl font-semibold text-gray-800">Let's Connect</h2>
          <p className="text-lg text-gray-600">
            I'm open to collaborations, freelance projects, or just a chat. Feel free to reach out!
          </p>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl" />
            <span className="text-gray-600">musamusakannike@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
