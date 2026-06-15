/*
  Warnings:

  - You are about to drop the column `statusId` on the `assigned_teacher_students` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "assigned_teacher_students" DROP CONSTRAINT "assigned_teacher_students_statusId_fkey";

-- AlterTable
ALTER TABLE "assigned_teacher_students" DROP COLUMN "statusId";
