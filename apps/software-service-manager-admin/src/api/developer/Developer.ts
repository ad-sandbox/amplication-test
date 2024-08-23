import { Service } from "../service/Service";

export type Developer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string;
  services?: Array<Service>;
  updatedAt: Date;
  username: string;
};
