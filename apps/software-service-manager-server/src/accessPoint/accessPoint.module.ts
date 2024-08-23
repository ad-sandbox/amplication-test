import { Module } from "@nestjs/common";
import { AccessPointModuleBase } from "./base/accessPoint.module.base";
import { AccessPointService } from "./accessPoint.service";
import { AccessPointController } from "./accessPoint.controller";
import { AccessPointResolver } from "./accessPoint.resolver";

@Module({
  imports: [AccessPointModuleBase],
  controllers: [AccessPointController],
  providers: [AccessPointService, AccessPointResolver],
  exports: [AccessPointService],
})
export class AccessPointModule {}
