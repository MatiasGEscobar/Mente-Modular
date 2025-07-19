import { Request, Response } from "express";
import { getAllTopics } from "../services/topic.service";
import { createTopic } from "../services/topic.service";

export const getTopicsController = async (req: Request, res: Response) => {
  try {
    const topics = await getAllTopics();
    res.json(topics);
  } catch (error) {
    console.error("❌ Error en controlador de topics:", error);
    res.status(500).json({ message: "Error al obtener los temas" });
  }
};

export const postTopic = async (req: Request, res: Response) => {
  try {
    const { title, description, subjectId } = req.body;

    if (!title || !description || !subjectId) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const topic = await createTopic({ title, description, subjectId });

    res.status(201).json(topic);
    }catch (err: unknown) {
    const error = err as Error;
    res.status(500).json({ message: error.message || "Error interno del servidor" });
    }
};
