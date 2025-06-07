const form = document.getElementById("registrationForm");
const tableBody = document.getElementById("userTable").getElementsByTagName('tbody')[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;

  const newRow = tableBody.insertRow();

  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = email;
  newRow.insertCell(2).textContent = password;
  newRow.insertCell(3).textContent = dob;
  newRow.insertCell(4).textContent = acceptTerms ? "true" : "false";

  form.reset();
});
