const API_URL = "http://localhost:5000/api/students";

const form = document.getElementById("studentForm");
const list = document.getElementById("studentList");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const student = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    course: document.getElementById("course").value
  };
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
  loadStudents();
});

async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();
  list.innerHTML = students.map(s =>
    `<li>${s.name} (${s.course})
      <button onclick="deleteStudent('${s._id}')">Delete</button>
    </li>`
  ).join("");
}

async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadStudents();
}

loadStudents();
