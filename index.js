const express = require('express')
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contatos', (req, res) => {
    res.send('Serviço de contatos!')
})

app.get('/contatos/:idcontato', (req, res) => {
    let idcontato = req.params.idcontato
    res.status(201).send({idcontato: idcontato})
})

app.post('/contatos', (req, res) => {
    res.status(201).send(
        {
            'id': 1,
            'nome': 'Maria',
            'fone': '1234-9876',
            'email': 'maria@gmail.com'
        }
    )
})

app.delete('/contatos/:idcontatos', (req, res) => {
    let idcontatos = req.params.idcontatos
    res.status(201).send()
})

app.post('/produtos', (req, res) => {
    res.status(201).send(
        {
            id: req.body.id,
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque
        }
    )
})

app.put('/produtos/:idprodutos', (req, res) => {
    let idprodutos = req.params.idprodutos
    res.status(202).send(
        {
            id: req.body.id,
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            alterado: idprodutos
        }
    )
})

cliente = [
    {
        'id': 2,
        'nome': 'João',
        'fone': '4242-9876',
        'limiteCredito': 200
    },
    {
        'id': 3,
        'nome': 'Ana',
        'fone': '6453-4245',
        'limiteCredito': 300
    },
    {
        'id': 4,
        'nome': 'José',
        'fone': '7343-3236',
        'limiteCredito': 400
    }
]

/**Consulta todoso os clientes*/
app.get('/clientes', (req, res) => {
    res.send('Cliente')
})

/**Consulta cliente por ID*/
app.get('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    res.status(201).send({ idclientes: idclientes })
})

/**Cadastra cliente*/
app.post('/clientes', (req, res) => {
    res.status(201).send(
        {
            id: req.body.id,
            nome: req.body.nome,
            fone: req.body.fone,
            limiteCredito: req.body.limiteCredito
        }
    )
})

/**Altera cliente*/
app.put('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    res.status(202).send(
        {
            id: req.body.id,
            nome: req.body.nome,
            fone: req.body.fone,
            limiteCredito: req.body.limiteCredito,
            alterado: idclientes
        }
    )
})

/**Deleta cliente*/
app.delete('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    res.status(201).send()
})

app.listen(8000, () => console.log('Aplicação em execução!'))