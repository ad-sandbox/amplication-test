import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessPointServiceBase } from "./base/accessPoint.service.base";

@Injectable()
export class AccessPointService extends AccessPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
