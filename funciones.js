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

document.getElementById("info__nombreOculto").onclick = function(){
  document.getElementById("info__nombre").innerHTML = "Fuentes Carolina Inés";
}

document.getElementById("info__celular").onclick = function(){
  document.getElementById("info__celu").innerHTML = "+54 11 34172056";
}

document.getElementById("info__mail").onclick = function(){
  document.getElementById("info__e-mail").innerHTML = "carolinainesfuentes@gmail.com";
}

document.getElementById("info__lugar").onclick = function(){
  document.getElementById("info__ubicacion").innerHTML = "Lomas de Zamora, Bs. As.";
}