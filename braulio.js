let braulioInterval; // Armazena o ID do intervalo para parar quando necessário

    // Função para gerar um número aleatório entre 0 e 2 (3 versões)
    function getRandomVersion() {
      return Math.floor(Math.random() * 3); // Retorna 0, 1 ou 2
    }

    // Função que altera a imagem do Braulio aleatoriamente
    function randomizeBraulioImage() {
      const braulioImage = document.getElementById('braulio');
      const newVersion = getRandomVersion();
      braulioImage.src = `data/speakers/braulio${newVersion}.png`;
    }

    // Inicia a troca constante das imagens
    function startBraulioRandomizing() {
      braulioInterval = setInterval(randomizeBraulioImage, 400); // Altera a cada 200ms
    }

    // Para a troca constante das imagens
    function stopBraulioRandomizing() {
      clearInterval(braulioInterval);
    }

    // Adiciona eventos à imagem
    const braulioImage = document.getElementById('braulio');
    braulioImage.addEventListener('mouseenter', startBraulioRandomizing); // Inicia a troca ao passar o cursor
    braulioImage.addEventListener('mouseleave', stopBraulioRandomizing); // Para a troca ao tirar o cursor