const fortalezas = [
"<span>Persistencia</span>: si la tercera no es la vencida la vigésima lo puede ser.",
"<span>Pensamiento lateral</span>: a todo se le puede encontrar la vuelta.",
"<span>Paciencia</span>: el tiempo que se necesite.",
"<span>Voluntad</span>: se hace lo que se tenga que hacer.",
"<span>Pensamiento positivo</span>: nunca es tarde pero cuanto antes mejor."]
let fLen = fortalezas.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fortalezas[i] + "</li>";
}
text += "</ul>";

document.getElementById("listado").innerHTML = text;