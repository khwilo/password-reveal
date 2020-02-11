const passwordInput = document.getElementById('password');
const togglePasswordDisplayBtn = document.querySelector('.toggle-displayBtn');
let revealPassword = false;

togglePasswordDisplayBtn.addEventListener('click', (event) => {
  revealPassword = !revealPassword;
  console.log(`Reveal password? ${revealPassword}`);

  if (revealPassword) {
    togglePasswordDisplayBtn.textContent = 'hide';
    passwordInput.type = 'text';
  } else {
    togglePasswordDisplayBtn.textContent = 'show';
    passwordInput.type = 'password';
  }
});
