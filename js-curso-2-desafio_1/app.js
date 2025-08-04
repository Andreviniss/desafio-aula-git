let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    alert('O botão foi clicado.');
}

function botaoAlerta() {
    alert('Eu estou aprendendo JS');
}

function botaoPrompt() {
    let cidade = prompt('Digite uma cidade no Brasil:');
    alert(`Estivemos em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let n1 = parseInt(prompt('Digite o primeiro número:'));
    let n2 = parseInt(prompt('Digite o segundo número:'));
    let resultado = n1 + n2;
    alert(`A soma dos dois números(${n1}+${n2}) deu ${resultado}.`);
}
