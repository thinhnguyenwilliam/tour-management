import app from "./app";
import sequelize from "./config/db";

const PORT = process.env.PORT ?? 1234;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");
        await sequelize.sync(); // Sync models to DB
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error("Unable to start the server:", error);
    }
};

startServer();
