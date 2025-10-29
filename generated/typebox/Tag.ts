import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TagPlain = t.Object({ id: t.Integer(), name: t.String() });

export const TagRelations = t.Object({
  models: t.Array(
    t.Object({
      id: t.Integer(),
      name: t.String(),
      creatorId: __nullable__(t.Integer()),
      typeId: t.Integer(),
      nsfw: t.Boolean(),
      nsfwLevel: t.Integer(),
      createdAt: t.Date(),
      updatedAt: t.Date(),
      previewFile: __nullable__(t.String()),
    }),
    { additionalProperties: true },
  ),
});

export const TagPlainInputCreate = t.Object({ name: t.String() });

export const TagPlainInputUpdate = t.Object({ name: t.Optional(t.String()) });

export const TagRelationsInputCreate = t.Object({
  models: t.Optional(
    t.Object({
      connect: t.Array(
        t.Object({
          id: t.Integer(),
        }),
        { additionalProperties: true },
      ),
    }),
  ),
});

export const TagRelationsInputUpdate = t.Partial(
  t.Object({
    models: t.Partial(
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
  }),
);

export const TagWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.Integer(),
          name: t.String(),
        },
        { additionalProperties: true },
      ),
    { $id: "Tag" },
  ),
);

export const TagWhereUnique = t.Recursive(
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
        t.Partial(t.Object({ id: t.Integer(), name: t.String() })),
      ],
      { additionalProperties: true },
    ),
  { $id: "Tag" },
);

export const TagSelect = t.Partial(
  t.Object({
    id: t.Boolean(),
    name: t.Boolean(),
    models: t.Boolean(),
    _count: t.Boolean(),
  }),
);

export const TagInclude = t.Partial(
  t.Object({ models: t.Boolean(), _count: t.Boolean() }),
);

export const TagOrderBy = t.Partial(
  t.Object({
    id: t.Union([t.Literal("asc"), t.Literal("desc")], {
      additionalProperties: true,
    }),
    name: t.Union([t.Literal("asc"), t.Literal("desc")], {
      additionalProperties: true,
    }),
  }),
);

export const Tag = t.Composite([TagPlain, TagRelations]);

export const TagInputCreate = t.Composite([
  TagPlainInputCreate,
  TagRelationsInputCreate,
]);

export const TagInputUpdate = t.Composite([
  TagPlainInputUpdate,
  TagRelationsInputUpdate,
]);
