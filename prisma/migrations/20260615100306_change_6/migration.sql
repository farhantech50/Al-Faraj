/*
  Warnings:

  - A unique constraint covering the columns `[applicationId]` on the table `TuitionApplication` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `tuition_posts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicationId` to the `TuitionApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `tuition_posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TuitionApplication" ADD COLUMN     "applicationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tuition_posts" ADD COLUMN     "postId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TuitionApplication_applicationId_key" ON "TuitionApplication"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "tuition_posts_postId_key" ON "tuition_posts"("postId");
