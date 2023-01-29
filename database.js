import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(`MongoDB connection error: ${error}`);
});
