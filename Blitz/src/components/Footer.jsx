import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="uppercase font-bold text-black py-4 md:pt-0">
              ABOUT BLITZ COMPANY
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/">How it works</Link>
              </li>
              <li>
                <Link to="/">Our guidelines</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms and conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase font-bold text-black py-4 md:pt-0">
              CUSTOMER SERVICE
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/about">Contact us</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="md:flex md:flex-col md:justify-between">
            <div>
            </div>
            <small className="text-[14px] text-black mt-8 md:mt-0">
              © Blitz Management @2025.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;