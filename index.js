// Importing necessary modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Getting current working directory
const cwd = process.cwd();

// Setting up the port
const PORT = 3001;

// Creating an instance of the Express application
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Opening the database connection and starting the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
