let camilaInterval; // Armazena o ID do intervalo para parar quando necessário

    // Função para gerar um número aleatório entre 0 e 2 (3 versões)
    function getRandomVersion() {
      return Math.floor(Math.random() * 3); // Retorna 0, 1 ou 2
    }

    // Função que altera a imagem do Braulio aleatoriamente
    function randomizeCamilaImage() {
      const camilaImage = document.getElementById('camila');
      const newVersion = getRandomVersion();
      camilaImage.src = `data/speakers/camila${newVersion}.png`;
    }

    // Inicia a troca constante das imagens
    function startCamilaRandomizing() {
      camilaInterval = setInterval(randomizeCamilaImage, 400); // Altera a cada 200ms
    }

    // Para a troca constante das imagens
    function stopCamilaRandomizing() {
      clearInterval(camilaInterval);
    }

    // Adiciona eventos à imagem
    const camilaImage = document.getElementById('camila');
    camilaImage.addEventListener('mouseenter', startCamilaRandomizing); // Inicia a troca ao passar o cursor
    camilaImage.addEventListener('mouseleave', stopCamilaRandomizing); // Para a troca ao tirar o cursor