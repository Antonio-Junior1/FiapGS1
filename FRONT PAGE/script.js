function alternarTexto() {
    var textoMais = document.getElementById("textoMais");
    var botaoSaibaMais = document.getElementById("botaoSaibaMais");
    if (textoMais.style.display === "none") {
        textoMais.style.display = "block";
        botaoSaibaMais.innerText = "Mostrar Menos";
    } else {
        textoMais.style.display = "none";
        botaoSaibaMais.innerText = "Saiba Mais";
    }
}
