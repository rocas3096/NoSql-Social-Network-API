const { connect, connection } = require("mongoose");

connect("mongodb://localhost/developersApplications", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // Add this line to address the deprecation warning
});

module.exports = connection;
