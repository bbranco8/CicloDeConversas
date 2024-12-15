let susanaInterval; // Armazena o ID do intervalo para parar quando necessário

    // Função para gerar um número aleatório entre 0 e 2 (3 versões)
    function getRandomVersion() {
      return Math.floor(Math.random() * 3); // Retorna 0, 1 ou 2
    }

    // Função que altera a imagem do Braulio aleatoriamente
    function randomizeSusanaImage() {
      const susanaImage = document.getElementById('susana');
      const newVersion = getRandomVersion();
      susanaImage.src = `data/speakers/susana${newVersion}.png`;
    }

    // Inicia a troca constante das imagens
    function startSusanaRandomizing() {
      susanaInterval = setInterval(randomizeSusanaImage, 400); // Altera a cada 200ms
    }

    // Para a troca constante das imagens
    function stopSusanaRandomizing() {
      clearInterval(susanaInterval);
    }

    // Adiciona eventos à imagem
    const susanaImage = document.getElementById('susana');
    susanaImage.addEventListener('mouseenter', startSusanaRandomizing); // Inicia a troca ao passar o cursor
    susanaImage.addEventListener('mouseleave', stopSusanaRandomizing); // Para a troca ao tirar o cursor