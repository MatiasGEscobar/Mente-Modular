import { AppDataSource } from "../config/data-source";
import { Topic } from "../entities/Topic";

export const topicRepository = AppDataSource.getRepository(Topic);
