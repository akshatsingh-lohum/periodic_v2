"use client";

import { useState } from "react";
import PeriodicTable from "@/components/PeriodicTable";
import RightSideDetails from "@/components/rightSideComponents/RightSideDetails";

import { Element } from "./categories/Element";

export default function Home() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element | null) => {
    setSelectedElement(element);
  };

  console.log("selectedElement", selectedElement);

  return (
    <div className="flex w-full">
      <div className="w-2/3 relative">
        <div className="absolute inset-0">
          <PeriodicTable onElementClick={handleElementClick} />
        </div>
      </div>
      <div className="w-1/3 relative">
        <RightSideDetails element={selectedElement} />
      </div>
    </div>
  );
}
