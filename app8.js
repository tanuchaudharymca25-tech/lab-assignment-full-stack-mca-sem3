
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Us Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("/student", (req, res) => {
    res.render("student", { name: "Aditri" });
});

app.post("/submit", (req, res) => {
    res.send("Form submitted successfully!");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
