// connect database here
import mongoose, { MongooseError } from "mongoose";
import dotenv from "dotenv";

import app from "./app";
// connect DB
const port = 8001;
dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(
      "MongoDB is not running, please make sure MongoDB is connected" + error
    );
    process.exit(1);
  });
