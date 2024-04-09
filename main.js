const form = document.getElementById("formulario")
let linhas = ''
numeros = []

form.addEventListener("submit", function(e){
    adicionaLinha()
    atualizaTabela()
    e.preventDefault();
});

function adicionaLinha(){
    const inputNome = document.getElementById("nome");
    const inputNumero = document.getElementById("numero");

    if(numeros.includes(inputNumero.value)){
        alert(`O número ${inputNumero.value} já foi inserido`)
    }

    else{
        numeros.push(inputNumero.value)
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`
        linhas += linha
    }

    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}