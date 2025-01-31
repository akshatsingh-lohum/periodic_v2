import { Element } from "@/app/categories/Element";
import { AccordionShadCn } from "./AccordionShadCn";

import elementDropdown1 from "@/data/elementDropdown1";
import elementDropdownBunch from "@/data/elementDropDownBunch";
import { ElementDropdownItem } from "@/data/elementDropdown1";

interface RightSideDetailsProps {
  element: Element | null;
}

export default function RightSideDetails({ element }: RightSideDetailsProps) {
  if (!element) {
    return <div className="p-4">Select an element to view details</div>;
  }

  const elementNumber = element.number;
  console.log("Changed element no is ", elementNumber, typeof elementNumber);

  // const filteredElement = elementDropdown1.find((item) => {
  //   return item.number === elementNumber;
  // });

  let filteredElement: ElementDropdownItem | undefined;

  if (
    (elementNumber >= 44 && elementNumber <= 46) ||
    (elementNumber >= 76 && elementNumber <= 78)
  ) {
    filteredElement = elementDropdownBunch.find(
      (element) => element.number == 1001
    );
  } else if (
    (elementNumber >= 21 && elementNumber <= 39) ||
    (elementNumber >= 57 && elementNumber <= 71)
  ) {
    filteredElement = elementDropdownBunch.find(
      (element) => element.number === 1002
    );
  } else {
    filteredElement = elementDropdown1.find(
      (element) => element.number == elementNumber
    );
  }

  console.log(filteredElement);

  return (
    <div className="p-4">
      <h3>Symbol: {element.symbol}</h3>
      <p>Description : {filteredElement?.description || ""} </p>
      <AccordionShadCn filteredElement={filteredElement} />
    </div>
  );
}
