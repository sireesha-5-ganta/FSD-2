const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

async function loadStudents() {

    try {

        const response = await fetch("/api/students");

        const students = await response.json();

        studentList.innerHTML = "";

        if (students.length === 0) {
            studentList.innerHTML = "<p>No students found.</p>";
            return;
        }

        students.forEach(student => {

            const div = document.createElement("div");

            div.className = "student";

            div.innerHTML = `
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Age:</strong> ${student.age}</p>
                <p><strong>Course:</strong> ${student.course}</p>

                <button onclick="updateStudent('${student._id}')">
                    Update
                </button>

                <button onclick="deleteStudent('${student._id}')">
                    Delete
                </button>
            `;

            studentList.appendChild(div);

        });

    } catch (error) {

        studentList.innerHTML =
            "<p>Error loading students.</p>";

        console.log(error);
    }
}

studentForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const student = {

        name: document.getElementById("name").value,

        age: document.getElementById("age").value,

        course: document.getElementById("course").value

    };


    try {

        const response = await fetch("/api/students", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(student)

        });


        if (response.ok) {

            alert("Student added successfully!");

            studentForm.reset();

            loadStudents();

        } else {

            alert("Error adding student!");

        }

    } catch (error) {

        console.log(error);

        alert("Server error!");

    }

});

async function updateStudent(id) {

    const name = prompt("Enter new name:");

    const age = prompt("Enter new age:");

    const course = prompt("Enter new course:");


    if (!name || !age || !course) {

        return;

    }


    try {

        const response = await fetch(`/api/students/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name: name,

                age: age,

                course: course

            })

        });


        if (response.ok) {

            alert("Student updated successfully!");

            loadStudents();

        } else {

            alert("Error updating student!");

        }

    } catch (error) {

        console.log(error);

        alert("Server error!");

    }

}

async function deleteStudent(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");


    if (!confirmDelete) {

        return;

    }


    try {

        const response = await fetch(`/api/students/${id}`, {

            method: "DELETE"

        });


        if (response.ok) {

            alert("Student deleted successfully!");

            loadStudents();

        } else {

            alert("Error deleting student!");

        }

    } catch (error) {

        console.log(error);

        alert("Server error!");

    }

}

loadStudents();

