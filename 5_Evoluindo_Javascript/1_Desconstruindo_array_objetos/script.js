// DESCONTRUINDO  ARRAY E OBJETOS

let pessoa = {
    nome: "Rafael",
    sobrenome: "Morales",
    empresa: "Sujeito programador",
    cargo: "Programador Fullstack"
}
//Desconstruindo objetos
// const {nome:nomePessoa, sobrenome: sobrenome, empresa:nomeEmpresa, cargo: nomeCargo} = pessoa;

// console.log(`Nome ${nomePessoa} ${sobrenome}  Cargo: ${nomeCargo} Empresa:${nomeEmpresa}`)

// Descontruindo Array
let nomes = ['Rafael','Eduardo','José'];
let[nome1, nome2, nome3] = nomes;
console.log("Nome 1: " + nome1);
console.log("Nome 2: " + nome2);
console.log("Nome 3: " + nome3);