import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_NAME, DB_PASSWORD } from "./envs";
import { User } from "../entities/User";
import { Level } from "../entities/Level";
import { Subject } from "../entities/Subject";
import { Topic } from "../entities/Topic";
import { Lesson } from "../entities/Lesson";
import { Exercise } from "../entities/Exercise";
import { Exam } from "../entities/Exam";
import { ExamExercise } from "../entities/ExamExercise";
import { Progress } from "../entities/Progress";
import { AIResponse } from "../entities/AIResponse";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true, // IMPORTANTE: desactiva esto en producción
  //dropSchema: true,
  logging: false,
  entities: [
    User,
    Level,
    Subject,
    Topic,
    Lesson,
    Exercise,
    Exam,
    ExamExercise,
    Progress,
    AIResponse
  ],
  migrations: ["dist/migrations/**/*.js"],
  subscribers: [],
});
