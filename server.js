var express = require("express");
var path = require("path");
var Table = require('./lib/Table.js')
var app = express();
var PORT = process.env.PORT || 420;
var render  = require("./htmlrender")
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
  res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

app.post("/api/clear", function(req, res) {
  tables.splice(0, arr.length)
});

app.post("/reserve", function(req, res) {
  const unique = Math.floor(Math.random() *100);
  const newTable = req.body;
  let table = new Table(newTable.name, newTable.phone, newTable.email, newTable.partySize, unique)
  if (tables.length <= 5) {
    tables.push(table);
  }
  else {
    waitlist.push(table);
  }
  console.log(tables);
});

//STARTER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });