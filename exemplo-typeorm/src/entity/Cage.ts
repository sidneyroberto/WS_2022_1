import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm'
import Zookeeper from './Zookeeper'

@Entity()
export default class Cage {
  @PrimaryColumn()
  code: string

  @Column()
  area: string

  @ManyToMany(() => Zookeeper)
  @JoinTable()
  zookeepers: Promise<Zookeeper[]>
}
