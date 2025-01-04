// Import Express
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('port', (process.env.PORT || 8000));

const { Redis } = require('@upstash/redis')
const redis = new Redis({
    url: 'https://loyal-bird-39357.upstash.io',
    token: 'AZm9AAIjcDE1YzA2ZDc5Y2UxZjE0OGM1OTBlM2JhMjg0ZDc4MGE1NXAxMA',
})

// Define a route
app.get('/api/getLog', (req, res) => {
    redis.get(req.query.code)
    .then(result => { 
        if (result) res.send(result) 
        else res.send([])
    })
    .catch(e => res.send([]))
});

app.get('/api/setEnable', (req, res) => {
    if (req.query.enable === "true") {
        redis.sadd("enable", req.query.code)
    } else {
        redis.srem("enable", req.query.code)
    }
    res.send()
});

app.get('/api/getEnable', (req, res) => {
    redis.sismember("enable", req.query.code)
    .then(result => { 
        res.send({"enable": (result) ? true : false}) 
    })
    .catch(e => res.send({}))
});

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server is running on ', app.get('port'));
});     

module.exports = app	