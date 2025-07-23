"use client";
import React, { useState, useEffect } from "react";
import { Quote, BookOpen, Calendar, Sunrise, Heart } from "lucide-react";
import Modal from "./modal";
import {
  DailyReadingContent,
  ShareStoryContent,
} from "./daily-reading-content";

const dailyContent = [
  {
    type: "verse",
    content:
      "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11",
    theme: "Hope & Future",
    color: "from-[var(--primary)] to-purple-700",
  },
  {
    type: "teaching",
    content:
      "Satan thrives on the disobedience of men of God. Everytime we disobey God, Satan rejoices. That is why we must work out our salvation with fear and trembling.",
    author: "Pastor Michael Nzekwe",
    theme: "Obedience & Salvation",
    color: "from-slate-600 to-slate-800",
  },
  {
    type: "reflection",
    content:
      "Today, remember that God's grace is new every morning. His mercies never cease, and His faithfulness endures forever.",
    author: "Grace City Daily",
    theme: "Grace & Mercy",
    color: "from-amber-600 to-orange-700",
  },
];

const weeklyStats = [
  { label: "Lives Touched", value: "2,847", icon: Heart },
  { label: "Prayers Shared", value: "1,205", icon: BookOpen },
  { label: "Testimonies", value: "89", icon: Sunrise },
];

const ScriptureInspirationHub = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dailyReadingModal, setDailyReadingModal] = useState(false);
  const [shareStoryModal, setShareStoryModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % dailyContent.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = dailyContent[currentIndex];

  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-[var(--accent)] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full transform -translate-x-36 translate-y-36"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl text-[var(--dark-text)]">
              Daily Inspiration
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start each day with God's word and be inspired by our community's
            reflections
          </p>
        </div>

        {/* Main Content Card */}
        <div className="mb-16" data-aos="zoom-in" data-aos-delay="200">
          <div
            className={`relative bg-gradient-to-br ${
              currentContent.color
            } rounded-3xl p-8 md:p-12 text-white shadow-2xl transform transition-all duration-500 ${
              isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"
            }`}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote size={64} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium capitalize">
                    {currentContent.type}
                  </span>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    {currentContent.theme}
                  </span>
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6">
                "{currentContent.content}"
              </blockquote>

              <div className="flex items-center justify-between">
                <cite className="text-lg font-medium not-italic">
                  {currentContent.reference || `— ${currentContent.author}`}
                </cite>

                {/* Progress Indicators */}
                <div className="flex gap-2">
                  {dailyContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {weeklyStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-[var(--dark-text)] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Interactive Elements */}
        <div
          className="grid md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-full flex items-center justify-center">
                <Calendar className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-[var(--font-heading)] text-[var(--dark-text)]">
                Daily Devotional
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Join thousands in our 365-day journey through scripture with
              practical applications for modern life.
            </p>
            <button
              onClick={() => setDailyReadingModal(true)}
              className="bg-gradient-to-r from-[var(--primary)] to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Today's Reading
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-[var(--font-heading)] text-[var(--dark-text)]">
                Community Reflections
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Share how God's word has impacted your life and be encouraged by
              others' testimonies.
            </p>
            <button
              onClick={() => setShareStoryModal(true)}
              className="bg-gradient-to-r from-slate-600 to-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Share Your Story
            </button>
          </div>
        </div>

        {/* Daily Reading Modal */}
        <Modal
          isOpen={dailyReadingModal}
          onClose={() => setDailyReadingModal(false)}
          title="Today's Reading"
          maxWidth="xl"
        >
          <DailyReadingContent />
        </Modal>

        {/* Share Story Modal */}
        <Modal
          isOpen={shareStoryModal}
          onClose={() => setShareStoryModal(false)}
          title="Share Your Story"
          maxWidth="2xl"
        >
          <ShareStoryContent onClose={() => setShareStoryModal(false)} />
        </Modal>
      </div>
    </section>
  );
};

export default ScriptureInspirationHub;
