# Projeto de Gerenciamento de Tarefas com NestJS

Este projeto é uma API de gerenciamento de tarefas simples, construída com NestJS. Permite aos usuários criar, listar, atualizar o status e deletar tarefas.

## Começando

Para começar a usar este projeto, siga os passos abaixo para configurá-lo localmente.

### Pré-requisitos

- Node.js (versão 12 ou superior)
- NPM (Node Package Manager)

### Instalação

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/natanielpaiva/desafio-engenharia-gran
cd desafio-engenharia-gran
```

Em seguida, instale as dependências do projeto:
```bash
npm install
```
Rodando o Projeto
Para iniciar o servidor de desenvolvimento, execute:
```bash
npm run start:dev
```

O servidor estará rodando em http://localhost:3000.

Utilizando a API
A API suporta várias operações para gerenciamento de tarefas, detalhadas a seguir.

Endpoints
Listar todas as tarefas

GET /tasks

Criar uma nova tarefa

POST /tasks

Body da requisição:

```json
{
  "title": "Título da tarefa",
  "description": "Descrição da tarefa"
}
```

Deletar uma tarefa

DELETE /tasks/:id

Substitua :id pelo ID da tarefa que deseja deletar.

Atualizar o status de uma tarefa

PATCH /tasks/:id/status

Substitua :id pelo ID da tarefa e no corpo da requisição, envie o novo status:

```json
{
  "status": "OPEN | IN_PROGRESS | DONE"
}
```
Testando a API
Você pode testar a API usando ferramentas como Postman ou cURL. Aqui está um exemplo de como criar uma nova tarefa usando cURL:



```bash
curl -X POST http://localhost:3000/tasks -H 'Content-Type: application/json' -d '{"title": "Nova Tarefa", "description": "Descrição da tarefa"}'
```


