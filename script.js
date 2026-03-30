//your JS code here. If required.
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // ✅ Validation
  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  // ✅ Promise
  const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // ✅ Handling Promise
  checkAge
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});