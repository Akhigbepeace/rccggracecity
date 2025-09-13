import React from "react";

type SectionTitleProp = { title: string };

const SectionTitle = ({ title }: SectionTitleProp) => {
  return (
    <h2 className="text-3xl md:text-4xl relative inline-block text-darkText">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary mb-2">
        {title}
      </span>
      {/* <span className="block w-20 h-1 bg-gradient-to-r from-primary via-purple-400 to-primary mt-2 rounded-full animate-pulse" /> */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/60 rounded-full"></div>
        <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
        <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
        <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/60 rounded-full"></div>
      </div>
    </h2>
  );
};

export default SectionTitle;
