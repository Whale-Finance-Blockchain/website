import * as React from "react"
import { FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {

  return  (
    <footer className="bg-primary text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
            {/* <img src={Logo} alt="Whale Finance Logo" className="w-[70px] h-[70px]"/> */}
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
          <a href="https://discord.gg/zCRxDTTM"><FaDiscord className="text-3xl cursor-pointer" /></a>
          <a href="https://twitter.com/Whale_dApp"><FaTwitter className="text-3xl cursor-pointer" /></a>
          <a href="https://t.me/finance_whale"><FaTelegram className="text-3xl cursor-pointer" /></a>
          <a href="https://github.com/Whale-Finance-Blockchain"><FaGithub className="text-3xl cursor-pointer" /></a>
          <a href="https://www.linkedin.com/company/whale-finance/"><FaLinkedin className="text-3xl cursor-pointer" /></a>
        </div>

        <div className="text-center text-white mt-8">
        © {new Date().getFullYear()} Whale Finance. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer