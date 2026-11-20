/*
  Warnings:

  - A unique constraint covering the columns `[vehicleId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Car_vehicleId_key" ON "Car"("vehicleId");
