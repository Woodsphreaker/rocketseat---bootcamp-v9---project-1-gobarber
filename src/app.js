import express from 'express'
import helmet from 'helmet'
import { resolve } from 'path'
import routes from './routes'
import './database'

const app = express()
app.use(helmet())
app.use(express.json())
app.use('/files', express.static(resolve(__dirname, '..', 'temp', 'uploads')))

app.use(routes)

export default app
