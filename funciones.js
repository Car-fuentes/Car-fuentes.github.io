const fortalezas = [
"Persistencia: si la tercera no es la vencida la vigésima lo puede ser.",
"Pensamiento lateral: a todo se le puede encontrar la vuelta.",
"Paciencia: el tiempo que se necesite.",
"Voluntad: se hace lo que se tenga que hacer.",
"Pensamiento positivo: nunca es tarde pero cuanto antes mejor."]
let fLen = fortalezas.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fortalezas[i] + "</li>";
}
text += "</ul>";

document.getElementById("listado").innerHTML = text;

document.getElementById("nombreOculto").onclick = function(){
  document.getElementById("nombre").innerHTML = "Fuentes Carolina Inés";
}

document.getElementById("celular").onclick = function(){
  document.getElementById("celu").innerHTML = "+54 11 34172056";
}

document.getElementById("mail").onclick = function(){
  document.getElementById("e-mail").innerHTML = "carolinainesfuentes@gmail.com";
}

document.getElementById("lugar").onclick = function(){
  document.getElementById("ubicacion").innerHTML = "Lomas de Zamora, Bs. As.";
}