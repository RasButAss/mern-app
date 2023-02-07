const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planet.router')

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(morgan('combined'))
app.use(express.json());
app.use(planetsRouter);
app.use(express.static(path.join(__dirname,'..','public')))
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '..','public','index.html'))
})

module.exports = app;