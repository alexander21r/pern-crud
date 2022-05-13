import app from "./app.js";
import { sequelize } from "./db/db.js";

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection to database is good");
    app.listen(3001);
    console.log("Server running on port 3001");
  } catch (error) {
    console.error("error:", error);
  }
};

main();
