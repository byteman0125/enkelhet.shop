/*
  Warnings:

  - You are about to drop the column `isPayed` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "isPayed",
ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false;
