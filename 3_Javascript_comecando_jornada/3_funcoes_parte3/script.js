let area = document.getElementById("area");
let resultado = document.getElementById("resultado")

let nome = prompt("Digite seu nome: ");

area.innerHTML = "Bem vindo " + nome;

function notas() {
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);

  let media = (nota1 + nota2) / 2;
  resultado.innerHTML = "<br> Média " + media;
}


