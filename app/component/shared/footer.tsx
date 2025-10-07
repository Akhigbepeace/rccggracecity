"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Give", href: "/give" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Workers Corner", href: "/workers-corner" },
  ];

  // const ministries = [
  //   { name: "Children's Ministry", href: "/ministries/children" },
  //   { name: "Youth Ministry", href: "/ministries/youth" },
  //   { name: "Women's Ministry", href: "/ministries/women" },
  //   { name: "Men's Ministry", href: "/ministries/men" },
  //   { name: "Worship Team", href: "/ministries/worship" },
  // ];

  // const resources = [
  //   { name: "Sermons", href: "/sermons" },
  //   { name: "Bible Study", href: "/bible-study" },
  //   { name: "Events", href: "/events" },
  //   { name: "Gallery", href: "/gallery" },
  //   { name: "Blog", href: "/blog" },
  // ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialMediaLink = [
    {
      icon: FaFacebookF,
      href: "https://web.facebook.com/rccggracecityabuja?_rdc=1&_rdr#",
      color: "hover:text-blue-500",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rccggracecityabuja/",
      color: "hover:text-pink-500",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@rccggracecityabuja",
      color: "hover:text-red-500",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/gracecityabuja",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background to-gray-900 text-white overflow-hidden">
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Church Info */}
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full p-2">
                  <Image
                    src="/logo.png"
                    alt="Grace City Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">RCCG</p>
                  <h3 className="text-2xl text-white">Grace City</h3>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                A movement of grace, a sanctuary for souls, and a beacon of
                purpose in the heart of Abuja.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    size={18}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-300 text-sm">
                    Along Bannex-Gwarinpa Expressway, Opp. Next Cash & Carry,
                    Abuja, Nigeria
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone size={18} className="text-primary flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+234 (0) 812 345 6789</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope
                    size={18}
                    className="text-primary flex-shrink-0"
                  />
                  <p className="text-gray-300 text-sm">
                    hello@gracecityabuja.org
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:w-1/2 space-y-6">
              <h4 className="text-xl text-white border-b border-gray-700 pb-3">
                Quick Links
              </h4>
              <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-5 list-disc list-inside">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>&copy; {new Date().getFullYear()} RCCG Grace City.</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialMediaLink.map(({ icon: Icon, href, color }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className={`p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 transform hover:scale-110 ${color}`}
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="bg-primary hover:bg-purple-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <FaChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
