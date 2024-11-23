CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(10) CHECK (tipo IN ('admin', 'usuario')) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE voluntarios (
    id_voluntario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(150),
    disponivel BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE eventos_sociais (
    id_evento SERIAL PRIMARY KEY,
    nome_evento VARCHAR(150) NOT NULL,
    descricao TEXT,
    data_evento DATE NOT NULL,
    local VARCHAR(200),
    id_organizador INT REFERENCES usuarios(id_usuario) ON DELETE SET NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE pontos_manutencao (
    id_ponto SERIAL PRIMARY KEY,
    nome_ponto VARCHAR(100) NOT NULL,
    descricao TEXT,
    latitude NUMERIC(10, 8) NOT NULL,
    longitude NUMERIC(11, 8) NOT NULL,
    frequencia VARCHAR(10) DEFAULT 'mensal' CHECK (frequencia IN ('mensal', 'semanal')),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE acoes_limpeza (
    id_acao SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    data_acao DATE NOT NULL,
    local VARCHAR(200),
    id_criador INT REFERENCES usuarios(id_usuario) ON DELETE SET NULL,
    id_ponto INT REFERENCES pontos_manutencao(id_ponto) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente', 'concluida')),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fotos_comunidade (
    id_foto SERIAL PRIMARY KEY,
    caminho_foto VARCHAR(255) NOT NULL,
    descricao TEXT,
    id_usuario INT REFERENCES usuarios(id_usuario) ON DELETE SET NULL,
    data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE solicitacoes_recolha (
    id_solicitacao SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    tipo_recolha VARCHAR(100) NOT NULL,
    custo NUMERIC(10, 2),
    descricao TEXT,
    status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente', 'em_andamento', 'concluido')),
    data_solicitacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE doacoes (
    id_doacao SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    foto VARCHAR(255),
    status VARCHAR(20) DEFAULT 'disponivel' CHECK (status IN ('disponivel', 'recolhido')),
    data_doacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE empresas_parceiras (
    id_empresa SERIAL PRIMARY KEY,
    nome_empresa VARCHAR(150) NOT NULL,
    contato VARCHAR(100),
    email VARCHAR(150),
    descricao TEXT,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);