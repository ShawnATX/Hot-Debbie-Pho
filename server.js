var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATA


//ROUTES
//ROUTES
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/", function(req, res) {
  return res.json(characters);
});

//STARTER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });