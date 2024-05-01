import { type Field } from "../types/section";
import "./AccordionRow.css";

export function AccordionRow({ field }: { field: Field }) {
  return (
    <div className="row-container">
      <div>{field.label}</div>
      <div>{field.value}</div>
    </div>
  );
}
