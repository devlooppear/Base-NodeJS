# Base-NodeJS

Este é projeto é uma base para futuras aplicações minha com NodeJS, para isso fiz esse back end de blog desenvolvido com Node.js e Sequelize, usando uma ORM (Object-Relational Mapping) para bancos de dados relacionais. O objetivo desse projeto é permitir que o usuário possa cadastrar, visualizar e deletar postagens.

Os arquivos `app.js` e `test.js` são uma exemplificação e tutorial das principais bibliotecas, Sequelize e Express, utilizando html/index.html e html/sobre.html para as exemplificações antes da utilização do handlebars.

## Bibliotecas utilizadas

- Express: é um framework web para o Node.js, que fornece recursos para lidar com solicitações HTTP, gerenciar sessões, roteamento e muito mais.

- Body-parser: é um middleware de processamento de solicitação, que analisa o corpo de solicitação HTTP e o transforma em um objeto JavaScript utilizável.

- Express-handlebars: é um módulo que integra o Express com o Handlebars, um sistema de templates para JavaScript que permite criar templates HTML dinâmicos e reutilizáveis.

- Sequelize: é uma biblioteca ORM (Object-Relational Mapping) para Node.js, que fornece uma abstração para interagir com bancos de dados relacionais como MySQL, PostgreSQL, SQLite e outros.

- Mysql2: é um driver MySQL para Node.js que oferece suporte para consultas assíncronas e conexões com bancos de dados MySQL. É uma dependência do Sequelize, que utiliza o Mysql2 para se comunicar com o banco de dados MySQL.

## Configuração

Para instalar as dependências que constam no arquivo package.json basta executar o seguinte comando no terminal, dentro do diretório do projeto:

```javascript
npm install
```

Esse comando irá ler o arquivo package.json e instalar as dependências listadas nele. Caso já tenha instalado essas dependências anteriormente, basta executar o comando `npm update` para atualizá-las para as versões mais recentes compatíveis com o projeto.

migrações do banco de dados criadas com o Sequelize:
```javascript
npx sequelize-cli db:migrate
```

Para configurar o Database, faça isso em models/db.js:

```javascript
const Sequelize = require('sequelize')

//Conexão com Banco de Dados MySQL
const sequelize = new Sequelize('postapp', 'root', '<sua senha aqui>', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
```

## Funcionalidades
- Visualização de postagens:

    Ao acessar a URL raiz do servidor (http://localhost:8081), o usuário é direcionado para a página que lista todas as postagens cadastradas, com o título e o conteúdo de cada uma.

- Criação de postagens:

    Ao acessar a URL /cad (http://localhost:8081/cad), o usuário é direcionado para a página de criação de postagens, onde pode preencher os campos "Título" e "Conteúdo" e enviar o formulário. Os dados são enviados por meio do método POST para a URL /add.

- Deleção de postagens:

    Ao clicar no botão "Deletar" de uma postagem na página principal, o usuário é direcionado para a URL /deletar/:id (http://localhost:8081/deletar/:id), onde ":id" é o ID da postagem a ser deletada. A postagem correspondente é deletada do banco de dados e o usuário recebe uma mensagem informando o sucesso ou o fracasso da operação.

- Executando o servidor:

    Para executar o servidor, rode o seguinte comando no terminal:

```javascript
node index.js
```

Também é possível fazer isso instalando o nodemon, que faz atualizações automáticas da seguinte forma:
```javascript
npm install -g nodemon
```

Caso opte pelo nodemon, ao invés de `node index.js` utilize:
```javascript
nodemon index.js
```

O servidor ficará ouvindo a porta 8081 e com êxito retornará `Servidor Rodando!` no terminal. Para acessar as funcionalidades, basta abrir um navegador e acessar as URLs descritas acima.
