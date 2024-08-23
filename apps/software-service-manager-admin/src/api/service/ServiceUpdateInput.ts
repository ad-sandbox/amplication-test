import { AccessPointUpdateManyWithoutServicesInput } from "./AccessPointUpdateManyWithoutServicesInput";
import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";

export type ServiceUpdateInput = {
  accessPoints?: AccessPointUpdateManyWithoutServicesInput;
  description?: string | null;
  developer?: DeveloperWhereUniqueInput | null;
  label?: string;
  name?: string;
};
