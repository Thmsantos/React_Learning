//Importar bibliotecas
const express = require('express')
var bodyParser = require('body-parser')

//Carregando módulos
const medicoRoutes = require('./routes/medicoRoutes')

//Chama a o express criando uma nova aplicação dentro da variavel app
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Rotas

app.use('/medico', medicoRoutes)

//Inicializa Servidor
const port = 3000
app.listen(port, () => {
    console.log(`essa porra ta rodando no http://localhost:3000`)
})
