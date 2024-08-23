import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AccessPointCreateInput = {
  description?: string | null;
  label: string;
  name: string;
  service?: ServiceWhereUniqueInput | null;
  url: string;
};
