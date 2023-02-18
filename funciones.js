const fortalezas = [
"<bold>Persistencia</bold>: si la tercera no es la vencida la vigésima lo puede ser.",
"<bold>Pensamiento lateral</bold>: a todo se le puede encontrar la vuelta.",
"<bold>Paciencia</bold>: el tiempo que se necesite.",
"<bold>Voluntad</bold>: se hace lo que se tenga que hacer.",
"<bold>Pensamiento positivo</bold>: nunca es tarde pero cuanto antes mejor."]
let fLen = fortalezas.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fortalezas[i] + "</li>";
}
text += "</ul>";

document.getElementById("listado").innerHTML = text;