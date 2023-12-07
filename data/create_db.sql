BEGIN;

DROP TABLE IF EXISTS "user", "operation", "category", "movement";

CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" VARCHAR(128) UNIQUE NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "firstname" VARCHAR(128) NOT NULL,
    "lastname" VARCHAR(128) NOT NULL,
    "birthyear" DATE NOT NULL,
    "role" VARCHAR(128) DEFAULT 'user',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "operation" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) NOT NULL,
    "color" VARCHAR(128),
    "operation_id" INTEGER REFERENCES operation("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "movement" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" VARCHAR(128) NOT NULL,
    CONSTRAINT check_type CHECK (type IN ('Ponctuelle', 'Mensuelle')),
    "amount" FLOAT NOT NULL,
    "comment" VARCHAR(128) NOT NULL DEFAULT 'Divers',
    "operation_id" INTEGER REFERENCES operation("id"),
    "category_id" INTEGER REFERENCES category("id"),
    "user_id" INTEGER REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

END;