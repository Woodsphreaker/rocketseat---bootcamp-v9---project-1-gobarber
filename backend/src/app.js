import 'dotenv/config'

import express from 'express'
import helmet from 'helmet'
import * as Sentry from '@sentry/node'
import sentryConfig from './config/sentry'
import { resolve } from 'path'
import 'express-async-errors'
import routes from './routes'
import './database'

// errors log
Sentry.init(sentryConfig)

const app = express()
app.use(helmet())
app.use(express.json())
app.use('/files', express.static(resolve(__dirname, '..', 'temp', 'uploads')))

app.use(Sentry.Handlers.requestHandler())

app.use(routes)

app.use(Sentry.Handlers.errorHandler())

app.use(async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json(err)
  }

  return res.status(500).json({ message: 'Internal Server Error' })
})

export default app
