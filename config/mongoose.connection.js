const mongoose = require('mongoose')                   
const config = require('config')

mongoose.connect(`${config.get("MONGODB_URI")}/tesort`)
.then(function() {
    console.log("Connected")
})
.catch(function(err) {
    console.log(err)
})

module.exports = mongoose.connection