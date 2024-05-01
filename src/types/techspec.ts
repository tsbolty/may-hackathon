export type Section = {
  name: string;
  tag: string;
  fieldsAndLabels: Array<{
    field: string;
    label: string;
    datatype: string;
    isShowDescription: boolean;
    table: string;
  }>;
};
