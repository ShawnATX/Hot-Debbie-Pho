var express = require("express");
var path = require("path");
var tables = require('./lib/Table.js')
var app = express();
var PORT = process.env.PORT || 420;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATA
var table1 = new Table("greg", "2", "t@t.t", "1", "1")
var table2 = new Table("name", "phone", "email", "party", "uniqueId")
var tables = [table1, table2];
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
  console.log(newTable);
  let table = new Table(newTable.name, newTable.phone, newTable.email, newTable.partySize, unique)

});


//STARTER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });