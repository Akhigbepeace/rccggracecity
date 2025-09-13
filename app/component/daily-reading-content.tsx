"use client";

import React, { useState } from "react";
import { Calendar, Share2, Check, Send } from "lucide-react";

// Daily Reading Modal Content
export const DailyReadingContent = () => {
  // const [isMarkedRead, setIsMarkedRead] = useState(false);

  // This would typically come from your API/database
  const todaysReading = {
    date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    reference: "Philippians 4:13",
    passage: "I can do all things through Christ who strengthens me.",
    reflection:
      "Today's verse reminds us that our strength doesn't come from our own abilities, but from Christ who empowers us. When we face challenges that seem impossible, we can lean on His strength and find the courage to move forward.",
    prayer:
      "Lord, help me to remember that my strength comes from You. When I feel weak or overwhelmed, remind me that through You, I can overcome any obstacle. Fill me with Your strength today.",
    dayNumber: 195,
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Today's Reading - ${todaysReading.reference}`,
        text: `"${todaysReading.passage}" - ${todaysReading.reference}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(
        `"${todaysReading.passage}" - ${todaysReading.reference}`
      );
      alert("Verse copied to clipboard!");
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-100 pb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="text-primary" size={20} />
          <span className="text-sm font-medium text-gray-600">
            Day {todaysReading.dayNumber} of 365
          </span>
        </div>
        <h3 className="text-lg font-semibold text-darkText">
          {todaysReading.date}
        </h3>
      </div>

      {/* Scripture */}
      <div className="text-center space-y-4">
        <h4 className="text-xl   text-primary">{todaysReading.reference}</h4>
        <blockquote className="text-2xl   text-darkText leading-relaxed italic">
          <q>{todaysReading.passage}</q>
        </blockquote>
      </div>

      {/* Reflection */}
      <div className="space-y-3">
        <h5 className="font-semibold text-darkText text-lg">
          Today&apos;s Reflection
        </h5>
        <p className="text-gray-700 leading-relaxed">
          {todaysReading.reflection}
        </p>
      </div>

      {/* Prayer */}
      <div className="bg-[var(--accent)] rounded-lg p-4 space-y-3">
        <h5 className="font-semibold text-darkText">Prayer for Today</h5>
        <p className="text-gray-700 italic leading-relaxed">
          {todaysReading.prayer}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
        {/* Mark as Read */}
        {/* <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isMarkedRead}
            onChange={(e) => setIsMarkedRead(e.target.checked)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
              isMarkedRead
                ? "bg-primary border-primary"
                : "border-gray-300 hover:border-primary"
            }`}
          >
            {isMarkedRead && <Check size={12} className="text-white" />}
          </div>
          <span className="text-gray-700">Mark as read</span>
        </label> */}

        {/* Bottom Actions */}
        <div className="flex items-center justify-between">
          {/* <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <ChevronLeft size={20} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <ChevronRight size={20} className="text-gray-500" />
            </button>
          </div> */}

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-purple-600 transition-colors duration-200"
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

// Share Story Modal Content
export const ShareStoryContent = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    story: "",
    isAnonymous: false,
    allowContact: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    "Healing & Recovery",
    "Financial Breakthrough",
    "Relationship Restoration",
    "Career & Purpose",
    "Family Blessing",
    "Spiritual Growth",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Check size={32} className="text-green-600" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl   text-darkText">Thank You for Sharing!</h3>
          <p className="text-gray-600 leading-relaxed">
            Your story has been submitted and will be reviewed by our team. We
            appreciate you sharing how God has worked in your life.
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name {formData.isAnonymous && "(Optional)"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Your name"
                required={!formData.isAnonymous}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Anonymous Option */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleInputChange}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                formData.isAnonymous
                  ? "bg-primary border-primary"
                  : "border-gray-300 hover:border-primary"
              }`}
            >
              {formData.isAnonymous && (
                <Check size={12} className="text-white" />
              )}
            </div>
            <span className="text-gray-700">Share anonymously</span>
          </label>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Story Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Story */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Story
          </label>
          <textarea
            name="story"
            value={formData.story}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Share how God has worked in your life..."
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            Minimum 50 characters ({formData.story.length}/50)
          </p>
        </div>

        {/* Contact Permission */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="allowContact"
            checked={formData.allowContact}
            onChange={handleInputChange}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 mt-0.5 ${
              formData.allowContact
                ? "bg-primary border-primary"
                : "border-gray-300 hover:border-primary"
            }`}
          >
            {formData.allowContact && (
              <Check size={12} className="text-white" />
            )}
          </div>
          <span className="text-sm text-gray-700 leading-relaxed">
            I give permission for Grace City to contact me about featuring my
            story in church services, publications, or other ministry materials.
          </span>
        </label>

        {/* Submit Button */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || formData.story.length < 50}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send size={16} />
                Share Story
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
