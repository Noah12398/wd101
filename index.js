const form = document.getElementById("registrationForm");
const tableBody = document.getElementById("userTable").getElementsByTagName('tbody')[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;

  const dobDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();
  const m = today.getMonth() - dobDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }

  if (age < 18 || age > 55) {
    alert("You must be between 18 and 55 years old.");
    return;
  }

  const newUser = { name, email, password, dob, acceptTerms };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  displayUsers();
  form.reset();
});

function displayUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  tableBody.innerHTML = "";
  users.forEach(user => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = user.name;
    newRow.insertCell(1).textContent = user.email;
    newRow.insertCell(2).textContent = user.password;
    newRow.insertCell(3).textContent = user.dob;
    newRow.insertCell(4).textContent = user.acceptTerms ? "true" : "false";
  });
}

window.onload = displayUsers;
