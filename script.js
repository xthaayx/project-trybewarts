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

// // chamei o botão e desabilitei
// const botao = document.querySelector('#submit-btn');

// botao.disabled = true;

// // chamei o chekbox e adicionei um evento de input, ao qual se estivesse desabolitado o botão não ativava
// document.getElementById('agreement').addEventListener('input', () => {
//   const ativar = document.getElementById('agreement').value;
//   if (ativar !== null && ativar !== '') {
//     document.getElementById('submit-btn').disabled = false;
//   } else {
//     document.getElementById('submit-btn').disabled = true;
//   }
// });
