-- AlterTable
ALTER TABLE "ClassSchedule" ADD COLUMN     "meetingLink" TEXT;

-- AlterTable
ALTER TABLE "assigned_teacher_students" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
