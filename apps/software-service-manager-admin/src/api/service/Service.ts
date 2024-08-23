import { AccessPoint } from "../accessPoint/AccessPoint";
import { Developer } from "../developer/Developer";

export type Service = {
  accessPoints?: Array<AccessPoint>;
  createdAt: Date;
  description: string | null;
  developer?: Developer | null;
  id: string;
  label: string;
  name: string;
  updatedAt: Date;
};
