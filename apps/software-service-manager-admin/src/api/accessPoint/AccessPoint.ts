import { Service } from "../service/Service";

export type AccessPoint = {
  createdAt: Date;
  description: string | null;
  id: string;
  label: string;
  name: string;
  service?: Service | null;
  updatedAt: Date;
  url: string;
};
