import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="relative mb-16">
      <h2 className="text-4xl md:text-6xl font-bold text-navy-blue text-center">
        {children}
      </h2>
      <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-24 h-1 bg-golden rounded-full" />
    </div>
  );
};

export default SectionTitle;
