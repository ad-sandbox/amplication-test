import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  developerId?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
