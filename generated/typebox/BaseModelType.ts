import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BaseModelTypePlain = t.Object({
  id: t.Integer(),
  name: t.String(),
  baseModelId: t.Integer(),
});

export const BaseModelTypeRelations = t.Object({
  modelVersions: t.Array(
    t.Object({
      id: t.Integer(),
      modelId: t.Integer(),
      name: t.String(),
      baseModelId: t.Integer(),
      baseModelTypeId: __nullable__(t.Integer()),
      publishedAt: __nullable__(t.Date()),
      nsfwLevel: t.Integer(),
      createdAt: t.Date(),
      updatedAt: t.Date(),
    }),
    { additionalProperties: true },
  ),
  baseModel: t.Object({ id: t.Integer(), name: t.String() }),
});

export const BaseModelTypePlainInputCreate = t.Object({ name: t.String() });

export const BaseModelTypePlainInputUpdate = t.Object({
  name: t.Optional(t.String()),
});

export const BaseModelTypeRelationsInputCreate = t.Object({
  modelVersions: t.Optional(
    t.Object({
      connect: t.Array(
        t.Object({
          id: t.Integer(),
        }),
        { additionalProperties: true },
      ),
    }),
  ),
  baseModel: t.Object({
    connect: t.Object({
      id: t.Integer(),
    }),
  }),
});

export const BaseModelTypeRelationsInputUpdate = t.Partial(
  t.Object({
    modelVersions: t.Partial(
      t.Object({
        connect: t.Array(
          t.Object({
            id: t.Integer(),
          }),
          { additionalProperties: true },
        ),
        disconnect: t.Array(
          t.Object({
            id: t.Integer(),
          }),
          { additionalProperties: true },
        ),
      }),
    ),
    baseModel: t.Object({
      connect: t.Object({
        id: t.Integer(),
      }),
    }),
  }),
);

export const BaseModelTypeWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.Integer(),
          name: t.String(),
          baseModelId: t.Integer(),
        },
        { additionalProperties: true },
      ),
    { $id: "BaseModelType" },
  ),
);

export const BaseModelTypeWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer(), name: t.String() },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [t.Object({ id: t.Integer() }), t.Object({ name: t.String() })],
          { additionalProperties: true },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
            NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
            OR: t.Array(Self, { additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
        t.Partial(
          t.Object({
            id: t.Integer(),
            name: t.String(),
            baseModelId: t.Integer(),
          }),
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "BaseModelType" },
);

export const BaseModelTypeSelect = t.Partial(
  t.Object({
    id: t.Boolean(),
    name: t.Boolean(),
    baseModelId: t.Boolean(),
    modelVersions: t.Boolean(),
    baseModel: t.Boolean(),
    _count: t.Boolean(),
  }),
);

export const BaseModelTypeInclude = t.Partial(
  t.Object({
    modelVersions: t.Boolean(),
    baseModel: t.Boolean(),
    _count: t.Boolean(),
  }),
);

export const BaseModelTypeOrderBy = t.Partial(
  t.Object({
    id: t.Union([t.Literal("asc"), t.Literal("desc")], {
      additionalProperties: true,
    }),
    name: t.Union([t.Literal("asc"), t.Literal("desc")], {
      additionalProperties: true,
    }),
    baseModelId: t.Union([t.Literal("asc"), t.Literal("desc")], {
      additionalProperties: true,
    }),
  }),
);

export const BaseModelType = t.Composite([
  BaseModelTypePlain,
  BaseModelTypeRelations,
]);

export const BaseModelTypeInputCreate = t.Composite([
  BaseModelTypePlainInputCreate,
  BaseModelTypeRelationsInputCreate,
]);

export const BaseModelTypeInputUpdate = t.Composite([
  BaseModelTypePlainInputUpdate,
  BaseModelTypeRelationsInputUpdate,
]);
