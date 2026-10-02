const express = require("express");
const app = express();
e
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const studentName = "G.Sireesha";
    const department = "CSE(AI Department)";
    const semester = 5;

    res.render("dynamic", {
        studentName: studentName,
        department: department,
        semester: semester
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});