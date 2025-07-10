import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Topic } from "./Topic";

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string; // in_progress, completed

  @Column()
  score: number;

  @Column({ type: "timestamp", nullable: true })
  completed_at: Date;

  @ManyToOne(() => User, (user) => user.progress)
  user: User;

  @ManyToOne(() => Topic, (topic) => topic.progress)
  topic: Topic;
}
