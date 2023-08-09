const mongoose = require('mongoose');

async function connectDB() {
  const connectionString = process.env.MONGODB_CONNECTION_STRING;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to mongodb');
  } catch (error) {
    console.error('Failed to connect to mongodb', error);
  }
}

module.exports = connectDB;
