import { Router } from "express";
import { AppDataSource } from "../config/data-source";
import { Topic } from "../entities/Topic";
import { Subject } from "../entities/Subject";
import { Level } from "../entities/Level";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const topicRepo = AppDataSource.getRepository(Topic);

    const topics = await topicRepo.find({
      relations: {
        subject: {
          level: true,
        },
      },
    });

    res.json(topics);
  } catch (err) {
    console.error("❌ Error al obtener los temas:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
