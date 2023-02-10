const fortalezas = [
"Persistencia: si la tercera no es la vencida la vigésima lo puede ser.",
"Pensamiento lateral: a todo se le puede encontrar la vuelta.",
"Paciencia: el tiempo que se necesite.",
"Voluntad: si hay que hacerlo se hace.",
"Positivismo: nunca es tarde pero cuanto antes mejor."]
let fLen = fortalezas.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fortalezas[i] + "</li>";
}
text += "</ul>";

document.getElementById("listado").innerHTML = text;