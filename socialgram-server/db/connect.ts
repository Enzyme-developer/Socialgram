const mongoose = require('mongoose')

//connect database
const connectDb = (uri: any) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => console.log('database connected'))
}  

module.exports = connectDb;
export {};