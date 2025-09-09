"use client";

import React from "react";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      type: "address",
      label: "Visit Us",
      value:
        "Along Bannex-Gwarinpa Expressway, Opp. Next Cash & Carry, Abuja, Nigeria",
      action: "Get Directions",
    },
    {
      icon: Clock,
      type: "schedule",
      label: "Service Times",
      value: "Sundays 8am",
      action: "View Schedule",
    },
    {
      icon: Phone,
      type: "phone",
      label: "Call Us",
      value: "+234 (0) 812 345 6789",
      action: "Call Now",
    },
    {
      icon: Mail,
      type: "email",
      label: "Email Us",
      value: "hello@gracecityabuja.org",
      action: "Send Email",
    },
  ];

  const handleCardAction = (type: string, value: string) => {
    console.log(`Action: ${type}, Value: ${value}`);
    switch (type) {
      case "address":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`);
        break;
      case "phone":
        window.open(`tel:${value}`);
        break;
      case "email":
        window.open(`mailto:${value}?subject=Inquiry from Grace City Website`);
        break;
      case "schedule":
        // Add to calendar logic
        break;
    }
  };

  const handlePlanVisit = () => {
    // Option 1: Add both events to calendar
    const addToCalendar = () => {
      const sundaySchoolEvent = {
        title: "Grace City Sunday School",
        start: "20250112T080000", // Next Sunday 8:00 AM
        end: "20250112T090000", // 9:00 AM
        location:
          "Along Bannex-Gwarinpa Expressway, Opp. Next Cash & Carry, Abuja, Nigeria",
        description: "Join us for Sunday School before the main service",
      };

      // Google Calendar URL for Sunday School
      const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        sundaySchoolEvent.title
      )}&dates=${sundaySchoolEvent.start}/${
        sundaySchoolEvent.end
      }&location=${encodeURIComponent(
        sundaySchoolEvent.location
      )}&details=${encodeURIComponent(sundaySchoolEvent.description)}`;

      window.open(googleCalUrl, "_blank");
    };

    // Choose one of the above options
    addToCalendar(); // or showPlanningModal(); or goToPlanPage();
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[var(--light-gray)] to-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl text-darkText mb-4">
            Contact Grace City
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether it&apos;s your first time, you&apos;re returning, or simply
            want to connect — we&apos;re here for you.
          </p>
        </div>

        {/* Map and Contact Form Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12" data-aos="fade-up">
          {/* Embedded Map */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl text-darkText mb-6 text-center">
              Find Us Here
            </h3>
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7553076478443!2d7.437976774119283!3d9.086041688095298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0acc7e018371%3A0xeb1d69160d471943!2sRedeemed%20Christian%20Church%20of%20God%20(RCCG%20Grace%20City)!5e0!3m2!1sen!2sng!4v1754347634778!5m2!1sen!2sng"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl text-darkText mb-6 text-center">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full foc border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-10" data-aos="fade-up">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center group-hover:bg-primary transition">
                  <item.icon
                    size={20}
                    className="text-primary group-hover:text-white"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-darkText mb-1">
                    {item.label}
                  </h4>
                  <p className="text-gray-700 mb-2">{item.value}</p>
                  <button
                    className="text-sm text-primary font-medium hover:underline cursor-pointer"
                    onClick={() => handleCardAction(item.type, item.value)}
                  >
                    {item.action} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Times */}
        <div
          className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-center text-white"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock size={24} />
            <h3 className="text-2xl">Join Us This Sunday</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2">Sunday School</h4>
              <p className="text-purple-100">8:00 AM - 9:00 AM</p>
              <p className="text-xs text-purple-200 mt-1">All ages welcome</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2">Main Service</h4>
              <p className="text-purple-100">9:00 AM - 11:00 AM</p>
              <p className="text-xs text-purple-200 mt-1">Worship & Word</p>
            </div>
          </div>
          <button
            onClick={handlePlanVisit}
            className="mt-6 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
          >
            Plan Your Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
