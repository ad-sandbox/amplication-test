import { AccessPointListRelationFilter } from "../accessPoint/AccessPointListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ServiceWhereInput = {
  accessPoints?: AccessPointListRelationFilter;
  description?: StringNullableFilter;
  developer?: DeveloperWhereUniqueInput;
  id?: StringFilter;
  label?: StringFilter;
  name?: StringFilter;
};
