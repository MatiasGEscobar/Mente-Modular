import { CreateTopicDTO } from "../dtos/topic.dto";
import { topicRepository } from "../repositories/topic.repository";
import { AppDataSource } from "../config/data-source";
import { Subject } from "../entities/Subject";

export const getAllTopics = async () => {
  return await topicRepository.find({
    relations: {
      subject: {
        level: true,
      },
    },
  });
};

export const createTopic = async (data: CreateTopicDTO) => {
  const subjectRepo = AppDataSource.getRepository(Subject);

  const subject = await subjectRepo.findOne({
    where: { id: data.subjectId },
  });

  if (!subject) {
    throw new Error("Subject not found");
  }

  const newTopic = topicRepository.create({
    title: data.title,
    description: data.description,
    subject,
  });

  return await topicRepository.save(newTopic);
};