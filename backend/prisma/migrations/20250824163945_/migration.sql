-- CreateEnum
CREATE TYPE "public"."Instrument" AS ENUM ('TRUMPET', 'BASS', 'SAX', 'CLARINET', 'TROMBONE', 'FLUTE', 'HORN', 'MAJORETTE');

-- CreateTable
CREATE TABLE "public"."Users" (
    "userId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "instrument" "public"."Instrument" NOT NULL,
    "password" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");
