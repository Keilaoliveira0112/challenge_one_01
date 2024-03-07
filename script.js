const botaoCriptografar = document.querySelector(".botao__criptografar");
const botaoDescriptografar = document.querySelector(".botao__descriptografar");
const computer = document.querySelector(".ImagemPC");
const paragraph = document.querySelector(".container__paragraph");
const result = document.querySelector(".result__text");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
    ocultarConteudoDinamico();
    const caixaDeTexto = recuperarTexto();
    if (caixaDeTexto.trim() === "") {
        mostrarErro("Digite um texto antes de criptografar.");
        return;
    }
    result.textContent = criptografarTexto(caixaDeTexto);
}

function descriptografar() {
    ocultarConteudoDinamico();
    const caixaDeTexto = recuperarTexto();
    if (caixaDeTexto.trim() === "") {
        mostrarErro("Digite um texto antes de descriptografar.");
        return;
    }
    if (!contemPadraoCriptografado(caixaDeTexto)) {
        mostrarErro("O texto não parece ter sido criptografado anteriormente.");
        return;
    }
    result.textContent = descriptografarTexto(caixaDeTexto);
}

function contemPadraoCriptografado(texto) {
    return texto.includes("ai") || texto.includes("enter") || texto.includes("imes") || texto.includes("ober") || texto.includes("ufat");
}

function mostrarErro(message) {
    result.textContent = message;
    result.style.color = "red";
}


function recuperarTexto() {
    const caixaDeTexto = document.querySelector(".textarea");
    return caixaDeTexto.value;
}

function ocultarConteudoDinamico() {
    computer.classList.add("ocultar");
    paragraph.classList.add("ocultar");
}

function criptografarTexto(message) {
    let text = message;
    let finalText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            finalText += "ai"
        }
        else if (text[i] == "e") {
            finalText += "enter"
        }
        else if (text[i] == "i") {
            finalText += "imes"
        }
        else if (text[i] == "o") {
            finalText += "ober"
        }
        else if (text[i] == "u") {
            finalText += "ufat"
        }
        else {
            finalText += text[i]
        }
    }
    return finalText;

}

function descriptografarTexto(message) {
    let text = message;
    let finalText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            finalText += "a"
            i = i + 1;
        }
        else if (text[i] == "e") {
            finalText += "e"
            i = i + 4;
        }
        else if (text[i] == "i") {
            finalText += "i"
            i = i + 3;
        }
        else if (text[i] == "o") {
            finalText += "o"
            i = i + 3;
        }

        else if (text[i] == "u") {
            finalText += "u"
            i = i + 3;
        }
        else {
            finalText += text[i];
        }

    }

    return finalText;

}

const copyButton = document.querySelector(".botao-copiar");
copyButton.addEventListener("click", copy = () => {
    let content = document.querySelector(".result__text").textContent;
    navigator.clipboard.writeText(content);
});