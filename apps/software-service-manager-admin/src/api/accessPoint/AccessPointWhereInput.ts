import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AccessPointWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  label?: StringFilter;
  name?: StringFilter;
  service?: ServiceWhereUniqueInput;
  url?: StringFilter;
};
