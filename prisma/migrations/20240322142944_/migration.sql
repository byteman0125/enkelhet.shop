/*
  Warnings:

  - You are about to drop the column `seating_height` on the `Measurements` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Measurements" DROP COLUMN "seating_height",
ADD COLUMN     "seat_height" INTEGER;
