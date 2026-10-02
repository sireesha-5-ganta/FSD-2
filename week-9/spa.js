const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connection Successful!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed!");
        console.log(error.message);
    });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({
            message: "Error creating student",
            error: error.message
        });
    }
});
app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }

});
app.put("/api/students/:id", async (req, res) => {
    try {
        const updatedStudent =
            await Student.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );
        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json({
            message: "Error updating student",
            error: error.message
        });
    }
});
app.delete("/api/students/:id", async (req, res) => {
    try {
        const deletedStudent =
            await Student.findByIdAndDelete(
                req.params.id
            );
        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        res.json({
            message: "Student deleted successfully",
            student: deletedStudent
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});

