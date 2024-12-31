// Import Express
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 8000));

const { Redis } = require('@upstash/redis')
const redis = new Redis({
    url: 'https://loyal-bird-39357.upstash.io',
    token: 'Apm9AAIgcDEyyMRCppwt_wWE-NKm6SUubzIvTeIGZOBfUTiafUuggw',
})

// Define a route
app.get('/', (req, res) => {
    redis.get(req.body.code)
    .then(result => res.send(result))
});

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server is running on ', app.get('port'));
});     

module.exports = app	