const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Load models
const User = require('./models/user');
const port = 3000;

// connect to MongoDB
mongoose.connect(keys.MongoDB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () =>  {
    console.log('Connected to remote MongoDB ..')
});
// setup body parser middleware 
// parse application
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is about route');
});

app.get('/contact', (req, res) => {
    res.json({
        'title': 'This is contact route'
    });
});

app.post('/users', (req, res) => {
    User.find({})
    .then((users) => {
        res.send(users)
    })
    .catch((e) => {
        console.log(e)
    })
})

// making POST request to receive data
app.post('/newUser', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

// User route
app.get('/users', (req, res) => {
    const newUser = {
        name: 'John',
        age: 20,
        isGraduated: true
    }
    new User(newUser).save((err,user) => {
        if(err) {
            console.log(err)
        }
        if(user) {
            res.json(user)
        }
    })
});

app.listen(port, () => {
    console.log(`Server is running on port!`);
});
