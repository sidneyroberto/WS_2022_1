import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { connectToDB } from './config/db'
import { speciesRouter } from './routes/species'

const doDbConnection = async () => {
  await connectToDB()
}

doDbConnection()

export const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/species', speciesRouter)
app.get('/', (req, res) => res.send('Exemplo TypeORM'))
