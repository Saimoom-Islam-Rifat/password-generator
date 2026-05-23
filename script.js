const passwordInput = document.querySelector("#password");
const btn = document.querySelector(".btn");

function generatePassword(length = 16) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[randomValues[i] % chars.length];
  }

  return password;
}

btn.addEventListener("click", () => {
  passwordInput.value = generatePassword();
});

// Use autocomplete="off" in input element or below code to clear input field after page reload
// window.addEventListener("load", () => {
//   passwordInput.value = "";
// });
