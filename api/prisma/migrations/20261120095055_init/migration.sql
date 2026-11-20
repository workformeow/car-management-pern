-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('HYBRID', 'EV', 'PHEV', 'GASOLINE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('READY', 'BOOKED', 'MAINTAIN', 'DISCHARGE');

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "registrationNumber" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "province" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "fuelType" "FuelType" NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
