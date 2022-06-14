import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm'
import Cage from './Cage'

@Entity()
export default class Zookeeper {
  @PrimaryColumn()
  registrationCode: string

  @Column()
  name: string

  @Column()
  birthday: Date

  @ManyToMany(() => Cage)
  cages: Promise<Cage[]>
}
