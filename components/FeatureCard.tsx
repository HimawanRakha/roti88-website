import React from "react";

type IconType = "truck" | "heart" | "box" | "check";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: IconType;
}

const icons: Record<IconType, React.ReactNode> = {
  truck: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  heart: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  box: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  check: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
    </svg>
  ),
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 text-center flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-1">
      <div className="w-10 h-10 sm:w-16 sm:h-16 mb-3 sm:mb-5 flex items-center justify-center text-[#FF7A00]">{icons[icon]}</div>
      <h3 className="font-bold text-[16px] sm:text-2xl text-black mb-2 sm:mb-3">{title}</h3>
      <p className="text-[13px] sm:text-lg text-gray-500 leading-tight">{desc}</p>
    </div>
  );
};
