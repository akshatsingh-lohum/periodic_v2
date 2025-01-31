import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ElementDropdownItem } from "@/data/elementDropdown1";

interface AccordionShadCnProps {
  filteredElement?: ElementDropdownItem;
}

export function AccordionShadCn({ filteredElement }: AccordionShadCnProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Details 1</AccordionTrigger>
        <AccordionContent>
          <p>Resources {filteredElement?.total_resources} </p>
          <p>State Resources {filteredElement?.state_resources} </p>
          <p>Reserves {filteredElement?.total_reserves}</p>
          <p>Reserves State {filteredElement?.total_reserves_state}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Details 2</AccordionTrigger>
        <AccordionContent>
          <p>Primary Sources {filteredElement?.primary_sources} </p>
          <p>Primary Capacity{filteredElement?.primary_capacity} </p>
          <p>Primary Prodn{filteredElement?.primary_production}</p>
          <p>Secondary Sources{filteredElement?.secondary_sources}</p>{" "}
          <p>Secondary Capacity{filteredElement?.secondary_capacity}</p>
          <p>Main companies{filteredElement?.main_companies}</p>
          <p>industrial_consumption{filteredElement?.industrial_consumption}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Details 3</AccordionTrigger>
        <AccordionContent>
          <p>Total Imports{filteredElement?.total_imports}</p>
          <p>Exports HSN{filteredElement?.total_exports}</p>
          <p>HSN{filteredElement?.hsn_codes}</p>
          <p>HSN Desc{filteredElement?.hsn_description}</p>
          <p>Imports{filteredElement?.imports_by_hsn}</p>
          <p>Total Exports{filteredElement?.exports_by_hsn}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
