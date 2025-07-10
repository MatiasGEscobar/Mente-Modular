import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Topic } from "./Topic";
import { ExamExercise } from "./ExamExercise";

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Topic, (topic) => topic.exams)
  topic: Topic;

  @OneToMany(() => ExamExercise, (ee) => ee.exam)
  examExercises: ExamExercise[];
}
