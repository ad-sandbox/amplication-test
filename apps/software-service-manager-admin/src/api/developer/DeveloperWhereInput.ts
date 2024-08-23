import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type DeveloperWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  services?: ServiceListRelationFilter;
  username?: StringFilter;
};
