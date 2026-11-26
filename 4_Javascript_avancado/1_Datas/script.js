//TRABALHANDO COM DATAS

let data = new Date();// Data completa
console.log(data)

// Pegando apenas Hora
let hora = data.getHours();
console.log(hora)

// Pegando apenas minutos
let minutos = data.getMinutes();
console.log(minutos)


// Pegando apenas Segundos
let segundos = data.getMinutes();
console.log(segundos)

let milisegundos = data.getMilliseconds()
console.log(milisegundos);

// CRIANDO UMA DATA
let dataNova = new Date('March 10, 2018')
console.log(dataNova)

// CONVERTENDO DATA PARA  MILISEGUNDOS
let milisegundos2 = Date.parse(dataNova)
console.log(milisegundos2)

// CONVERTENDO MILISEGUNDOS PARA DATA PADRÃO
console.log(new Date(1520650800000))

// Pegando dia
console.log(data.getDate())

// Pegando mês sempre adicionar +1 pois meses começam contar 0 zero
console.log(dataNova.getMonth()+1)

// Pegando ano inteiro
console.log(dataNova.getFullYear())

console.log(dataNova.getDate()+'/'+dataNova.getMonth()+'/'+dataNova.getFullYear())