import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import { NumberInput, TextInput } from "@mantine/core";
import { DatePickerInput, type DateValue } from "@mantine/dates";
import { Checkbox } from "@bamboorose/br-components-2.0";

import { type Field } from "../types/section";
import classes from "./AccordionRow.module.css";

export function AccordionRow({ field }: { field: Field }) {
  return (
    <div className={classes.rowContainer}>
      <div className={classes.field}>{field.label}</div>
      <div className={classes.value}>
        <InlineEdit
          value={field.value}
          datatype={field.datatype}
          handleChange={(value) => console.log("VALUE ", value)}
          acl={field.acl}
        />
      </div>
    </div>
  );
}

function InlineEdit({
  value,
  datatype,
  handleChange,
  acl,
}: {
  value: string;
  datatype: string;
  handleChange: (value: string) => void;
  acl: number;
}) {
  const [debouncedValue] = useDebounce(value, 500);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    handleChange(debouncedValue);
  }, [debouncedValue]);

  switch (datatype) {
    case "VARCHAR":
      return (
        <TextInput
          value={inputValue}
          onBlur={(e) => handleChange(e.target.value)}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value here"
          variant="outlined"
          disabled={(acl & 0b0010) == 0}
        />
      );
    case "DECIMAL":
    case "INTEGER":
      return (
        <NumberInput
          value={Number(inputValue)}
          onChange={(value) => setInputValue(String(value))}
          onBlur={(value) => handleChange(String(value))}
          variant="outlined"
          disabled={(acl & 0b0010) == 0}
        />
      );
    case "DATE":
      return (
        <DatePickerInput
          placeholder="Pick date"
          value={!!value ? new Date(value) : null}
          onChange={(value: DateValue) => handleChange(String(value))}
          variant="outlined"
          disabled={(acl & 0b0010) == 0}
        />
      );
    case "BOOLEAN":
      return (
        <Checkbox
          checked={inputValue === "true"}
          onChange={(e) => {
            setInputValue(e.target.checked ? "true" : "false");
            handleChange(e.target.checked ? "true" : "false");
          }}
          disabled={(acl & 0b0010) == 0}
        />
      );
    default:
      return (
        <TextInput
          value={value}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => handleChange(e.target.value)}
          disabled={(acl & 0b0010) == 0}
        />
      );
  }
}
