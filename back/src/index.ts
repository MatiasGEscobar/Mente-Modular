import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then( res => {
    console.log("Database connected");
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
})
.catch((error) => {
    console.log("Error connecting to database", error);
});
