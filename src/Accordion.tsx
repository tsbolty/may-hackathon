import { Accordion } from "@mantine/core";
import { Section } from "./types/techspec";

type Props = {
  data: Array<Section>;
};

export function DemoAccordion({ data }: Props) {
  const items = data.map((item) => (
    <Accordion.Item key={item.tag} value={item.tag}>
      <Accordion.Control>{item.name}</Accordion.Control>
      <Accordion.Panel>
        {item.fieldsAndLabels.map((field) => (
          <Accordion.Item key={field.label} value={field.label}>
            {/* <Accordion.Control>{field.label}</Accordion.Control> */}
            <div>{field.label}</div>
          </Accordion.Item>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return <Accordion defaultValue="Apples">{items}</Accordion>;
}
