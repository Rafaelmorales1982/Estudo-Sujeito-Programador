// Spread Operator
// let numeros = [1,2,3];
// let numerosJuntos = [...numeros,4,5,6];
// console.log(numerosJuntos);

// // Spread operator objetos
// let pessoa = {
//     nome: 'Rafael',
//     idade: 44,
//     cargo:'Programador'
// };

// let novaPessoa = {
//     ...pessoa,
//     status: 'Ativo',
//     cidade: 'Marilena',
//     cel: '44988437507'
// };



// console.log(novaPessoa);

function dadosPessoa(info){
    let dados = {
        ...info,
        status: "Ativos",
    };
    console.log(dados);
}
dadosPessoa({nome:'Rafael', idade:'44'})