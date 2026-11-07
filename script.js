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