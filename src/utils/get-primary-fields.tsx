import { Field, Section } from "../types/section";

export function getPrimaryFields(sections: Array<Section>): Array<Field> {
  const targetFields = ["ALT_DESC1", "DESCRIPTION", "ITEM_NO"];
  return sections.flatMap((section) =>
    section.fields.filter((field) => targetFields.includes(field.field))
  );
}
