import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Level } from "./Level";
import { Topic } from "./Topic";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Level, (level) => level.subjects)
  level: Level;

  @OneToMany(() => Topic, (topic) => topic.subject)
  topics: Topic[];
}
