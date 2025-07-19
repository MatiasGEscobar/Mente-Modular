import { Router } from "express";
import { getTopicsController, postTopic } from "../controllers/topic.controller";


const topicRouter: Router = Router();

topicRouter.get("/", getTopicsController);
topicRouter.post("/",postTopic); 

export default topicRouter;
