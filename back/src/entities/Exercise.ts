import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Topic } from "./Topic";
import { AIResponse } from "./AIResponse";

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // multiple_choice, written, etc.

  @Column({ type: "text" })
  prompt: string;

  @Column({ type: "text" })
  answer: string;

  @ManyToOne(() => Topic, (topic) => topic.exercises)
  topic: Topic;

  @OneToMany(() => AIResponse, (res) => res.exercise)
  responses: AIResponse[];
}
