import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "a21faba2-3aff-487e-9422-a3bd13af4f3c");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 pt-32 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move our business forward."
      />

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name */}
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-700">
            <img src={assets.person_icon} alt="person" className="w-4 h-4 opacity-60" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-700">
            <img src={assets.email_icon} alt="email" className="w-4 h-4 opacity-60" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            required
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Submit
          <img src={assets.arrow_icon} alt="arrow" className="w-4" />
        </button>
      </form>
    </div>
  );
}

export default Contact;
