const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

const app = express();
app.use(expressMongoDb('mongodb://localhost/pedidos'))

app.use(cors());
app.use(bodyParser.json());


app.get('/pedidos', (req,res) => {
    req.db.collection('pratos').find({}).toArray((err, acert) =>{
        res.send(acert)
    })
})

app.post('/pedidos', (req,res) => {
    req.db.collection('pratos').insert(req.body, erro => {
        if (erro) {
            console.log("Ocorreu um erro");
        } else {
            res.send({mensagem: "Inserção completa."})
        }
    })
})




app.listen(5000, () => console.log('Aplicação iniciada'));