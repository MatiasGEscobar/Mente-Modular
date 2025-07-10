import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Subject } from "./Subject";

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Subject, (subject) => subject.level)
  subjects: Subject[];
}
