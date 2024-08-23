import { AccessPoint as TAccessPoint } from "../api/accessPoint/AccessPoint";

export const ACCESSPOINT_TITLE_FIELD = "name";

export const AccessPointTitle = (record: TAccessPoint): string => {
  return record.name?.toString() || String(record.id);
};
