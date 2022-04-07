let saludarusuario = document.getElementById("saludar");
let nombreusuario: string;
nombreusuario = String(prompt("ingresar tu nombre de usuario"));
function saludarusuariomasprompt() {
  console.log("Hola " + nombreusuario);
}

saludarusuario?.addEventListener("click", saludarusuariomasprompt);
