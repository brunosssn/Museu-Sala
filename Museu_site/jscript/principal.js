// Pega os elementos da tela
const modal = document.getElementById("janelaModal");
const modalImg = document.getElementById("fotoGrande");
const botaoFechar = document.getElementsByClassName("fechar")[0];

// Seleciona todas as imagens dentro dos cards
const imagens = document.querySelectorAll("img");

// Adiciona o evento de clique em cada imagem
imagens.forEach(img => {
    img.style.cursor = "pointer"; // Deixa a setinha do mouse como uma mãozinha
    img.onclick = function() {
        modal.style.display = "block"; // Mostra a janela
        modalImg.src = this.src;       // Passa a foto clicada para a janela grande
    }
});

// Quando clicar no 'X', fecha a janela
botaoFechar.onclick = function() {
    modal.style.display = "none";
}

// Quando clicar em qualquer lugar fora da foto, também fecha
modal.onclick = function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
}