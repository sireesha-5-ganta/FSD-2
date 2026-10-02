const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});


app.post("/submit", (req, res) => {
    const studentName = req.body.studentName;
    const email = req.body.email;
    if (!/^[A-Za-z ]+$/.test(studentName)) {
        return res.send(`
            <h1>Invalid Name</h1>
            <p>Please enter a name using letters only.</p>
            <a href="/">Go Back</a>
        `);
    }

    res.send(`
        <h1>Form Submitted Successfully</h1>
        <p>Student Name: ${studentName}</p>
        <p>Email: ${email}</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});