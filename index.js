const bodyParser = require('body-parser');
const cors = require('cors')

const express = require('express')
const app = express();
const port = 5000;
const usersRoute = require('./routes/try.routes');
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/routes', usersRoute);

app.listen(process.env.PORT || 5000)

