
// tryConnection
const tryConnection = (req, res)=>{
  console.log('tryConnection request received')

  return res.send("tryConnection request received")
}

module.exports = {
  tryConnection
}
