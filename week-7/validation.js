const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("validation", {
        error: null,
        studentName: "",
        email: ""
    });
});

app.post("/submit", (req, res) => {
    const studentName = req.body.studentName;
    const email = req.body.email;

    if (!studentName || studentName.trim() === "") {
        return res.render("validation", {
            error: "Student name is required.",
            studentName: "",
            email: email
        });
    }
    if (studentName.trim().length < 3) {
        return res.render("validation", {
            error: "Student name must contain at least 3 characters.",
            studentName: studentName,
            email: email
        });
    }
    if (!/^[A-Za-z ]+$/.test(studentName)) {
        return res.render("validation", {
            error: "Student name should contain only letters.",
            studentName: studentName,
            email: email
        });
    }
    if (!email || email.trim() === "") {
        return res.render("validation", {
            error: "Email is required.",
            studentName: studentName,
            email: ""
        });
    }
    res.render("validation", {
        error: null,
        studentName: studentName,
        email: email
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});