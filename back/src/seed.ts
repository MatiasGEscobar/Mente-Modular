import { AppDataSource } from "./config/data-source";
import { Level } from "./entities/Level";
import { Subject } from "./entities/Subject";
import { Topic } from "./entities/Topic";
import { User } from "./entities/User";

const runSeed = async () => {
  await AppDataSource.initialize();

  const levelRepo = AppDataSource.getRepository(Level);
  const subjectRepo = AppDataSource.getRepository(Subject);
  const topicRepo = AppDataSource.getRepository(Topic);
  const userRepo = AppDataSource.getRepository(User);

  // Niveles
  const initial = levelRepo.create({ name: "Inicial" });
  const secondary = levelRepo.create({ name: "Secundario" });
  const tertiary = levelRepo.create({ name: "Terciario" });
  const university = levelRepo.create({ name: "Universitario" });

  await levelRepo.save([initial, secondary, tertiary, university]);

  // Materias
  const math = subjectRepo.create({ name: "Matemática", level: initial });
  const history = subjectRepo.create({ name: "Historia", level: secondary });

  await subjectRepo.save([math, history]);

  // Temas
  const topic1 = topicRepo.create({
    title: "Sumas y restas básicas",
    description: "Operaciones simples de suma y resta.",
    subject: math,
  });

  const topic2 = topicRepo.create({
    title: "Revolución Francesa",
    description: "Contexto histórico y consecuencias.",
    subject: history,
  });

  await topicRepo.save([topic1, topic2]);

  // Usuarios
  const student = userRepo.create({
    name: "Estudiante Uno",
    email: "estudiante@mente.com",
    role: "student",
  });

  const teacher = userRepo.create({
    name: "Docente Uno",
    email: "docente@mente.com",
    role: "teacher",
  });

  await userRepo.save([student, teacher]);

  console.log("✅ Datos de prueba cargados con éxito.");
  process.exit(0);
};

runSeed().catch((err) => {
  console.error("❌ Error en el seed:", err);
  process.exit(1);
});
