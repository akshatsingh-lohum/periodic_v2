"use client";

import { ElementCategory } from "@/app/categories/ElementCategory";

interface ElementBoxProps {
  number: number;
  symbol: string;
  weight: string;
  category: ElementCategory;
  isSelected: boolean;
  onClick: () => void;
}

function ElementBox({
  number,
  symbol,
  weight,
  category,
  onClick,
}: ElementBoxProps) {
  const getBackgroundColor = () => {
    switch (category) {
      case ElementCategory.Critical:
        return "bg-cyan-700"; // Rich purple
      case ElementCategory.Platinum:
        return "bg-amber-400"; // Warm gold
      case ElementCategory.RareEarth:
        return "bg-emerald-400"; // Vibrant green
      default:
        return "bg-slate-300"; // Cool gray
    }
  };

  return (
    <div
      onClick={onClick}
      className={`p-1 border border-gray-300 ${getBackgroundColor()} hover:scale-110 transition-transform duration-200`}
    >
      <div className="text-xs text-right">{number}</div>
      <div className="text-lg font-bold text-center">{symbol}</div>
      {/* <div className="text-xs truncate text-center">{name}</div> */}
      <div className="text-xs text-gray-600 text-center">{weight}</div>
    </div>
  );
}

export default ElementBox;
