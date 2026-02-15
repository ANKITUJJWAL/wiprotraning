import mongoose from "mongoose";
import 'dotenv/config';




dotenv.config();



async function connect() {
  if (mongoose.connection.readyState >= 1) return;
  
 await mongoose.connect(process.env.MONGO_URL, {
    // options can be added if needed
  });
  console.log('Mongo connected');
}


export { connect };
