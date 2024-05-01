export type Section = {
  name: string;
  fields: Array<Field>;
};

export type Field = {
  field: string;
  label: string;
  datatype: string;
  table: string;
  value: string;
  acl: number;
};
