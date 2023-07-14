// Importing necessary modules from mongoose
const { connect, connection } = require("mongoose");

// Connecting to the MongoDB database
connect("mongodb://localhost/developersApplications", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, 
});

// Exporting the database connection object
module.exports = connection;
