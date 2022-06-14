const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/.env' });

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
