/*
  Warnings:

  - You are about to drop the column `area` on the `tuition_posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tuition_posts" DROP COLUMN "area",
ADD COLUMN     "areaId" INTEGER NOT NULL DEFAULT 5;

-- AddForeignKey
ALTER TABLE "tuition_posts" ADD CONSTRAINT "tuition_posts_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "lookups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
