import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Species from './Species'

@Entity()
export default class Specimen {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  nickName: string

  @ManyToOne(() => Species)
  species: Species
}
