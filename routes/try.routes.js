const express = require('express');

const router = express.Router();
const bankController = require('../controllers/try.controllers')

router.get('/tryConnection',(req,res)=>{
  bankController.tryConnection(req, res)
});

module.exports = router;