const mongoose = require('mongoose');

async function connectDB() {
  return await mongoose.connect(process.env.MONGO_URL).asPromise();
}

async function closeConnect() {
    return await mongoose.connection.close();
}

module.exports = {
    connectDB,
    closeConnect,
}


