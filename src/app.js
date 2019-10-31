import express from 'express'
import { resolve } from 'path'
import routes from './routes'
import './database'

const app = express()

app.use(express.json())
app.use('/files', express.static(resolve(__dirname, '..', 'temp', 'uploads')))

app.use(routes)

export default app
