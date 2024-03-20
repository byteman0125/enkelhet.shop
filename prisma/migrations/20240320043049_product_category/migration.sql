-- CreateEnum
CREATE TYPE "SeriesType" AS ENUM ('lounge', 'alabaster', 'capsule');

-- CreateEnum
CREATE TYPE "FinishType" AS ENUM ('Oak', 'Ash', 'Walnut', 'Wenge');

-- CreateTable
CREATE TABLE "Series" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "finish" "FinishType" NOT NULL,
    "slug" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "title" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "serieId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Series_name_key" ON "Series"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_serieId_idx" ON "Product"("serieId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
