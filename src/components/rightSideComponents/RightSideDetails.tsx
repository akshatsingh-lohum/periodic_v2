import { Element } from "@/app/categories/Element";
import elementDropdown1 from "@/data/elementDropdown1";
import { Accordion } from "@radix-ui/react-accordion";
import { AccordionShadCn } from "./AccordionShadCn";

interface RightSideDetailsProps {
  element: Element | null;
}

export default function RightSideDetails({ element }: RightSideDetailsProps) {
  if (!element) {
    return <div className="p-4">Select an element to view details</div>;
  }

  const elementNumber = element.number;
  console.log("Changed element no is ", elementNumber, typeof elementNumber);

  const elementDetails1 = elementDropdown1.find((item) => {
    return item.number === elementNumber;
  });

  return (
    <div className="p-4">
      <h3>Symbol: {element.symbol}</h3>
      <p>
        Element Dropdown5 :{" "}
        {elementDetails1?.total_reserves_by_state || "Unknown"}{" "}
      </p>
      <AccordionShadCn />
    </div>
  );
}
