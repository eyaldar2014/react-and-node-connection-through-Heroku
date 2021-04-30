const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors')

const app = express();
const usersRoute = require('./routes/try.routes');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/routes', usersRoute);
app.get('/', (req, res)=>{
  res.json({success: 'sucsess'})
})

app.listen(process.env.PORT || 5000)

