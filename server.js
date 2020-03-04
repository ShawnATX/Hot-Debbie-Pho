var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATA
var tables = [];
var waitlist = [];

//ROUTES
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  res.json();
});

app.get("/api/waitlist", function(req, res) {
  res.json();
});

//STARTER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });