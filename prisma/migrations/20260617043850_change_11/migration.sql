/*
  Warnings:

  - You are about to drop the column `mode` on the `ClassSchedule` table. All the data in the column will be lost.
  - You are about to drop the `class_schedule_overrides` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "class_schedule_overrides" DROP CONSTRAINT "class_schedule_overrides_classScheduleId_fkey";

-- AlterTable
ALTER TABLE "ClassSchedule" DROP COLUMN "mode";

-- DropTable
DROP TABLE "class_schedule_overrides";
