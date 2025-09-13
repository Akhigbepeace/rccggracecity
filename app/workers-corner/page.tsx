"use client";

import Image from "next/image";
import { useState } from "react";

const departments = [
  "Berachah Generation",
  "Children",
  "Evangelism",
  "Publicity",
  "Protocol",
  "Prayer",
  "Sunday School",
  "Sanitation",
  "Technical",
  "Training",
  "Ushering",
  "Welfare",
];

const WorkersTravelRequest = () => {
  const defaultValue = {
    fullName: "",
    email: "",
    department: "",
    subject: "",
    purpose: "",
    destination: "",
    aware: "",
    dutyDate: "",
    travelDate: "",
    returnDate: "",
    evangelismDate: "",
  };

  const [form, setForm] = useState(defaultValue);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // 🔹 Replace with API call / EmailJS / Firestore
    alert("Your travel request has been submitted!");
  };

  return (
    <>
      <header className="relative h-[90vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/travel-background.png"
          alt="Travel background"
          fill
          className="object-cover object-center brightness-50"
          priority
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl mb-4">Workers Corner</h1>
          <p className="text-lg font-light">
            Submit your travel requests with ease and keep your department
            informed.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl text-darkText mb-6 text-center">
          Workers Travel Request Form
        </h2>

        <form
          onSubmit={handleSubmit}
          id="request-form"
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6 max-w-3xl mx-auto"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select your primary department *
            </label>
            <select
              name="department"
              required
              value={form.department}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">-- Select Department --</option>
              {departments.map((dept, i) => (
                <option key={i} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Purpose of Travel */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Purpose of Travelling *
            </label>
            <textarea
              name="purpose"
              required
              value={form.purpose}
              onChange={handleChange}
              rows={3}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Place travelling to *
            </label>
            <input
              type="text"
              name="destination"
              required
              value={form.destination}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Aware */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Is your department head aware? *
            </label>
            <select
              name="aware"
              required
              value={form.aware}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Duty Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              If on duty, select the date on duty
            </label>
            <input
              type="date"
              name="dutyDate"
              value={form.dutyDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Travel Date *
            </label>
            <input
              type="date"
              name="travelDate"
              required
              value={form.travelDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Return Date *
            </label>
            <input
              type="date"
              name="returnDate"
              required
              value={form.returnDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Evangelism */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Evangelism for this month (date) *
            </label>
            <input
              type="date"
              name="evangelismDate"
              required
              value={form.evangelismDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Submit Request
          </button>
        </form>
      </section>
    </>
  );
};

export default WorkersTravelRequest;
