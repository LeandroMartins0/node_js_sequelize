// SEQUELIZE 
const Sequelize = require('sequelize');

// CONEXÃO COM O BD
const sequelize = new Sequelize('leandro', 'leandroone', '123456',{
    host: 'localhost',
    dialect: 'mysql' 
});

// then para caso conseguir conectar, catch caso não conseguir
sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso!');
}).catch(function(err){
    console.log('Erro ao realizar a conexão com o BD: ' + err);
});

// CRIAR TABELA 
const Pagamento = sequelize.define('pagamentos',{
    //atributos
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
        // allowNull defaults to true
    }      
});

// Criar tabela com Sequelize
//User.sync({force: true});

Pagamento.create({
    nome: "Energia", 
    valor: 220
});

