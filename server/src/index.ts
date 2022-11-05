import express from 'express'
import dotenv from 'dotenv'

import './config/database'
import routes from './routes/routes'

const main = async () => {
    dotenv.config()
    const app = express()

    // middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    // routes
    app.use('/api', routes.messageRouter)

    
    // port
    const PORT = process.env.PORT || 3001

    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}...`)
    })
}

main().catch((err: any) => {
    console.log(err.message)
})