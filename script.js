const email = document.querySelector('#emailLogin');
const senha = document.querySelector('#senhaLogin');
const buttonLogin = document.querySelector('#enter');

// FUNÇÃO PARA LOGAR NO SITE

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

window.onload = () => {
  buttonLogin.addEventListener('click', login);
};
