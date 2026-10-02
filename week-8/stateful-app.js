const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use(
    session({
        secret: "week8-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 600000 // 10 minutes
        }
    })
);

app.get("/", (req, res) => {
    res.render("home", {
        username: req.session.username
    });
});

app.get("/set-cookie", (req, res) => {
    res.cookie("studentName", "Sireesha", {
        maxAge: 600000
    });

    res.send(`
        <h2>Cookie Created Successfully!</h2>
        <p>Cookie Name: studentName</p>
        <p>Cookie Value: Sireesha</p>
        <a href="/">Go Home</a>
    `);
});

app.get("/get-cookie", (req, res) => {
    const studentName = req.cookies.studentName;

    if (studentName) {
        res.send(`
            <h2>Cookie Read Successfully!</h2>
            <p>Student Name: ${studentName}</p>
            <a href="/">Go Home</a>
        `);
    } else {
        res.send(`
            <h2>No Cookie Found</h2>
            <a href="/set-cookie">Create Cookie</a>
        `);
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        req.session.username = username;

        res.redirect("/dashboard");
    } else {
        res.send(`
            <h2>Invalid Username or Password</h2>
            <a href="/login">Try Again</a>
        `);
    }
});

app.get("/dashboard", (req, res) => {
    if (req.session.username) {
        res.render("dashboard", {
            username: req.session.username
        });
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send("Logout failed");
        }

        res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});