import * as express from 'express'
import * as cors from 'cors'
import * as logger from 'morgan'
import { userRouter } from './routes/users'

export const app = express()
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/users', userRouter)
app.get('/', (req, res) => res.send('MongoDB API Example'))
