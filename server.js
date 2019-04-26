const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

// import routers
const projectsRouter = require('./data/helpers/projects-router')
const actionsRouter = require('./data/helpers/actions-router')


const server = express();




server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

// endpoints
server.get('/', (req, res, next) => {
    res.send(`
        <h1>Hello</h1>
    `)
})

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)


module.exports = server