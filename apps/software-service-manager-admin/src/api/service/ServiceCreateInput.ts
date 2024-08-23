import { AccessPointCreateNestedManyWithoutServicesInput } from "./AccessPointCreateNestedManyWithoutServicesInput";
import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";

export type ServiceCreateInput = {
  accessPoints?: AccessPointCreateNestedManyWithoutServicesInput;
  description?: string | null;
  developer?: DeveloperWhereUniqueInput | null;
  label: string;
  name: string;
};
