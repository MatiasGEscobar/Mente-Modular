import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Exam } from "./Exam";
import { Exercise } from "./Exercise";

@Entity()
export class ExamExercise {
  @PrimaryColumn()
  examId: number;

  @PrimaryColumn()
  exerciseId: number;

  @ManyToOne(() => Exam, (exam) => exam.examExercises, { onDelete: "CASCADE" })
  @JoinColumn({ name: "examId" })
  exam: Exam;

  @ManyToOne(() => Exercise, { onDelete: "CASCADE" })
  @JoinColumn({ name: "exerciseId" })
  exercise: Exercise;
}
