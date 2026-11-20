/*
  Warnings:

  - Changed the type of `status` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('READY', 'BOOKED', 'MAINTAIN', 'DISCHARGE');

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "registrationNumber" SET DATA TYPE TEXT,
ALTER COLUMN "notes" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "StatusType" NOT NULL;

-- DropEnum
DROP TYPE "Status";
