import { createId } from "@paralleldrive/cuid2";

// local dependencies
import { type Field } from "../types/section";
import { DetailItem } from "./detail-item";

type Props = {
  data?: Array<Field>;
};

export function Details({ data }: Props) {
  return (
    <div>
      <div>
        {data?.map((field) => (
          <DetailItem key={createId()} field={field} />
        ))}
      </div>
    </div>
  );
}
