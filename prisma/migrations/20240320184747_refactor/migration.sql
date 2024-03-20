/*
  Warnings:

  - Added the required column `finish` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Finish" AS ENUM ('Oak', 'Ash', 'Walnut', 'Wenge');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "finish" "Finish" NOT NULL;
