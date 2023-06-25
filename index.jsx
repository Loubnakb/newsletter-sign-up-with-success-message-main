const submitButton = document.getElementById("submit");
const card = document.querySelector(".card");
const thanks = document.querySelector(".thanks");
const form = document.querySelector("form");
const dismiss = document.getElementById("dismiss");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const userAddress = document.querySelector(".user-address");

submitButton.addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = emailInput.value;
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (userEmail && regex.test(userEmail)) {
    thanks.classList.remove("hidden");
    card.classList.add("hidden");
    userAddress.textContent = userEmail;
    form.reset();
  } else {
    errorMessage.textContent = "Valid email required";
    emailInput.classList.add("invalid-email");
  }
});

dismiss.addEventListener("click", () => {
  thanks.classList.add("hidden");
  card.style.display = "grid";
  form.reset();
});
