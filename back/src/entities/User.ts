import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Progress } from "./Progress";
import { AIResponse } from "./AIResponse";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  role: 'student' | 'teacher' | 'admin';

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @OneToMany(() => Progress, (progress) => progress.user)
  progress: Progress[];

  @OneToMany(() => AIResponse, (response) => response.user)
  responses: AIResponse[];
}
