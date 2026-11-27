// setInterval

// function acao() {
//   document.write("Executando.. <br>")
// }
// setInterval(acao, 1000);


// Utilizando function anonima

// setInterval(()=>{
//   document.write("Teste <br>");
// }, 1000)


let contar = document.getElementById('contar');
let contador = 0;
let timer = setInterval(()=>{
  contador++;
  contar.textContent=(contador);
}, 1000);

clearInterval(timer);

// setTimeout
// Executa apenas uma vez espera o tempo e aparece
let time2 = setTimeout(()=>{
  contador++;
  contar.textContent=("Mostrar",contador);
},5000);

