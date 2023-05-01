const express = require('express')
const catagoris = require('./data/catagoris.json')
const news = require('./data/News.json')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('fggHello World!')
})

app.get('/catagoris', (req, res) => {
    res.send(catagoris)
  })

  

  app.get('/news', (req, res) => {
    res.send(news)
  })

  app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const SelectedNews = news.find(SelectedNews => SelectedNews.id === id);
    res.send(SelectedNews)
  })

  app.get('/catagoris/:id', (req, res) => {
    const id = req.params.id;
    if(id == 0){
        res.send(news)
    }
    else{
        const catagoryNews = news.filter(n =>n.category_id === id);
        res.send(catagoryNews);
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})