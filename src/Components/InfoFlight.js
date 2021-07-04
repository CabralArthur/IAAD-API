const express = require('express');
const cors = require('cors');

const mysql = require ('mysql2');
const router = express.Router();

router.use(cors());
router.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    port: 8080,
    password: 'password', // A senha do usuário. Ex: user123
    database: 'compania_aerea' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Your DB Flight is connected!')
    }
});

//Métodos para integração Vôo
router.get('/info-flight-list', function(req,res){

    connection.query("SELECT * FROM voo", function(error, rows){
        if(!!error){
            res.send(error.sqlMessage);
        } else {
            res.send(rows);
        }
    });

});

module.exports = router;