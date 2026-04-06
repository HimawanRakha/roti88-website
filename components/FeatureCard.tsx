import React from "react";

type IconType = "truck" | "heart" | "box" | "check";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: IconType;
}

const icons: Record<IconType, React.ReactNode> = {
  truck: (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-icon lucide-truck">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heater-icon lucide-heater">
      <path d="M11 8c2-3-2-3 0-6" />
      <path d="M15.5 8c2-3-2-3 0-6" />
      <path d="M6 10h.01" />
      <path d="M6 14h.01" />
      <path d="M10 16v-4" />
      <path d="M14 16v-4" />
      <path d="M18 16v-4" />
      <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </svg>
  ),
  box: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-cake-slice-icon lucide-cake-slice"
    >
      <path d="M16 13H3" />
      <path d="M16 17H3" />
      <path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" />
      <circle cx="9" cy="7" r="2" />
    </svg>
  ),
  check: <img src="/images/halal.png" alt="Halal Indonesia" className="w-full h-full object-contain  " />,
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon }) => {
  return (
    <div className="bg-white font-lora rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 text-center flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-1">
      <div className={`${icon === "check" ? "w-12 h-12 sm:w-16 sm:h-16" : "w-10 h-10 sm:w-16 sm:h-16"} mb-3 sm:mb-5 flex items-center justify-center text-[#FF7A00]`}>{icons[icon]}</div>
      <h3 className="font-bold text-[16px] sm:text-2xl text-black mb-2 sm:mb-3">{title}</h3>
      <p className="text-[13px] sm:text-lg text-gray-500">{desc}</p>
    </div>
  );
};
