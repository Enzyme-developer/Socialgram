const mongoose = require('mongoose')

//connect database
const connectDb = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
  }, () => console.log('database connected'))

}  

module.exports = connectDb