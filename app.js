// Exemplificação uso do Express:
const express = require("express");
const app = express();

//intalação nodemon> automatiza a reinicialização: npm install nodemon -g
//execussão do nodemon> no terminal> nodemon <nome do arquivo>

//app.listen(8081) deve estar abaixo do que vai estar no seu projeto

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo/:cor", function(req, res){
    res.send(`<h1>Olá, ${req.params.nome}!</h1><br>
    <h2>Você é um ${req.params.cargo}</h2><br>
    <h2>Sua cor favorita é ${req.params.cor}</h2><br>`);
});

app.listen(8081, function(){
    console.log("Servidor Rodando!");
});