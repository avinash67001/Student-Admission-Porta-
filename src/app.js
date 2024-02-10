const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
require("./db/config");
const register = require("./models/Register");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, resp) => {
  resp.render("index");
});

app.post("/", async (req, resp) => {
  let data = new register({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Subject: req.body.Subject,
    Class: req.body.Class,
    Date: req.body.Date,
    Amount: req.body.Amount,
  });
  let result = await data.save();
  resp.sendStatus(204);
});

app.get("/Registrations/:_id", async (req, resp) => {
  let data = await register.deleteOne(req.params);
  resp.redirect('/Registrations')
});
app.get("/FeesStructure", (req, resp) => {
  resp.render("Fees_Structure");
});
app.get("/Registrations", async (req, resp) => {
  let data = await register.find();
  resp.render("Registrations", { data });
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
