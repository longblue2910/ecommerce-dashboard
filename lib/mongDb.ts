import mongoose, { mongo } from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDb is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "RimdasilvaAdmin",
    });

    isConnected = true;

    console.log("MongoDb is connected.");
  } catch (error) {
    console.log(error);
  }
};
