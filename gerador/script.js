
const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";


sizePassword.textContent = sliderElement.value;
sliderElement.addEventListener("input", () => {
  sizePassword.textContent = sliderElement.value;
});


function generatePassword() {
  let pass = "";
  const length = sliderElement.value;

  for (let i = 0; i < length; i++) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  password.textContent = pass;
  containerPassword.classList.remove("hide");
}


password.addEventListener("click", () => {
  if (password.textContent) {
    navigator.clipboard.writeText(password.textContent);
    alert("Senha copiada com sucesso! ✅");
  }
});
