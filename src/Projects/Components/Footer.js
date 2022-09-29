import React from "react";
import {} from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-slate-700 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <SocialIcon url="https://twitter.com/@HasnainBanGas18" />{" "}
                &nbsp;&nbsp;
                <SocialIcon url="https://facebook.com/hasnain.hasnainbangash" />
                &nbsp;&nbsp;
                <SocialIcon url="https://Instagram.com/hasnain_bangash_01" />
                &nbsp;&nbsp;
                <SocialIcon url="https://whatsapp.com/" />
                &nbsp;&nbsp;
                <SocialIcon url="https://github.com/hasnainahmad12" />
                &nbsp;&nbsp;
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Github</li>
                    <li>Free Products</li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>MIT License</li>
                    <li>Terms &amp; Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright ©{" "}
                <span id="get-current-year">
                  2021 <tr />
                  Hasnain Bangash
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
