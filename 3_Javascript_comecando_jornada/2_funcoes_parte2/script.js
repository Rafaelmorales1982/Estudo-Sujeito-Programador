let area = document.getElementById('area');

function notas() {
    let nome = prompt("Digite nome do aluno");

    // Já valida o nome antes de pedir as notas
    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado...");
        area.innerHTML = "Clique no botão para acessar..";
        return; // Interrompe a função aqui
    }

    // Converte e já salva o valor numérico na variável
    let nota1 = Number(prompt("Digite sua nota 1:"));
    let nota2 = Number(prompt("Digite sua nota 2:"));
    
    let media = (nota1 + nota2) / 2;
    
    // Declara a variável fora do if/else para ela existir na função toda
    let resultado = ""; 

    if (media >= 7) {
        resultado = "APROVADO";
    } else {
        resultado = "REPROVADO";
    }

    // Usa += para ir acumulando o HTML sem apagar o que veio antes
    area.innerHTML = "Bem-vindo, <em>" + nome + "</em>";
    area.innerHTML += "<br> Valor nota 1: " + nota1;
    area.innerHTML += "<br> Valor nota 2: " + nota2;
    area.innerHTML += "<br> " + nome + ", sua média: " + media.toFixed(1) + " - <strong>" + resultado + "</strong><br><br>";

    let botaoSair = document.createElement('button');
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
}

function sair() {
    alert('Até mais..');
    area.innerHTML = "Você saiu da conta";
}