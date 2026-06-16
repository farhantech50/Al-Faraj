/*
  Warnings:

  - You are about to drop the `demo_classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "demo_classes" DROP CONSTRAINT "demo_classes_assignedId_fkey";

-- DropForeignKey
ALTER TABLE "demo_classes" DROP CONSTRAINT "demo_classes_studentId_fkey";

-- DropForeignKey
ALTER TABLE "demo_classes" DROP CONSTRAINT "demo_classes_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "demo_classes" DROP CONSTRAINT "demo_classes_tuitionPostId_fkey";

-- AlterTable
ALTER TABLE "assigned_teacher_students" ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDemo" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "demo_classes";
