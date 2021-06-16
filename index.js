'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

//Small exercise- Hello World Server

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Add routes for cats, dogs, and cats_and_dogs

app.get('/cats', (req, res) => {
    res.send('Meow!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof!')
})

app.get('/cats_and_dogs', (req, res) => {
    res.send('Cats and dogs living together...Mass hysteria!')
})

//Add routes with parameters

// app.get('/greet/:name', (req, res) => {
//     const {name} = req.params;
//     let snippet = `"Hello, ${name}!"`
//     res.status(200).send(snippet).end()
// })

//Send an HTML response that greets ${name}

app.get('/greet/:name', (req, res) => {
    const {name} = req.params;
    let snippet = `<h1>"Hello, ${name}!"</h1>`
    res.status(200).send(snippet).end()
})



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})