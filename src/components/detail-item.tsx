import { useRef } from "react";

import { TextInput } from "@bamboorose/br-components-2.0";

import { type Field } from "../types/section";

type Props = {
  field: Field;
};

export function DetailItem({ field }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <TextInput
      label={field.label}
      defaultValue={field.value}
      ref={inputRef}
      onChange={(e) => console.log({ [field.label]: e.target.value })}
    />
  );
}
