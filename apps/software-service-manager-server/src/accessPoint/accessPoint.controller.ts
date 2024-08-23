import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessPointService } from "./accessPoint.service";
import { AccessPointControllerBase } from "./base/accessPoint.controller.base";

@swagger.ApiTags("accessPoints")
@common.Controller("accessPoints")
export class AccessPointController extends AccessPointControllerBase {
  constructor(protected readonly service: AccessPointService) {
    super(service);
  }
}
