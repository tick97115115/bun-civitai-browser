import { prisma } from "../../../db/service";
import type { Model } from "../../models/models_endpoint";
import { findOrCreateOneCreator } from "./creator";
import { findOrCreateOneModelType } from "./modelType";
import { ModelsRequestOpts } from "../../models/models_endpoint";

export async function findOrCreateOneModelId(modelId: Model) {
  const creatorRecord = modelId.creator
    ? await findOrCreateOneCreator(modelId.creator)
    : undefined;
  const modelTypeRecord = await findOrCreateOneModelType(modelId.type);

  const record = await prisma.model.upsert({
    where: {
      id: modelId.id,
    },
    update: {},
    create: {
      id: modelId.id,
      name: modelId.name,
      creatorId: creatorRecord ? creatorRecord.id : undefined,
      typeId: modelTypeRecord.id,
      nsfw: modelId.nsfw,
      nsfwLevel: modelId.nsfwLevel,
      tags: {
        connectOrCreate: modelId.tags.map((tag) => ({
          where: { name: tag },
          create: { name: tag },
        })),
      },
    },
  });
  return record;
}

export async function findManyModels(params: ModelsRequestOpts) {
  const [records, totalCount] = await prisma.$transaction([
    prisma.model.findMany({
      where: {
        name: {
          contains: params.query,
        },
        tags: {
          some: {
            name: { in: params.tag },
          },
        },
        creator: {
          username: params.username,
        },
        type: {
          name: { in: params.types },
        },
        nsfw: params.nsfw,
        modelVersions: {
          some: {
            baseModel: {
              name: { in: params.baseModels },
            },
          },
        },
      },
      skip: (params.page - 1) * params.limit, // have to migrate to cursor based query
      take: params.limit,

      include: {
        creator: true,
        modelVersions: true,
        tags: true,
        type: true,
      },
    }),
    prisma.model.count({
      where: {
        name: {
          contains: params.query,
        },
        tags: {
          some: {
            name: { in: params.tag },
          },
        },
        creator: {
          username: params.username,
        },
        type: {
          name: { in: params.types },
        },
        nsfw: params.nsfw,
        modelVersions: {
          some: {
            baseModel: {
              name: { in: params.baseModels },
            },
          },
        },
      },
    }),
  ]);
  return { records, totalCount };
}
