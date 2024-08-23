import * as graphql from "@nestjs/graphql";
import { AccessPointResolverBase } from "./base/accessPoint.resolver.base";
import { AccessPoint } from "./base/AccessPoint";
import { AccessPointService } from "./accessPoint.service";

@graphql.Resolver(() => AccessPoint)
export class AccessPointResolver extends AccessPointResolverBase {
  constructor(protected readonly service: AccessPointService) {
    super(service);
  }
}
