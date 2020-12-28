import express from 'express'
import weatherRouter from './routers/weather'
import * as env from './config'

const app = express()
const port = env.PORT

app.use(express.json())
app.use(weatherRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

