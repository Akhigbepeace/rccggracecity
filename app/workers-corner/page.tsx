"use client";

import Image from "next/image";
import { useState } from "react";
import { BsSendArrowDownFill } from "react-icons/bs";
import Modal from "../component/modal";

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

const WorkersTravelRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(defaultValue);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/travel-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setShowModal(true);
        setForm(defaultValue);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to send request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
            className={`w-full cursor-pointer bg-primary text-white px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-purple-600"
              }`}
          >
            {isSubmitting ? (
              <>
                Sending...
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                Send Request
                <BsSendArrowDownFill size={18} />
              </>
            )}
          </button>

        </form>
      </section>

      <Modal isOpen={showModal}
        showCloseButton={false}
        onClose={() => setShowModal(false)}
      >
        <div className="p-6 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Travel Request Sent!
          </h2>
          <p className="text-gray-600 mb-6">
            Your travel request has been successfully submitted. The department in
            charge will review it shortly.
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="bg-primary cursor-pointer text-white px-6 py-2 rounded-full hover:bg-purple-600 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default WorkersTravelRequest;
