import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Topic } from "./Topic";

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: "text" })
  content: string;

  @ManyToOne(() => Topic, (topic) => topic.lessons)
  topic: Topic;
}
