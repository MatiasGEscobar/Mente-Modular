import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Subject } from "./Subject";
import { Lesson } from "./Lesson";
import { Exercise } from "./Exercise";
import { Exam } from "./Exam";
import { Progress } from "./Progress";

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => Subject, (subject) => subject.topics)
  subject: Subject;

  @OneToMany(() => Lesson, (lesson) => lesson.topic)
  lessons: Lesson[];

  @OneToMany(() => Exercise, (exercise) => exercise.topic)
  exercises: Exercise[];

  @OneToMany(() => Exam, (exam) => exam.topic)
  exams: Exam[];

  @OneToMany(() => Progress, (progress) => progress.topic)
  progress: Progress[];
}
