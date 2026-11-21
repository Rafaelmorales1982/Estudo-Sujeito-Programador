// Condicionais if - esle

let mostrar = document.getElementById('mostrar');
let ternario = document.getElementById('ternario');

let nome = 'Rafael';
let userOnline = true;

if(userOnline === true){
  mostrar.innerHTML = 'Seja bem vindo <br>' + nome + ' você está online';
} else {
  mostrar.innerHTML = 'Seja bem vindo <br>' + nome + ' você está Offline';

}

// operador ternário em JavaScript 

let idade = 18;
ternario.innerHTML = idade >= 18 ? 'Você é maior de idade:  '+ idade +' anos' : 'Você é menor de idade ' + idade + 'anos';