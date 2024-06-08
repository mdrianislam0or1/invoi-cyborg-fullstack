import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server().catch((error) => console.log(error));
