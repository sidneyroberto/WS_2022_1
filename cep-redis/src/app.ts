import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import './config/db'

export const app = express()

app.use(cors())

app.use(logger('dev'))

app.use(express.json())
