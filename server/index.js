const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/posts.js')

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://mern_simple_blog:598040@cluster0.s3xsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log('Server is running on port: ' + PORT)))
.catch(e => console.log(e.message))
