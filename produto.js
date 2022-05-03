const express = require('express')
const app = express()
const produto = require('./dbproduto')
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

/**Consulta todoso os produtos*/
app.get('/produtos', (req, res) => {
    res.status(200).send(produto)
})

/**Consulta produto por ID*/
app.get('/produtos/:idprodutos', (req, res) => {
    let idprodutos = req.params.idprodutos
    let produtoretornado = {}
    for (let c of produto) {
        if (c.id == idprodutos) {
            produtoretornado = c
        }
    }
    res.status(201).send(produtoretornado)
})

/**Cadastra produto*/
app.post('/produtos', (req, res) => {
    let obj =
    {
        id: produto.length + 1,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque
    }
    produto.push(obj)
    res.status(202).send(obj)
})

/**Altera produto*/
app.put('/produtos/:idprodutos', (req, res) => {
    let idprodutos = req.params.idprodutos
    let produtoAlterado = {}
    for (let i of produto) {
        if (i.id == idprodutos) {
            i.descricao = req.body.descricao
            i.preco = req.body.preco
            i.estoque = req.body.estoque
            produtoAlterado = i
        }
    }
    res.status(200).send(produtoAlterado)
})

/**Deleta produto*/
app.delete('/produtos/:idprodutos', (req, res) => {
    let idprodutos = req.params.idprodutos
    let posicao = 0
    for (let i of produto) {
        if (i.id == idprodutos) {
            break;
        }
        posicao++;
    }
    produto.splice(posicao, 1)
    res.status(204).send();
})

app.listen(8000, () => console.log('Aplicação em execução!'))