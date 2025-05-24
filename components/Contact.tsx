'use client';
import React, { useState } from "react";
import { useMotionValue, animate, useMotionTemplate, motion} from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending logic here (e.g., Formspree, EmailJS, backend API)
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  const COLORS_TOP = ["#13FFAA", "#FFA500", "#FF6347", "#FF4500", "#FF0000"]
        const color = useMotionValue(COLORS_TOP[0])
      const border = useMotionTemplate`1px solid ${color}`
      const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <motion.button
                    style={ {
                        border, 
                        boxShadow 
                    } }
                    whileHover={{ 
                        scale: 1.015 
                    }}
                    whileTap={{ 
                        scale: 0.985
                    }}
                    className='flex w-fit items-center gap-2 rounded-full px-4 py-2'
                >
                    Submit Response 
                    <FiArrowRight />
                </motion.button>
        </form>
      </div>
    </section>
  );
}
