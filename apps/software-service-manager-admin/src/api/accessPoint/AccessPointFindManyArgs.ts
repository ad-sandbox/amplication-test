import { AccessPointWhereInput } from "./AccessPointWhereInput";
import { AccessPointOrderByInput } from "./AccessPointOrderByInput";

export type AccessPointFindManyArgs = {
  where?: AccessPointWhereInput;
  orderBy?: Array<AccessPointOrderByInput>;
  skip?: number;
  take?: number;
};
