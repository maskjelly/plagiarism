/*
  Warnings:

  - You are about to drop the column `tokens` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "tokens",
ADD COLUMN     "userTokens" INTEGER NOT NULL DEFAULT 0;
