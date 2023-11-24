import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { WayWiser } from "./waywiser";
import { BoxwoodMeans } from "./boxwoodmeans";
import { DeltaNYC } from "./deltanyc";
import { Vspacer } from "./vspacer";

export const Acctwo = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title:
      "font-bold text-3xl sm:text-5xl tracking-tight text-dgray mx-4 sm:mx-20",
    trigger:
      "data-[hover=true]:bg-high rounded-none h-20 pr-4 sm:pr-20 flex items-center",
    indicator: "text-medium",
    content: "text-small",
  };

  const defaultContent = "Lorem ipsum dolor sit";

  return (
    <Accordion
      showDivider={true}
      className="px-0"
      itemClasses={itemClasses}
      selectionMode="multiple"
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="WayWiser">
        <WayWiser />
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2" title="Boxwood Means">
        <BoxwoodMeans />
      </AccordionItem>

      <AccordionItem key="3" aria-label="Accordion 3" title="Delta Nonstop NYC">
        <DeltaNYC />
      </AccordionItem>
    </Accordion>
  );
};
