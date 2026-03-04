import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');
const btnRegistrar = document.getElementById('btn-registrar');
const mensagemAlerta = document.getElementById('mensagem-alerta');

btnRegistrar.addEventListener('click', () => {
    const emailDigitado = emailInput.value;
    const senhaDigitada = senhaInput.value;
    console.log(emailDigitado)
    console.log(senhaDigitada)
    createUserWithEmailAndPassword(auth, emailDigitado, senhaDigitada)
        .then((userCredential) => {
            alert('Conta Criada com sucesso!');
            console.log("Sucesso:", userCredential.user);
        })
        .catch((error) => {
            alert('Erro:' + error.message);
        })
})