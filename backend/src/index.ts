import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(morgan('dev'))

app.get('/', (_, res) => {
    res.send('Maintrack API runinning...')
})

app.listen(PORT, () => {
    console.log(`🚀 Server ready on http://localhost:${PORT}`)
})