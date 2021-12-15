const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/posts.js')

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));

app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log('Server is running on port: ' + PORT)))
.catch(e => console.log(e.message))
