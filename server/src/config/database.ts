import mongoose from 'mongoose'

const URI = `${process.env.MONGOD_URL}`

const connectDB = () => {
    mongoose.connect(URI)
        .then(()=> console.log(`DB connection successful....`))
        .catch((err: any) => {
            console.log(err.message)
            setTimeout(connectDB, 20)
        })
}

connectDB()