-- CreateEnum
CREATE TYPE "Series" AS ENUM ('lounge', 'alabaster', 'capsule');

-- CreateEnum
CREATE TYPE "Finish" AS ENUM ('oak', 'ash', 'walnut', 'wenge');

-- CreateTable
CREATE TABLE "Measurements" (
    "id" TEXT NOT NULL,
    "total_height" INTEGER,
    "seating_height" INTEGER,
    "width" INTEGER,
    "depth" INTEGER,

    CONSTRAINT "Measurements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inStock" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "slug" TEXT NOT NULL,
    "tags" TEXT[],
    "series" "Series" NOT NULL,
    "finish" "Finish"[],
    "measurementsId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Measurements_id_key" ON "Measurements"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE INDEX "Product_series_idx" ON "Product"("series");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_measurementsId_fkey" FOREIGN KEY ("measurementsId") REFERENCES "Measurements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
