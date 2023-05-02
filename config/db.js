import mongoose from "mongoose";
import colors from "colors";

// connecting to mongodb database

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MogoDB ${error}`);
  }
};
export default connectDB;
