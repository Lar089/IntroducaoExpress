const express = require('express')
const app = express()
const cliente = require('./db')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


/**Consulta todoso os clientes*/
app.get('/clientes', (req, res) => {
    res.status(200).send(cliente)
})

/**Consulta cliente por ID*/
app.get('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    let clienteretornado = {}
    for (let c of cliente) {
        if (c.id == idclientes) {
            clienteretornado = c
        }
    }
    res.status(201).send(clienteretornado)
})

/**Cadastra cliente*/
app.post('/clientes', (req, res) => {
    let obj =
    {
        id: req.body.id,
        nome: req.body.nome,
        fone: req.body.fone,
        limiteCredito: req.body.limiteCredito
    }
    cliente.push(obj)
    res.status(202).send(obj)
})

/**Altera cliente*/
app.put('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    let clienteAlterado = {}
    for (let i of cliente) {
        if (i.id == idclientes) {
            i.nome = req.body.nome
            i.fone = req.body.fone
            i.limiteCredito = req.body.limiteCredito
            clienteAlterado = i
        }
    }
    res.status(200).send(clienteAlterado)
})

/**Deleta cliente*/
app.delete('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    let posicao = 0
    for (let i of cliente) {
        if (i.id == idclientes) {
            break;
        }
        posicao++;
    }
    cliente.splice(posicao, 1)
    res.status(204).send();
})

app.listen(8000, () => console.log('Aplicação em execução!'))