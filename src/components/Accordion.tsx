import { Accordion } from "@mantine/core";
import { Section } from "../types/section";

import { AccordionRow } from "./AccordionRow";

type Props = {
  data: Array<Section>;
};

export function DemoAccordion({ data }: Props) {
  const items = data.map((item) => (
    <Accordion.Item key={item.name} value={item.name}>
      <Accordion.Control>{item.name}</Accordion.Control>
      <Accordion.Panel>
        {item.fields.map((field) => (
          <Accordion.Item key={field.label} value={field.label}>
            <AccordionRow field={field} />
          </Accordion.Item>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return <Accordion defaultValue="Apples">{items}</Accordion>;
}
