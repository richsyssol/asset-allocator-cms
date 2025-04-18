import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineBusinessCenter } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook", url: "https://facebook.com" },
    { icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: FaInstagram, label: "Instagram", url: "https://instagram.com" },
    { icon: FaWhatsapp, label: "WhatsApp", url: "https://wa.me/919876543210" },
  ];

  const services = [
    "Wealth Management",
    "Financial Planning",
    "Investment Advisory",
    "Tax Planning",
    "Retirement Planning",
    "Insurance Solutions",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sanjay Jadhav & Associates
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Your trusted partner for comprehensive financial solutions and wealth
          management services
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service Interested In *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                required
              >
                <option value="">Select a service</option>
                <option value="wealth-management">Wealth Management</option>
                <option value="financial-planning">Financial Planning</option>
                <option value="investment-advisory">Investment Advisory</option>
                <option value="tax-planning">Tax Planning</option>
                <option value="retirement-planning">Retirement Planning</option>
                <option value="insurance-solutions">Insurance Solutions</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                required
                placeholder="Tell us about your financial goals and requirements"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn("left", "spring", 0.2, 1)}>
          {/* Contact Details */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <IoCallOutline size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 022 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdOutlineEmail size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@sanjayjadhav.com</p>
                  <p className="text-gray-600">support@sanjayjadhav.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaWhatsapp size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday to Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCalendarAlt size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Appointment Booking
                  </h3>
                  <p className="text-gray-600">
                    Available by prior appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, label, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    title={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineOfficeBuilding size={24} className="text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                Office Address
              </h3>
            </div>
            <address className="text-gray-600 not-italic pl-9">
              Sanjay Jadhav & Associates
              <br />
              Office No.302, Shreenath Enclave
              <br />
              Shrihari Kute Marg, Mumbai Naka
              <br />
              Nashik - 422002
              <br />
              Maharashtra, India
            </address>
          </div>

          {/* Our Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <MdOutlineBusinessCenter size={24} className="text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                Our Services
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-9">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-8 pt-8">
          Our Location
        </h2>
        <div className="p-8 pt-0">
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.715509075936!2d73.7898573153046!3d19.99788628659989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaf2b9f1a9f%3A0x4f01bba3e5f7a3e0!2sMumbai%20Naka%2C%20Nashik%2C%20Maharashtra%20422002!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Sanjay Jadhav & Associates Location"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.4, 1)}
        className="mt-16 bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 mb-4 flex items-center justify-center">
              <span className="text-4xl text-blue-600 font-bold">SJ</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Sanjay Jadhav
            </h3>
            <p className="text-blue-600 mb-2">Founder & CEO</p>
            <p className="text-gray-600">
              Certified Financial Planner with 15+ years of experience in wealth
              management
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 mb-4 flex items-center justify-center">
              <span className="text-4xl text-blue-600 font-bold">PM</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Priya Malhotra
            </h3>
            <p className="text-blue-600 mb-2">Senior Financial Advisor</p>
            <p className="text-gray-600">
              Specialist in retirement planning and tax optimization strategies
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 mb-4 flex items-center justify-center">
              <span className="text-4xl text-blue-600 font-bold">RK</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Rajesh Kumar
            </h3>
            <p className="text-blue-600 mb-2">Investment Specialist</p>
            <p className="text-gray-600">
              Expertise in portfolio management and alternative investments
            </p>
          </div>
        </div>
      </motion.section>

      {/* Schema Markup (invisible) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Sanjay Jadhav & Associates",
            "image": "https://www.sanjayjadhav.com/logo.png",
            "@id": "https://www.sanjayjadhav.com",
            "url": "https://www.sanjayjadhav.com",
            "telephone": "+919876543210",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.302, Shreenath Enclave, Shrihari Kute Marg",
              "addressLocality": "Nashik",
              "addressRegion": "Maharashtra",
              "postalCode": "422002",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.997886,
              "longitude": 73.789857
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/sanjayjadhavassociates",
              "https://www.linkedin.com/company/sanjayjadhavassociates",
              "https://www.instagram.com/sanjayjadhavassociates"
            ]
          }
        `}
      </script>
    </motion.div>
  );
};

export default ContactForm;
