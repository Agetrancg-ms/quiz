/*
  Warnings:

  - Added the required column `bairro` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cnh" TEXT[],
ADD COLUMN     "conducao" TEXT[],
ADD COLUMN     "idade" INTEGER NOT NULL,
ADD COLUMN     "outrosConducao" TEXT,
ADD COLUMN     "sexo" TEXT NOT NULL;
