const app = require('./app');
const connectWithDatabase = require('./config/database');

// Connect with Database
connectWithDatabase();

app.listen(process.env.PORT, () => {
  console.log(`App is Listen on http://localhost:${process.env.PORT}`);
});
