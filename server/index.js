import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Errr", error);
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at PORT : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo DB connecton failed !!!", err);
  });
