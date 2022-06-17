const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const servicesRouter = require('./routers/servicesRoute');

const app = express();

// Config Path with Environment
dotenv.config({ path: 'config/.env' });

// Call Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Import Routes
app.use('/api/v1', servicesRouter);

// Connection with Database
mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(
        `Database Connection Successfully & Listening App on http://localhost:${process.env.PORT}`
      );
    })
  )
  .catch((error) =>
    console.log(`Database Connection Fail for ${error.message}`)
  );
