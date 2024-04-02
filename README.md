![Full Cycle](https://fullcycle.com.br/wp-content/themes/fullcycle/assets/images/fullcycle-logo.svg)

# Desafio Nginx com Node.js - Full Cycle 3.0

## Objetivos

Colocar em prática o que foi aprendido em relação ao Nginx como proxy reverso. Quando um usuário acessar o Nginx, o mesmo deve fazer uma chamada na aplicação Node.js. Essa aplicação por sua vez, deve adicionar um registro em um banco de dados MySQL, persistindo um nome na tabela `people`.

O retorno da aplicação deve conter:

- `<h1>Full Cycle Rocks!</h1>`.
- A tabela com os nomes cadastrados no banco de dados.

## Utilização

Rodando `docker-compose up -d` tudo deve ficar de pé, na porta `8080`.
