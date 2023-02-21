/*
  Warnings:

  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "jobs";

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "society" TEXT,
    "description" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
