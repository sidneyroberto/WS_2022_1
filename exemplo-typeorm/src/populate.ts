import { connectToDB } from './config/db'

const loadInitialData = async () => {
  await connectToDB()
}

loadInitialData()
