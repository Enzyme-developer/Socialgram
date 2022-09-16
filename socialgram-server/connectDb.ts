import mongoose from 'mongoose'

const connectDb = (uri) => {
    mongoose.connect(uri, {

    })
    console.log('database connected')
}

export default connectDb;