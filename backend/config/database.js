const mongoose = require('mongoose');

async function connectWithDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database Connection Successfully!');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectWithDatabase;
