import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Exercise } from "./Exercise";

@Entity()
export class AIResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  answer: string;

  @Column({ type: "text", nullable: true })
  feedback: string;

  @Column({ nullable: true })
  score_ai: number;

  @ManyToOne(() => User, (user) => user.responses)
  user: User;

  @ManyToOne(() => Exercise, (exercise) => exercise.responses)
  exercise: Exercise;
}
