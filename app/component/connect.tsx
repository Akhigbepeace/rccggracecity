"use client";

import React from "react";
import { MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";

const ConnectSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value:
        "Along Bannex-Gwarinpa Expressway, Opp. Next Cash & Carry, Abuja, Nigeria",
      action: "Get Directions",
    },
    {
      icon: Clock,
      label: "Service Times",
      value: "Sundays 8AM & 10:30AM",
      action: "View Schedule",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+234 (0) 812 345 6789",
      action: "Call Now",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@gracecityabuja.org",
      action: "Send Email",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[var(--light-gray)] to-white relative overflow-hidden">
      {/* Elegant background element */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent)] rounded-full opacity-30 transform -translate-x-40 translate-y-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl text-darkText mb-6">
            Connect With Us
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600   max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community both online and offline. Stay connected,
            be inspired, and grow together in faith.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start"></div>
        {/* Contact Information Side */}
        <div className="space-y-8" data-aos="fade-left" data-aos-duration="800">
          <div className="space-y-4">
            <h3 className="text-2xl text-darkText mb-6">Visit & Connect</h3>
            <p className="text-gray-600  leading-relaxed">
              We&apos;d love to meet you in person! Here&apos;s everything you
              need to plan your visit or get in touch.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.label}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <contact.icon
                      size={20}
                      className="text-primary group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-darkText mb-1">
                      {contact.label}
                    </h4>
                    <p className="text-gray-700 mb-3 font-medium">
                      {contact.value}
                    </p>
                    <button className="text-primary font-medium hover:text-purple-600 transition-colors duration-200 text-sm">
                      {contact.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* First Time Visitor CTA */}
          <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-8 text-white text-center">
            <h4 className="text-xl mb-3">First Time Visitor?</h4>
            <p className="text-purple-100 mb-6 leading-relaxed">
              We&apos;d love to welcome you personally and help you feel at home
              in our community.
            </p>
            <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
              Plan Your Visit
            </button>
          </div>
        </div>

        {/* Bottom Newsletter Section */}
        <div
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-3xl text-darkText">Stay in the Loop</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Get weekly encouragement, event updates, and exclusive content
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, just inspiration. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
