import { ServiceCreateNestedManyWithoutDevelopersInput } from "./ServiceCreateNestedManyWithoutDevelopersInput";

export type DeveloperCreateInput = {
  email?: string | null;
  name: string;
  services?: ServiceCreateNestedManyWithoutDevelopersInput;
  username: string;
};
