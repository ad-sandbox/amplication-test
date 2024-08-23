/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Service } from "./Service";
import { ServiceCountArgs } from "./ServiceCountArgs";
import { ServiceFindManyArgs } from "./ServiceFindManyArgs";
import { ServiceFindUniqueArgs } from "./ServiceFindUniqueArgs";
import { CreateServiceArgs } from "./CreateServiceArgs";
import { UpdateServiceArgs } from "./UpdateServiceArgs";
import { DeleteServiceArgs } from "./DeleteServiceArgs";
import { AccessPointFindManyArgs } from "../../accessPoint/base/AccessPointFindManyArgs";
import { AccessPoint } from "../../accessPoint/base/AccessPoint";
import { Developer } from "../../developer/base/Developer";
import { ServiceService } from "../service.service";
@graphql.Resolver(() => Service)
export class ServiceResolverBase {
  constructor(protected readonly service: ServiceService) {}

  async _servicesMeta(
    @graphql.Args() args: ServiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Service])
  async services(
    @graphql.Args() args: ServiceFindManyArgs
  ): Promise<Service[]> {
    return this.service.services(args);
  }

  @graphql.Query(() => Service, { nullable: true })
  async service(
    @graphql.Args() args: ServiceFindUniqueArgs
  ): Promise<Service | null> {
    const result = await this.service.service(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Service)
  async createService(
    @graphql.Args() args: CreateServiceArgs
  ): Promise<Service> {
    return await this.service.createService({
      ...args,
      data: {
        ...args.data,

        developer: args.data.developer
          ? {
              connect: args.data.developer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Service)
  async updateService(
    @graphql.Args() args: UpdateServiceArgs
  ): Promise<Service | null> {
    try {
      return await this.service.updateService({
        ...args,
        data: {
          ...args.data,

          developer: args.data.developer
            ? {
                connect: args.data.developer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Service)
  async deleteService(
    @graphql.Args() args: DeleteServiceArgs
  ): Promise<Service | null> {
    try {
      return await this.service.deleteService(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [AccessPoint], { name: "accessPoints" })
  async findAccessPoints(
    @graphql.Parent() parent: Service,
    @graphql.Args() args: AccessPointFindManyArgs
  ): Promise<AccessPoint[]> {
    const results = await this.service.findAccessPoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Developer, {
    nullable: true,
    name: "developer",
  })
  async getDeveloper(
    @graphql.Parent() parent: Service
  ): Promise<Developer | null> {
    const result = await this.service.getDeveloper(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
