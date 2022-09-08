import mongoose from "mongoose";

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
