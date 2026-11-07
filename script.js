alert("Welcome tothe student portal!");
console.log("JavaScript is connected successfully.");
const studentName = "Daizy";
const yearOfStudy =2;
console.log("Student name:" + studentName);
if (yearOfStudy ===1) {
    console.log(studentName + "is in first yaer.");
} else {
    console.log(studentName + "is in a later year.");
}
for (let i=1; i<=5; i++) {
    console.log(i);
}
const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("fullName");

        if (nameInput.value.trim() === "") {
            alert("Please enter your full name.");
        } else {
            alert("Your name has been accepted!");
        }
    });
}
const students = [
    {
    name:"Daizy",
    course:"DS",
    year:2
    },
    {
    name:"Arnold",
    course:"CS",
    year:2
    },
    {
    name:"Brenda",
    course:"DS",
    year:3
    },
    {
    name:"Frank",
    course:"CS",
    year:2
    },
    {
    name:"Joe",
    course:"DS",
    year:1
    }
];
function addStudentToPage(student) {
    const studentList = document.getElementById("student-list");
    const listItem = document.createElement("li");

    listItem.textContent =
        `${student.name} - ${student.course} - Year ${student.year}`;

    studentList.appendChild(listItem);
}
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";

    const studentCount = document.getElementById("student-count");

    if (studentCount) {
        studentCount.textContent = `Registered Students: ${students.length}`;
    }

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
}
const showStudentsButton = document.getElementById("showStudents");

if (showStudentsButton) {
    showStudentsButton.addEventListener("click", function() {

        fetch("students.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not load student data.");
                }
                return response.json();
            })
            .then(data => {
                displayAllStudents(data);
            })
            .catch(error => {
                console.error("Error:", error);

                const studentList = document.getElementById("student-list");

                if (studentList) {
                    studentList.textContent =
                        "Unable to load student data. Please try again.";
                }
            });

    });
}

if (showStudentsButton) {
    showStudentsButton.addEventListener("click", function() {
        displayAllStudents(students);
    });
}