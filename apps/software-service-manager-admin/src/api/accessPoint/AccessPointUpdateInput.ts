import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AccessPointUpdateInput = {
  description?: string | null;
  label?: string;
  name?: string;
  service?: ServiceWhereUniqueInput | null;
  url?: string;
};
