/*
  Warnings:

  - A unique constraint covering the columns `[cpfCnpj]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "celular" VARCHAR(20),
ADD COLUMN     "cep" VARCHAR(20),
ADD COLUMN     "cidade" VARCHAR(100),
ADD COLUMN     "cpfCnpj" VARCHAR(20),
ADD COLUMN     "endereco" VARCHAR(255),
ADD COLUMN     "estado" VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpfCnpj_key" ON "Usuario"("cpfCnpj");
