import * as React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from "../images/whale_logo_white.png"
import { Reveal, RevealWrapper } from "./reveal";

const Footer = () => {

  return  (
    <RevealWrapper>
    <footer className="bg-gradient-to-r from-primary-color to-secondary-color text-white py-12">
        <Reveal>
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
            <img src={Logo} alt="Whale Finance Logo" className="w-[70px] h-[70px]"/>
            <h5 className="text-xl font-semibold mb-4 mt-4">About Us</h5>
            <p className="text-white">
            We are the first decentralized platform that allows investors to invest in a manager's portfolio and managers to manage investors' assets.
            </p>
        </div>

        {/* Quick Links */}
        <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="text-white">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Docs</li>
            <li className="mb-2">Contact</li>
            </ul>
        </div>

        {/* Contact Info */}
        <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <ul className="text-white">
            <li className="mb-2">Email: info@example.com</li>
            <li className="mb-2">Phone: (123) 456-7890</li>
            <li className="mb-2">Address: 123 Street, City, Country</li>
            </ul>
        </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
        <FaFacebook className="text-2xl cursor-pointer" />
        <FaTwitter className="text-2xl cursor-pointer" />
        <FaInstagram className="text-2xl cursor-pointer" />
        <FaLinkedin className="text-2xl cursor-pointer" />
        </div>

        <div className="text-center text-white mt-8">
        © {new Date().getFullYear()} Whale Finance. All rights reserved.
        </div>
        </Reveal>
    </footer>
    </RevealWrapper>
  )
}

export default Footer
