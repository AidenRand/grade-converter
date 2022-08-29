const text = document.getElementById("text");
const gpaScore = document.getElementById("gpa");
const input = document.getElementById("input");
const button = document.getElementById("btn1");

function convertGrade() {
  let grade = input.value;

  if (grade >= 97 && grade <= 100) {
    text.textContent = "Grade: A+";
    gpaScore.textContent = "GPA: 4.0";
  } else if (grade >= 93 && grade <= 96) {
    text.textContent = "Grade: A";
    gpaScore.textContent = "GPA: 4.0";
  } else if (grade >= 90 && grade <= 92) {
    text.textContent = "Grade: A-";
    gpaScore.textContent = "GPA: 3.7";
  } else if (grade >= 87 && grade <= 89) {
    text.textContent = "Grade: B+";
    gpaScore.textContent = "GPA: 3.3";
  } else if (grade >= 83 && grade <= 86) {
    text.textContent = "Grade: B";
    gpaScore.textContent = "GPA: 3.0";
  } else if (grade >= 83 && grade <= 86) {
    text.textContent = "Grade: B-";
    gpaScore.textContent = "GPA: 2.7";
  } else if (grade >= 77 && grade <= 79) {
    text.textContent = "Grade: C+";
    gpaScore.textContent = "GPA: 2.3";
  } else if (grade >= 73 && grade <= 76) {
    text.textContent = "Grade: C";
    gpaScore.textContent = "GPA: 2.0";
  } else if (grade >= 70 && grade <= 72) {
    text.textContent = "Grade: C-";
    gpaScore.textContent = "GPA: 1.7";
  } else if (grade >= 67 && grade <= 69) {
    text.textContent = "Grade: D+";
    gpaScore.textContent = "GPA: 1.3";
  } else if (grade >= 65 && grade <= 66) {
    text.textContent = "Grade: D";
    gpaScore.textContent = "GPA: 1.0";
  } else if (grade <= 65) {
    text.textContent = "Grade: F";
    gpaScore.textContent = "GPA: 0.0";
  } else {
    text.textContent = "an error has occurred";
  }
}

button.addEventListener("click", () => {
  convertGrade();
});
