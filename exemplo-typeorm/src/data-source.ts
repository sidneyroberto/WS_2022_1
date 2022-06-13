import 'reflect-metadata'
import { DataSource } from 'typeorm'
import Species from './entity/Species'
import Specimen from './entity/Specimen'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'zoo',
  synchronize: true,
  logging: false,
  entities: [Species, Specimen],
  migrations: [],
  subscribers: [],
})
