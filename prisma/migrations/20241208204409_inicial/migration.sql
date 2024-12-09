-- AlterTable
ALTER TABLE "SolicitacaoRecolha" ALTER COLUMN "tipoRecolha" DROP NOT NULL,
ALTER COLUMN "tipoRecolha" SET DEFAULT 'Recolhimento/Limpeza';
