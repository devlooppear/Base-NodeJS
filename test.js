//Exemplificação do uso do Sequelize
//O arquivo já poderia ser deletado, mas deixarei aqui para eventuais dúvidas

const Sequelize = require('sequelize')

//database,user,senha

const sequelize = new Sequelize('sistemadecadastro', 'root', '12345', {
    host: "localhost",
    dialect: 'mysql'
});

//sequelize: npm install sequelize
//mysql2: npm install mysql2

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//Postagem.sync({force:true})

/*Postagem.create({
    titulo: "UM TITULO",
    conteudo: "Muahahahahahahahhah"
});*/

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 20,
    email: "blablabla@mail.com"
});

//Usuario.sync({force:true})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falaha ao se conectar: "+erro)
});