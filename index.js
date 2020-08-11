//Teste de comentário para o git
const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/', (req, res) => res.send('Olá mundo pelo Express!'))
 
app.listen(port, () => console.log('Api rodando na porta 5000'))