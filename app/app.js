const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para adicionar Prisma ao contexto
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

module.exports = app;
