"use client";

import { elementData } from "@/data/elementData";
import ElementBox from "./ElementBox";

import { useState } from "react";

import { ElementCategory } from "@/app/categories/ElementCategory";

interface Element {
  number: number;
  symbol: string;
  category: ElementCategory;
  group: number;
  period: number;
  weight: string;
}

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(-1);

  const getElementByPosition = (
    group: number,
    period: number
  ): Element | undefined => {
    return elementData.find((el) => el.group === group && el.period === period);
  };

  const handleElementClick = (elementNumber: number): void => {
    setSelectedElement(elementNumber);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between mb-7">
        <h2 className="text-2xl font-bold mb-3">The Critical Minerals Grid</h2>
      </div>
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8.5, 9.5].map((period) =>
          Array.from({ length: 18 }, (_, index) => {
            const element = getElementByPosition(index + 1, period);
            if (!element) return <div key={`${period}-${index}`} />;

            return (
              <ElementBox
                key={element.symbol}
                number={element.number}
                symbol={element.symbol}
                weight={element.weight}
                category={element.category}
                isSelected={selectedElement === element.number}
                onClick={() => handleElementClick(element.number)}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
