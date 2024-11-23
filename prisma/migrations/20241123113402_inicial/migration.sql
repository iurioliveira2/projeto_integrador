-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" VARCHAR(10) NOT NULL DEFAULT 'usuario',
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Voluntario" (
    "idVoluntario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "email" VARCHAR(150),
    "disponivel" BOOLEAN NOT NULL DEFAULT true,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("idVoluntario")
);

-- CreateTable
CREATE TABLE "EventoSocial" (
    "idEvento" SERIAL NOT NULL,
    "nomeEvento" VARCHAR(150) NOT NULL,
    "descricao" TEXT,
    "dataEvento" TIMESTAMP(3) NOT NULL,
    "local" VARCHAR(200),
    "organizadorId" INTEGER,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventoSocial_pkey" PRIMARY KEY ("idEvento")
);

-- CreateTable
CREATE TABLE "PontoManutencao" (
    "idPonto" SERIAL NOT NULL,
    "nomePonto" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "frequencia" VARCHAR(10) NOT NULL DEFAULT 'mensal',
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PontoManutencao_pkey" PRIMARY KEY ("idPonto")
);

-- CreateTable
CREATE TABLE "AcaoLimpeza" (
    "idAcao" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataAcao" TIMESTAMP(3) NOT NULL,
    "local" VARCHAR(200),
    "criadorId" INTEGER,
    "pontoId" INTEGER NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pendente',
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AcaoLimpeza_pkey" PRIMARY KEY ("idAcao")
);

-- CreateTable
CREATE TABLE "FotoComunidade" (
    "idFoto" SERIAL NOT NULL,
    "caminhoFoto" VARCHAR(255) NOT NULL,
    "descricao" TEXT,
    "usuarioId" INTEGER,
    "dataUpload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FotoComunidade_pkey" PRIMARY KEY ("idFoto")
);

-- CreateTable
CREATE TABLE "SolicitacaoRecolha" (
    "idSolicitacao" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tipoRecolha" VARCHAR(100) NOT NULL,
    "custo" DOUBLE PRECISION,
    "descricao" TEXT,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pendente',
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SolicitacaoRecolha_pkey" PRIMARY KEY ("idSolicitacao")
);

-- CreateTable
CREATE TABLE "Doacao" (
    "idDoacao" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "foto" VARCHAR(255),
    "status" VARCHAR(20) NOT NULL DEFAULT 'disponivel',
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Doacao_pkey" PRIMARY KEY ("idDoacao")
);

-- CreateTable
CREATE TABLE "EmpresaParceira" (
    "idEmpresa" SERIAL NOT NULL,
    "nomeEmpresa" VARCHAR(150) NOT NULL,
    "contato" VARCHAR(100),
    "email" VARCHAR(150),
    "descricao" TEXT,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmpresaParceira_pkey" PRIMARY KEY ("idEmpresa")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "EventoSocial" ADD CONSTRAINT "EventoSocial_organizadorId_fkey" FOREIGN KEY ("organizadorId") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcaoLimpeza" ADD CONSTRAINT "AcaoLimpeza_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcaoLimpeza" ADD CONSTRAINT "AcaoLimpeza_pontoId_fkey" FOREIGN KEY ("pontoId") REFERENCES "PontoManutencao"("idPonto") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FotoComunidade" ADD CONSTRAINT "FotoComunidade_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolicitacaoRecolha" ADD CONSTRAINT "SolicitacaoRecolha_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doacao" ADD CONSTRAINT "Doacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;
