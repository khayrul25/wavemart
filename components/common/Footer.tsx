import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary py-20">
      <div className="max-w-5xl mx-auto text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Wave <span className="text-black">Mart</span>
        </h2>
        <p className="mb-6">Your one-stop shop for all your needs.</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} WaveMart. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
