const password = document.getElementsByClassName("passwordField")[0];
const username = document.getElementsByClassName("usernameField")[0];
const btn = document.getElementsByClassName("btn")[0];
const passSuggest = document.querySelector(".suggest");

function checking() {
  const usernamee = document.querySelector(".usernameField").value;
  const passwordd = document.querySelector(".passwordField").value;
  const alert = document.querySelector(".alert-box");
  const correct = document.querySelector(".Correct-box");

  if (usernamee.trim() === "" || passwordd.trim() === "") {
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 5000);
  } else {
    var lowerCaseLetters = /[a-z]/g;

    if (password.value.match(lowerCaseLetters)) {
      passSuggest.style.visibility = "hidden";
      password.classList.add("error");
      passSuggest.style.visibility = "visible";
      setTimeout(() => {
        password.classList.remove("error");
        passSuggest.style.visibility = "hidden";
      }, 1500);
    }

    //checking uppercase letter
    var upperCaseLetters = /[A-Z]/g;

    if (password.value.match(upperCaseLetters)) {
      password.classList.remove("error");
      passSuggest.style.visibility = "hidden";
    } else {
      password.classList.add("error");
      passSuggest.style.visibility = "visible";
      setTimeout(() => {
        password.classList.remove("error");
        passSuggest.style.visibility = "hidden";
      }, 1500);
    }

    //checking Number in password
    var number = /[0-9]/g;

    if (password.value.match(number)) {
      password.classList.remove("error");
      passSuggest.style.visibility = "hidden";
    } else {
      password.classList.add("error");
      passSuggest.style.visibility = "visible";
      setTimeout(() => {
        password.classList.remove("error");
        passSuggest.style.visibility = "hidden";
      }, 1500);
    }

    // Validate length
    if (password.value.length >= 8) {
      password.classList.remove("error");
      passSuggest.style.visibility = "hidden";
    } else {
      password.classList.add("error");
      passSuggest.style.visibility = "visible";
      setTimeout(() => {
        password.classList.remove("error");
        passSuggest.style.visibility = "hidden";
      }, 1500);
    }

    if (
      password.value.match(upperCaseLetters) &&
      password.value.match(number) &&
      password.value.length >= 8 &&
      password.value.match(lowerCaseLetters)
    ) {
      correct.style.visibility = "visible";
    }
  }
}

const ok = document.querySelector(".green_btn");
const correct = document.querySelector(".Correct-box");

ok.addEventListener("click", function () {
  correct.style.visibility = "hidden";
  password.value = "";
  username.value = "";
});

const tryAgain = document.querySelector(".red_btn");
const alert = document.querySelector(".alert-box");
tryAgain.addEventListener("click", function () {
  alert.style.visibility = "hidden";
});

// Password show field
const showPassword = document.getElementById("eye");
const passwordField = document.querySelector(".passwordField");

showPassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPassword.style.color = "red";
    setTimeout(() => {
      showPassword.style.color = "black";
    }, 1500);
  } else {
    passwordField.type = "password";
  }
});
