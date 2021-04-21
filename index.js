const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index')
})

app.all('*', (request, response) => {
  response.sendFile('404.html')
})


app.listen(8080)

