import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if(!user) {
        window.location.href = "index.html";
    } else {
        document.getElementById('conteudo-privado').style.display = "flex"
    }
})

window.logout = async () => {
    try {
        await signOut(auth);
        window.location.href = "index.html";
    }catch(error) {
        console.error("Erro ao deslogar:", error)
    }
}