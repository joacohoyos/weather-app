import express from 'express'
import weatherRouter from './routers/weather'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(weatherRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

