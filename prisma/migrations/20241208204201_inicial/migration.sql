-- AlterTable
ALTER TABLE "SolicitacaoRecolha" ADD COLUMN     "cidade" TEXT,
ADD COLUMN     "endereco" TEXT,
ADD COLUMN     "estado" TEXT,
ADD COLUMN     "imagem" VARCHAR(255),
ADD COLUMN     "pais" VARCHAR(20) NOT NULL DEFAULT 'brasil',
ADD COLUMN     "telefone" TEXT,
ADD COLUMN     "usuarioDesc" TEXT;
