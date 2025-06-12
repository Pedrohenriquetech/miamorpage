// script.js
function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const error = document.getElementById("login-error");

    if (user === "prasempre" && pass === "meuamor") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.body.style.overflowY = "auto";

        document.querySelectorAll('.fofa').forEach(el => typeEffect(el, 50));
    } else {
        error.textContent = "Usuário ou senha incorretos! Tente novamente.";
    }
}

function typeEffect(element, speed) {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}