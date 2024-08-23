import { ServiceUpdateManyWithoutDevelopersInput } from "./ServiceUpdateManyWithoutDevelopersInput";

export type DeveloperUpdateInput = {
  email?: string | null;
  name?: string;
  services?: ServiceUpdateManyWithoutDevelopersInput;
  username?: string;
};
