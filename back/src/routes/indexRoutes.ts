import { Router } from "express";
import topicRoutes from "./topic.routes";


const router: Router = Router();

router.use("/topics", topicRoutes);


export default router;