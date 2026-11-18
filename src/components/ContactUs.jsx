import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "acd45dc4-e169-4e00-9903-11e70c0f0223");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Thanks for contacting us! We will get back to you soon.",
        );
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      id="contact-us"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution , we craft digital solution that move your business forward."
      />
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-2 text-sm font-medium">Your Name </p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-2 text-sm font-medium">Email id </p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="sm:col-span-2"
        >
          <p className="mb-2 text-sm font-medium"> Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103"
        >
          Submit
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
