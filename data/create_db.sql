BEGIN;

DROP TABLE IF EXISTS "user", "operation", "category", "movement";

CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" VARCHAR(128) UNIQUE NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "firstname" VARCHAR(128) NOT NULL,
    "lastname" VARCHAR(128) NOT NULL,
    "age" INTEGER NOT NULL,
    "role" VARCHAR(128) DEFAULT 'user'
);

CREATE TABLE "operation" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) NOT NULL
);

CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) NOT NULL,
    "operation_id" INTEGER REFERENCES operation("id")
);

CREATE TABLE "movement" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" VARCHAR(128) NOT NULL,
    "amount" INTEGER NOT NULL,
    "operation_id" INTEGER REFERENCES operation("id"),
    "category_id" INTEGER REFERENCES category("id"),
    "user_id" INTEGER REFERENCES "user"("id")
);

END;