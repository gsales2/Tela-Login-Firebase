import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const btnEntrar = document.getElementById("btn-entrar");
const btnRegistrar = document.getElementById("btn-registrar");
const mensagemAlerta = document.getElementById("mensagem-alerta");

btnRegistrar.addEventListener("click", () => {
  const emailDigitado = emailInput.value;
  const senhaDigitada = senhaInput.value;
  createUserWithEmailAndPassword(auth, emailDigitado, senhaDigitada)
    .then((userCredential) => {
      mensagemAlerta.style.display = "none";
      console.log("Sucesso:", userCredential.user);
      window.location.href = "logado.html";

    })
    .catch((error) => {
      mensagemAlerta.style.display = "block";

      if (error.code === "auth/email-already-in-use") {
        mensagemAlerta.innerText = "Este e-mail já está cadastrado.";
      } else if (error.code === "auth/weak-password") {
        mensagemAlerta.innerText = "A senha deve ter pelo menos 6 caracteres.";
      }else if (error.code === "auth/invalid-email"){
        mensagemAlerta.innerText = "Formato de e-mail inválido"
      }else {
        mensagemAlerta.innerText = "Ocorreu um erro ao tentar cadastrar.";
      }
      console.error("Erro completo:", error.code);
    });
});

btnEntrar.addEventListener("click", () => {
  const emailDigitado = emailInput.value;
  const senhaDigitada = senhaInput.value;

  signInWithEmailAndPassword(auth, emailDigitado, senhaDigitada)
    .then((userCredential) => {
      mensagemAlerta.style.display = "none";
      console.log("Sucesso:", userCredential.user);

      window.location.href = "logado.html";
    })
    .catch((error) => {
      mensagemAlerta.style.display = "block";

      if (error.code === "auth/invalid-credential") {
        mensagemAlerta.innerText = "E-mail ou senha incorretos.";
      } else if (error.code === "auth/invalid-email") {
        mensagemAlerta.innerText = "Formato de e-mail inválido.";
      } else {
        mensagemAlerta.innerText = "Ocorreu um erro ao tentar entrar.";
      }
      console.error("Erro completo:", error.code);
    });
});
