import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <footer className=" text-black bg-zinc-100">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between pb-5">
            {/* Find Us Section */}
            <div className="flex items-center mb-6 md:mb-0 md:w-1/3 space-x-3">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Find me</h4>
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Call Us Section */}
            <div className="flex items-center mb-6 md:mb-0 md:w-1/3 space-x-3">
              <FaPhone className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Call me</h4>
                <span>8744003734</span>
              </div>
            </div>

            {/* Mail Us Section */}
            <div className="flex items-center md:w-1/3 space-x-3">
              <FiMail className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Mail Me</h4>
                <span>anikeshuzumaki@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between pt-5 pb-5">
            {/* Logo and About Section */}
            <div className="mb-10 md:w-1/3">
              <div className="footer-logo hidden md:block mb-4">
                <a href="index.html">
                  <img
                    src="https://imgs.search.brave.com/Hca24WLOm_5uaPnJb_ObJ44Sn-G-X9RPLZezoV7DTTk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9ha2Rl/dmxhYnMuY29tL21l/dGEvYWtkZXYtb2cu/cG5n"
                    alt="logo"
                    className="w-full max-w-xs"
                  />
                </a>
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-red-600 hover:text-red-400">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="mb-10 md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Expert Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Latest News
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="mb-4">
                Don’t miss to subscribe to my feeds, kindly fill the form below.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="px-4 py-2 w-full border border-gray-600 bg-gray-700 text-white rounded-l focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-500">
                  <FaTelegramPlane />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="bg-transparent py-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; 2024, All Rights Reserved{" "}
              <a href="" className="text-blue-500 hover:underline">
                Ak
              </a>
            </p>
            <ul className="flex justify-center md:justify-end space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer


