import { Clock } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Clock size={24} />
          <h3 className="text-2xl  ">Join Us This Sunday</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">First Service</h4>
            <p className="text-purple-100">8:00 AM - 9:30 AM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Second Service</h4>
            <p className="text-purple-100">10:30 AM - 12:00 PM</p>
          </div>
        </div>
        <button className="mt-6 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
          Plan Your Visit
        </button>
      </div>
    </div>
  );
};

export default Contact;
