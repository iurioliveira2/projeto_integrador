Gerar Cliente Prisma:

bash
Copiar código
yarn prisma generate
Criar e Aplicar Migrações:

bash
Copiar código
yarn prisma migrate dev --name inicial
Testar o Banco com Prisma Studio (opcional):

bash
Copiar código
yarn prisma studio



Esta ferramenta teria as seguintes funcionalidades:
·	Menu de cadastro do usuário;
·	Menu de login separado de admin e user padrão;
·	Cadastro de voluntários que farão transportes de descartes;
·	cadastro de eventos sociais comunitário;
·	Calendário indicando data de ações de limpeza de praças;
·	Mapa indicativo com marcações dos locais de pontos pré definidos de manutenções mensais;
·	Menu de apresentação de fotos da comunidade e ações realizadas;
·	Menu de cadastro de solicitações de recolha de entulhos e informações de custos para cada tipo de recolha;
·	Menu para publicações de doações de móveis, e campo de informações adicionais sobre a doação;
·	Possibilidade de cadastro de empresas ou instituições parceiras da comunidade.



{
  "nome": "João",
  "email": "joao@example.com",
  "senha": "123456",
  "tipo": "usuario"
}